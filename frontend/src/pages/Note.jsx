import React, { useState, useEffect } from "react";
import { useCallback } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Note = () => {
  const navigate = useNavigate();
  const { noteId } = useParams();
  const [noteContent, setNoteContent] = useState();

  const request = async (url, params = {}, method = "GET") => {
    let options = {
      method,
      header: { "Content-Type": "application/json" },
    };
    return fetch(url, options).then((response) => response.json());
  };

  const getNote = useCallback(async () => {
    await request(`/notes/${noteId}`).then((currentContent) =>
      setNoteContent(currentContent)
    );
  }, [noteId]);

  useEffect(() => {
    if (noteId !== "add") getNote();
  }, [getNote, noteId]);

  const deleteNote = async (e) => {
    e.preventDefault();
    await request(`/notes/${noteId}`, {}, "DELETE");
    navigate("/");
  };

  const submitNote = async (e) => {
    e.preventDefault();

    const params = {
      title: "request from react",
      content: noteContent,
    };

    let method;
    let url = "/notes";

    if (noteId !== "add") {
      method = "PUT";
      url += `/${noteId}?${new URLSearchParams(params)}`;
    } else {
      method = "POST";
      url += `?${new URLSearchParams(params)}`;
    }

    await request(url, params, method);

    navigate("/");
  };

  return (
    <>
      <Link to={"/"}>Go Back</Link>

      {noteId !== "add" && <button onClick={deleteNote}>Delete</button>}

      <textarea
        onChange={(e) => {
          setNoteContent(e.target.value);
        }}
        value={noteContent?.content}
        placeholder="Enter note..."
      ></textarea>

      <button onClick={submitNote}>Save</button>
    </>
  );
};

export default Note;
