#!/bin/zsh
# Generate brand images via KIE GPT Image 2
set -u
cd "$(dirname "$0")"
API_KEY="$(grep -i '^kie_api_key=' .env | head -1 | cut -d= -f2 | tr -d '[:space:]')"
[ -z "$API_KEY" ] && { echo "no api key"; exit 1; }
BASE="https://api.kie.ai"
mkdir -p images

KEYS=(hero-reception treatment-room clinic-detail)
typeset -A AR
AR[hero-reception]="4:3"
AR[treatment-room]="4:3"
AR[clinic-detail]="3:4"

typeset -A IMG_PROMPT
IMG_PROMPT[hero-reception]="Photorealistic interior of a modern Dutch dental clinic reception in Amsterdam. A long curved sage green muted olive reception desk (matte finish) sits in the center, with three round white pendant lights hanging above it in a row. Behind the desk, a soft warm beige wall with a small wall sign that reads 'samen mondzorg' in a thin elegant lowercase serif, with a minimal tooth icon. Light warm oak wooden floor, a large green leafy plant on the right corner, soft daylight from outside, calming Scandinavian minimalist style, no people visible, natural beige and sage color palette, architectural interior photography, soft shadows, shallow depth of field, high quality, 35mm lens."
IMG_PROMPT[treatment-room]="Photorealistic interior of a calm modern dental treatment room in Amsterdam. A clean white modern dental chair in the center with a sage green leather cushion, matte sage green cabinetry on the wall, warm oak wood floor, a large window on the left letting in soft natural daylight, a small green plant on a side cabinet, minimalist Scandinavian design, no people visible, no logos, calm and inviting atmosphere, muted beige and olive green palette, architectural interior photography, soft natural shadows, shallow depth of field, very clean composition."
IMG_PROMPT[clinic-detail]="Photorealistic close-up detail of a modern Dutch dental clinic waiting corner. A pale linen upholstered bench against a warm beige wall, a small round side table with a single green leafy plant, soft natural daylight from the side, a framed minimalist line drawing of a smile on the wall (no text), warm oak floor, sage green accent pillow on the bench, Scandinavian minimalist style, no people, no logos, muted earth and olive tones, calming editorial interior photography."

typeset -A TASK_ID

create_task() {
    local key="$1"
    local p
    p=$(python3 -c 'import json,sys; sys.stdout.write(json.dumps(sys.argv[1]))' "${IMG_PROMPT[$key]}")
    local body="{\"model\":\"gpt-image-2-text-to-image\",\"input\":{\"prompt\":${p},\"aspect_ratio\":\"${AR[$key]}\",\"resolution\":\"2K\"}}"
    echo "[create] $key" >&2
    local resp
    resp=$(curl -sS -X POST "$BASE/api/v1/jobs/createTask" \
        -H "Authorization: Bearer $API_KEY" \
        -H "Content-Type: application/json" \
        --data "$body")
    echo "  resp: $resp" >&2
    local tid
    tid=$(printf '%s' "$resp" | python3 -c "import json,sys; d=json.loads(sys.stdin.read()); print(d.get('data',{}).get('taskId',''))")
    if [ -z "$tid" ]; then echo "ERROR creating $key" >&2; return 1; fi
    TASK_ID[$key]="$tid"
}

poll_task() {
    local key="$1"
    local tid="${TASK_ID[$key]}"
    local i=0
    while [ $i -lt 180 ]; do
        local info
        info=$(curl -sS -H "Authorization: Bearer $API_KEY" "$BASE/api/v1/jobs/recordInfo?taskId=$tid")
        local state
        state=$(printf '%s' "$info" | python3 -c "import json,sys; d=json.loads(sys.stdin.read()); print(d.get('data',{}).get('state',''))")
        echo "[poll $key $tid] state=$state" >&2
        if [ "$state" = "success" ]; then
            local url
            url=$(printf '%s' "$info" | python3 -c "import json,sys; d=json.loads(sys.stdin.read()); r=json.loads(d['data']['resultJson']); print(r['resultUrls'][0])")
            echo "[done $key] $url" >&2
            local ext="png"
            case "$url" in
                *.jpg*|*.jpeg*) ext="jpg" ;;
                *.webp*) ext="webp" ;;
            esac
            curl -sS -L -o "images/${key}.${ext}" "$url"
            echo "saved images/${key}.${ext}" >&2
            return 0
        fi
        if [ "$state" = "fail" ]; then
            echo "[fail $key] $info" >&2
            return 1
        fi
        sleep 5
        i=$((i+1))
    done
    echo "timeout $key" >&2
    return 1
}

for k in $KEYS; do create_task "$k" || exit 1; done
echo "tasks: ${(kv)TASK_ID}"
for k in $KEYS; do poll_task "$k" || true; done
echo "all done"
ls -la images/
