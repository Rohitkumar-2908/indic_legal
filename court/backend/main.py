# backend/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="Indic-Legal GPT API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class SearchRequest(BaseModel):
    query: str
    lang: str = "en"
    top_k: int = 5

class TranslateRequest(BaseModel):
    text: str
    source_lang: str
    target_lang: str

class SummaryRequest(BaseModel):
    text: str
    lang: str = "en"

@app.get("/")
def root():
    return {"status": "ok", "service": "Indic-Legal GPT API"}

@app.post("/preview")
def preview(req: SearchRequest):
    return {"original": req.query, "translated_preview": req.query}

@app.post("/search")
def search(req: SearchRequest):
    return {
        "query": req.query,
        "lang": req.lang,
        "results": [
            {
                "title": "State of Haryana v. Bhajan Lal",
                "court": "Supreme Court",
                "year": 1990,
                "ratio": "Guidelines for quashing proceedings",
                "score": 0.94
            },
            {
                "title": "Maneka Gandhi v. Union of India",
                "court": "Supreme Court",
                "year": 1978,
                "ratio": "Life and liberty include dignity",
                "score": 0.89
            }
        ]
    }

@app.post("/translate")
def translate(req: TranslateRequest):
    return {
        "source_lang": req.source_lang,
        "target_lang": req.target_lang,
        "translated_text": req.text
    }

@app.post("/summarize")
def summarize(req: SummaryRequest):
    return {
        "language": req.lang,
        "summary_lines": [
            "Facts: Property dispute with inheritance issue.",
            "Issue: Whether the claimant has succession rights.",
            "Ratio: Similar precedent supports the claim.",
            "Holding: Relief depends on local amendments.",
            "Applicability: Verify jurisdiction and latest law."
        ]
    }