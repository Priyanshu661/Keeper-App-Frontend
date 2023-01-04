import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add"






function CreateArea(props) {

  const[isExpanded,setExpanded]=useState(false)

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        title:note.title,
        content:note.content
      })
      };
  
  
     fetch('http://localhost:4000/', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
  


    // props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expand(){
    setExpanded(true)
  }


  


  return (
    <div>
      <form className="create-note">
      {isExpanded && <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />}
        
        <textarea
        onClick={expand}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded?"3":"1"}
        />
        <button onClick={submitNote}><AddIcon/></button>
      </form>
    </div>
  );
}

export default CreateArea;
