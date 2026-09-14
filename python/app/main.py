from fastapi import FastAPI

app = FastAPI(title="setup-check")


@app.get("/health")
def health() -> dict:
    return {"ok": True}
