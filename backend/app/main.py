from fastapi import FastAPI, Path
from pydantic import BaseModel

app = FastAPI()


@app.get("/")
def home():
    return {"name": "FRANK"}
