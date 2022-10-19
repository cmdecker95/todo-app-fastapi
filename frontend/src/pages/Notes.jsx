import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ListItem from "../components/ListItem";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    const response = await fetch("/notes");
    const data = await response.json();
    setNotes(data);
  };

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
