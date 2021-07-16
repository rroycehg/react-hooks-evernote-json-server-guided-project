import React from "react";

function NoteItem(props) {
  return (
    <li onClick={() => props.selectCurrentNote(props.id) }>
      <h2>{props.title}</h2>
      <p>{props.body.substring(0, 15)}</p>
    </li>
  );
}

export default NoteItem;
