import React, { useState } from "react";
import './App.css';
import Header from './Header';
import NoteForm from './NoteForm';
import Note from './Note';

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
     setNotes(prevNotes => {
      return [...prevNotes, newNote];
        });
    }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="App">
      {/* {"Header"} */}
      <div className="Header">
        <Header/>
      </div>
      <div className="Note-Form">
        <NoteForm onAdd={addNote} />
        {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      </div>
    </div>
  );
}

export default App;
