#main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from voice import recognizeSpeech  # 음성 인식 모듈 import
app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 음성 인식 시작 엔드포인트
@app.get("/voice")
async def voice_recognition():
    result = recognizeSpeech()
    return result


@app.get("/")
async def root():
    return {"message": "connected fast api(backend)"}
