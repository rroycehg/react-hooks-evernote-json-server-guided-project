import React from "react";
import NoteItem from "./NoteItem";

function NoteList(props) {
  // const notecards = props.notes.map(note => <NoteItem title={note.title} caption={note.body}/>)
  const notecards = props.notes.map(note => <NoteItem key={note.id} {...note} 
    selectCurrentNote={props.selectCurrentNote}/>)
  
  return (
    <ul>
      {/* Render list of notes here... */}
      {notecards}
      
    </ul>
  );
}

export default NoteList;
