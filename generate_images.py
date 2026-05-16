#!/usr/bin/env python3
"""Generate brand images for Samen Mondzorg via KIE GPT Image 2."""
import json
import os
import sys
import time
import urllib.request
import urllib.error
from pathlib import Path

ROOT = Path(__file__).parent
IMAGES_DIR = ROOT / "images"
IMAGES_DIR.mkdir(exist_ok=True)

def load_api_key():
    env_path = ROOT / ".env"
    for line in env_path.read_text().splitlines():
        if "=" in line and "kie_api_key" in line.lower():
            return line.split("=", 1)[1].strip()
    raise SystemExit("kie_api_key not found in .env")

API_KEY = load_api_key()
BASE = "https://api.kie.ai"

PROMPTS = {
    "hero-reception": {
        "prompt": (
            "Photorealistic interior of a modern Dutch dental clinic reception in Amsterdam. "
            "A long curved sage green / muted olive reception desk (matte finish) sits in the center, "
            "with three round white pendant lights hanging above it in a row. "
            "Behind the desk, a soft warm beige wall with a small wall sign that reads 'samen mondzorg' "
            "in a thin elegant lowercase serif, with a minimal tooth icon. "
            "Light warm oak wooden floor, a large green leafy plant on the right corner, "
            "soft daylight from outside, calming Scandinavian minimalist style, no people visible, "
            "natural beige and sage color palette, architectural interior photography, soft shadows, "
            "shallow depth of field, high quality, 35mm lens."
        ),
        "aspect_ratio": "4:3",
    },
    "treatment-room": {
        "prompt": (
            "Photorealistic interior of a calm modern dental treatment room in Amsterdam. "
            "A clean white modern dental chair in the center with a sage green leather cushion, "
            "matte sage green cabinetry on the wall, warm oak wood floor, "
            "a large window on the left letting in soft natural daylight, "
            "a small green plant on a side cabinet, minimalist Scandinavian design, "
            "no people visible, no logos, calm and inviting atmosphere, "
            "muted beige and olive green palette, architectural interior photography, "
            "soft natural shadows, shallow depth of field, very clean composition."
        ),
        "aspect_ratio": "4:3",
    },
    "clinic-detail": {
        "prompt": (
            "Photorealistic close-up detail of a modern Dutch dental clinic waiting corner. "
            "A pale linen upholstered bench against a warm beige wall, a small round side table "
            "with a single green leafy plant, soft natural daylight from the side, "
            "a framed minimalist line drawing of a smile on the wall (no text), "
            "warm oak floor, sage green accent pillow on the bench, "
            "Scandinavian minimalist style, no people, no logos, "
            "muted earth and olive tones, calming editorial interior photography."
        ),
        "aspect_ratio": "3:4",
    },
}


def http_post(url: str, body: dict) -> dict:
    data = json.dumps(body).encode("utf-8")
    req = urllib.request.Request(
        url,
        data=data,
        headers={
            "Authorization": f"Bearer {API_KEY}",
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=60) as resp:
        return json.loads(resp.read().decode("utf-8"))


def http_get(url: str) -> dict:
    req = urllib.request.Request(
        url,
        headers={
            "Authorization": f"Bearer {API_KEY}",
            "Accept": "application/json",
        },
    )
    with urllib.request.urlopen(req, timeout=60) as resp:
        return json.loads(resp.read().decode("utf-8"))


def create_task(prompt: str, aspect_ratio: str) -> str:
    payload = {
        "model": "gpt-image-2-text-to-image",
        "input": {
            "prompt": prompt,
            "aspect_ratio": aspect_ratio,
            "resolution": "2K",
        },
    }
    resp = http_post(f"{BASE}/api/v1/jobs/createTask", payload)
    print(f"  create resp: {resp}", flush=True)
    if resp.get("code") != 200:
        raise RuntimeError(f"Create failed: {resp}")
    return resp["data"]["taskId"]


def poll_task(task_id: str, timeout_s: int = 600) -> str:
    deadline = time.time() + timeout_s
    delay = 4
    while time.time() < deadline:
        info = http_get(f"{BASE}/api/v1/jobs/recordInfo?taskId={task_id}")
        data = info.get("data") or {}
        state = data.get("state")
        print(f"  [{task_id}] state={state}", flush=True)
        if state == "success":
            result = json.loads(data["resultJson"])
            urls = result.get("resultUrls") or []
            if not urls:
                raise RuntimeError(f"No result URL: {data}")
            return urls[0]
        if state == "fail":
            raise RuntimeError(f"Task failed: {data}")
        time.sleep(delay)
        delay = min(delay + 2, 12)
    raise RuntimeError(f"Timeout waiting for {task_id}")


def download(url: str, dest: Path) -> None:
    req = urllib.request.Request(url, headers={"User-Agent": "curl/8"})
    with urllib.request.urlopen(req, timeout=120) as r, dest.open("wb") as f:
        f.write(r.read())
    print(f"  saved {dest}", flush=True)


def main():
    only = sys.argv[1] if len(sys.argv) > 1 else None
    tasks = {}
    for key, spec in PROMPTS.items():
        if only and key != only:
            continue
        print(f"create [{key}] ar={spec['aspect_ratio']}", flush=True)
        tasks[key] = create_task(spec["prompt"], spec["aspect_ratio"])
    print(f"tasks: {tasks}", flush=True)
    results = {}
    for key, tid in tasks.items():
        print(f"poll [{key}] {tid}", flush=True)
        url = poll_task(tid)
        ext = ".png"
        if "." in url.split("?")[0].split("/")[-1]:
            ext = "." + url.split("?")[0].split(".")[-1]
            if len(ext) > 6:
                ext = ".png"
        dest = IMAGES_DIR / f"{key}{ext}"
        download(url, dest)
        results[key] = str(dest)
    print(json.dumps(results, indent=2))


if __name__ == "__main__":
    main()
