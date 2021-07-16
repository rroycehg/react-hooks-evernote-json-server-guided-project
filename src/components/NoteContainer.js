import React, { useEffect, useState } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {
  const [notes, setNotes] = useState([])
  const [searchItem, setSearchItem] = useState("")
  const [currentNote, setCurrentNote] = useState(null)
  
  
const makeItemChange = (e) =>  setSearchItem(e.target.value) 


 useEffect(() => {
    fetch("http://localhost:3000/notes")
      .then(res => res.json())
      .then(data => setNotes(data))
  }, [])
    

  
  function makeNewPost () {
    fetch("http://localhost:3000/notes",
   {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userId: 1,
      title: "Default Title",
      body:"Test Body"
    })
  })
    .then(res => res.json())
    .then(newPost => appendNewPost(newPost))
  }
  

  function appendNewPost(newPost){
     let newNotes = [newPost,...notes]
     setNotes(newNotes)
  }

  
  
  function appendNewEdit(newEdit) {
    let editArray= notes.map(note=>{
        if (note.id === newEdit.id){
          return newEdit
        }else{
          return note
        }
      })
      setNotes(editArray)
    }
    

  
  
 function filteredNotes () {
    return notes.filter(note => note.title.toLowerCase().includes(searchItem.toLowerCase())) 
  }


  function selectCurrentNote(noteId) {
    
      let current = notes.find(note => note.id === noteId)
      setCurrentNote(current)
  }
  

    return (
    <>
      <Search searchItem={searchItem} makeItemChange={makeItemChange}/>
      <div className="container">
        <Sidebar notes={filteredNotes()} selectCurrentNote={selectCurrentNote}
        makeNewPost={makeNewPost} /> 
        <Content currentNote={currentNote} appendNewEdit={appendNewEdit}/>
      </div>
    </>
  );
}

export default NoteContainer;
