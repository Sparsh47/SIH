from fastapi import FastAPI
import json
from fastapi.middleware.cors import CORSMiddleware

from print import quiz_file
from ss import topic_file

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace with your ReactJS client's domain
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)



@app.get("/quessionaire-api/{name}")
def get_json_data(name: str):
    print({"data":quiz_file(name)})
    return quiz_file(name)

@app.get("/topic-api/{name}")
def get_json_data(name: str):
    print({"data":topic_file(name)})
    return topic_file(name)


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="127.0.0.1", port=8000)
