import React from "react";

function NoteViewer(props) {
  
  

  return (
    <>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
      <button onClick={props.dropDisplay}>Edit</button>
    </>
  );
}

export default NoteViewer;
