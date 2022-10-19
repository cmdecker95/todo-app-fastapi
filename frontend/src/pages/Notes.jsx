import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ListItem from "../components/ListItem";

const dummyData = [
  { id: 1, body: "t1" },
  { id: 2, body: "t2" },
  { id: 3, body: "t3" },
];

const Notes = () => {
  const [notes, setNotes] = useState(dummyData);

  return (
    <>
      <Link to={"/add"}>Add</Link>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <ListItem note={note} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Notes;
