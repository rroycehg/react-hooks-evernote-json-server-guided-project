import React, {useState} from "react";

function NoteEditor(props) {
  const [newTitle, setNewTitle] = useState(props.currentNote.title)
  const [newBody, setNewBody] = useState(props.currentNote.body)
  
  
  
  function handleNewPost(e) {
    e.preventDefault()
    const id = props.currentNote.id

    fetch(`http://localhost:3000/notes/${id}`,
    {
     method: 'PATCH',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({
       userId: 1,
       title: newTitle,
       body: newBody
     })
   })
     .then(res => res.json())
     .then(newEdit => props.appendNewEdit(newEdit))
   }

  

  return (
    
    <form className="note-editor" onClick={handleNewPost}>
      <input type="text" name="title" 
      onChange={e => setNewTitle(e.target.value)} 
      value={newTitle}/>
      
      <textarea name="body" 
      onChange={e => setNewBody(e.target.value)}
      value={newBody} />
      
      <div className="button-row">
        <input className="button" type="submit" value="Save" />
        <button type="button" onClick={props.cancelDisplay}>Cancel</button>
      </div>
    </form>
  );
}

export default NoteEditor;
