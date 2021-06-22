import "./styles.css";
import { useEffect, useState } from "react";
import { Note } from "./Note.js";
import {
  createAll as createNote,
  getAll as getAllNotes,
} from "./services/notes";

/*
{notes.map((note) => {
      return <p><strong>{note.id}</strong></p>;
    })}
*/

export default function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    getAllNotes().then((notes) => {
      setNotes(notes);
      setLoading(false);
    });
  }, []);

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("crear nota");

    const noteToAddToState = {
      title: newNote,
      body: newNote,
      userId: 1,
    };

    setError("");
    createNote(noteToAddToState)
      .then((newNotes) => {
        setNotes((prevNotes) => prevNotes.concat(newNotes));
      })
      .catch((e) => {
        console.error(e);
        setError("La API ha fallado");
      });

    setNewNote("");
  };

  console.log("render");

  return (
    <div>
      <h1>Notes</h1>
      {loading ? "Cargando..." : ""}
      <ol>
        {notes.map((note) => (
          <Note key={note.id} {...note} />
        ))}
      </ol>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote} />
        <button>Crear nota</button>
      </form>
      {error ? <span style={{ color: "red" }}>error</span> : ""}
    </div>
  );
}
