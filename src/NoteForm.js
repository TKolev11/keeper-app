import React, { useState } from 'react';
import './NoteForm.css';
import AddIcon from '@mui/icons-material/Add';

function CreateNote(props) {

  const [note,setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const {name, value} = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    if(note.title.trim().length !== 0 && note.content.trim().length !== 0) {
      setNote({
        title: "",
        content: ""
      });
      props.onAdd(note);
    } else {
      alert("invalid item");
    }
   
    
    event.preventDefault();
  }
   
  return (
    <div className='note-form'>
        <form>
            <input name="title" value={note.title} onChange={handleChange} placeholder="Title"></input>
            <textarea name="content" value={note.content} onChange={handleChange} placeholder="Take a note..." rows="3"></textarea>
            <button onClick={submitNote}><AddIcon/></button>
        </form>
    </div>
  )
}

export default CreateNote