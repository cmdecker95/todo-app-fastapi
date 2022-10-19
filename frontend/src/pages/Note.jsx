import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const dummyData = [
  { id: "1", body: "t1" },
  { id: "2", body: "t2" },
  { id: "3", body: "t3" },
];

const Note = () => {
  const { noteId } = useParams();
  const dummyNote = dummyData.find((note) => note.id === noteId);
  const [note, setNote] = useState(dummyNote);

  return (
    <>
      <Link to={"/"}>Go Back</Link>
      {noteId !== "add" && <button>Delete</button>}
      <textarea
        onChange={(e) => {
          setNote(e.target.value);
        }}
        value={note?.body}
        placeholder="Enter note..."
      ></textarea>
      <button>Save</button>
    </>
  );
};

export default Note;
