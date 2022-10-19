from datetime import datetime
from uuid import uuid1
from pydantic import BaseModel
from typing import Union

from fastapi import Body, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

NOTES = []


### Schemas
class Note(BaseModel):
    id: str
    date_created: datetime
    date_modified: datetime
    title: Union[str, None] = None
    content: Union[str, None] = None


@app.get("/notes")
async def get_notes():
    if not NOTES:
        for i in range(3):
            create_note(title=f"New Note {i}",
                        content=f"Body for New Note {i}")
    return NOTES


@app.post("/notes")
async def create_note(title: str = None, content: str = None):

    date_created = datetime.now()

    new_note = Note(
        id=str(uuid1()),
        date_created=date_created,
        date_modified=date_created,
        title=title,
        content=content,
    )
    NOTES.append(new_note)
    return new_note


@app.get("/notes/{note_id}")
async def get_note(note_id: str):
    for note in NOTES:
        print("checking", note)
        if note.id == note_id:
            print("found!")
            return note

    raise HTTPException(404, "Note was not found.")


@app.put("/notes/{uuid}")
async def update_note(uuid: str, title: str = None, content: str = None):
    for note in NOTES:
        if note.id == uuid:
            note.date_modified = datetime.now()

            if title is not None:
                note.title = title

            if content is not None:
                note.content = content

            return note

    raise HTTPException(404, "Note was not found.")


@app.delete("/notes/{uuid}")
async def delete_note(uuid: str):
    for note in NOTES:
        if note.id == uuid:
            NOTES.remove(note)
            return note

    raise HTTPException(404, "Note was not found.")
