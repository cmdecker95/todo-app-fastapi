import React, { useState, useEffect } from "react";
import { useCallback } from "react";
import { Link, useParams } from "react-router-dom";

const Note = () => {
  const { noteId } = useParams();
  const [note, setNote] = useState();

  const getNote = useCallback(async () => {
    const response = await fetch(`http://localhost:8000/notes/${noteId}`);
    const data = await response.json();
    setNote(data);
  }, [noteId]);

  useEffect(() => {
    if (noteId !== "add") getNote();
  }, [getNote, noteId]);

  // TODO: Implement submitData()

  return (
    <>
      <Link to={"/"}>Go Back</Link>
      {noteId !== "add" && <button>Delete</button>}
      <textarea
        onChange={(e) => {
          setNote(e.target.value);
        }}
        value={note?.content}
        placeholder="Enter note..."
      ></textarea>
      <button>Save</button>
    </>
  );
};

export default Note;
