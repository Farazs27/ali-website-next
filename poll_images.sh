#!/bin/zsh
# Poll already-created KIE tasks and download results.
set -u
cd "$(dirname "$0")"
API_KEY="$(grep -i '^kie_api_key=' .env | head -1 | cut -d= -f2 | tr -d '[:space:]')"
BASE="https://api.kie.ai"
mkdir -p images

# task IDs from the prior createTask calls
typeset -A TID
TID[hero-reception]="d69368dd0d5c7c3bda9ae420aa513ff6"
TID[treatment-room]="c634e1e0fad93412e82477d2c2f4287f"
TID[clinic-detail]="f445a2965abb71c8bf08c95f93195eb4"

KEYS=(hero-reception treatment-room clinic-detail)

poll_one() {
    local key="$1"
    local tid="${TID[$key]}"
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
            echo "saved images/${key}.${ext} ($(wc -c < "images/${key}.${ext}") bytes)" >&2
            return 0
        fi
        if [ "$state" = "fail" ]; then
            echo "[fail $key] $info" >&2
            return 1
        fi
        sleep 6
        i=$((i+1))
    done
    echo "timeout $key" >&2
    return 1
}

for k in $KEYS; do poll_one "$k" || true; done
echo "all done"
ls -la images/
