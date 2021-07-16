import React,{useState} from "react";
import NoteEditor from "./NoteEditor";
import NoteViewer from "./NoteViewer";
import Instructions from "./Instructions";

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and getContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
function Content(props) {
 const [toggle, setToggle] = useState(false)
  
 
 function dropDisplay(e) {
  e.preventDefault()

  setToggle(e.target.value = !toggle)
}
  
 function cancelDisplay(e) {
   e.preventDefault()
  
   setToggle(!toggle)
 }
  
  const getContent = () => {
    if (toggle) {
      return <NoteEditor currentNote={props.currentNote} 
      appendNewEdit={props.appendNewEdit}
      cancelDisplay={cancelDisplay}/>;
    } else if (props.currentNote) {
      return <NoteViewer title={props.currentNote.title} 
      body={props.currentNote.body} 
      dropDisplay={dropDisplay}
      />;
    } else {
      return <Instructions />;
    }
  };

  return <div className="master-detail-element detail">{getContent()}</div>;
}

export default Content;
