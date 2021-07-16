import  React from "react";
import NoteList from "./NoteList";

function Sidebar(props) {
  
return (
    <div className="master-detail-element sidebar">
      <NoteList notes={props.notes} selectCurrentNote={props.selectCurrentNote}/>
      <button onClick={props.makeNewPost}>New</button>
    </div>
  );
}

export default Sidebar;
