import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

 

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
       id
      })
      };
  
  
     fetch('http://localhost:4000/delete', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
  




    // setNotes(prevNotes => {
    //   return prevNotes.filter((noteItem, index) => {
    //     return index !== id;
    //   });
    // });
  }

  // function handleClick(){
    fetch("http://localhost:4000/").then((res)=>res.json()).then((json)=>setNotes(json))
  


 
  return (
    <div>
    <Header />



{/* 
    <button onClick={handleClick}>Click me</button> */}


   
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={noteItem._id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
