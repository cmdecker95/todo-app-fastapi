import React, { useState, useEffect } from "react";
import { useCallback } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import { ReactComponent as SaveIcon } from "../assets/save.svg";

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
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to={"/"}>
            <ArrowLeft />
          </Link>
        </h3>

        {noteId !== "add" && <button onClick={deleteNote}>Delete</button>}
      </div>

      <textarea
        onChange={(e) => {
          setNoteContent(e.target.value);
        }}
        value={noteContent?.content}
        placeholder="Enter your note here"
        required
      ></textarea>

      <div onClick={submitNote} className="floating-button">
        <SaveIcon />
      </div>
    </div>
  );
};

export default Note;
