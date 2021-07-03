// import useState hook to initialize our states and make them re-settable
import { useState } from 'react';

function PaintingForm() {
  // create a state to keep track of ImgURL
  // const [stateName, setterMethod] = useState(initialStateValue);

  const [imgUrl, setImgUrl] = useState("");
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [date, setDate] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  function handleImgUrl(e) {
    setImgUrl(e.target.value)
  }

  function handleTitle(e) {
    setTitle(e.target.value)
  }

  function handleArtist(e) {
    setArtist(e.target.value)
  }

  function handleDate(e) {
    setDate(e.target.value)
  }

  function handleWidth(e) {
    setWidth(e.target.value)
  }

  function handleHeight(e) {
    setHeight(e.target.value)
  }

{/* Breakout Activity #1: Add necessary callback functions to "control" all remaining <inputs>. 
    Extra Credit: How we can avoid using separate callback functions to handle each controlled <input>? */}

  return (
    <div>
      <h1> Add a New Painting</h1>
      <form>

          {/* Add onChange event handler to invoke handleImgUrl upon each
          keystroke change and set value equal to imgUrl to keep state / value
          in sync */}
          <input 
              type="text" 
              placeholder="ImgURL"
              onChange={handleImgUrl}
              value={imgUrl}    
          /><br/>

          <input 
              type="text" 
              placeholder="Title" 
              onChange={handleTitle}
              value={title}   
              /><br/>
          <input 
              type="text" 
              placeholder="Artist Name"
              onChange={handleArtist}
              value={artist}    
              /><br/>
          <input 
              type="text" 
              placeholder="date"
              onChange={handleDate}
              value={date}
              /><br/>
          <input 
              type="text" 
              placeholder="width"
              onChange={handleWidth}
              value={width}
              /><br/>
          <input 
              type="text" 
              placeholder="height"
              onChange={handleHeight}
              value={height}    
              /><br/>

          <input type="submit" value="Add New Painting"/>
      </form>

      {/* Breakout Activity #2: Dynamically display a list of Added Titles / Artists as we continue to submit new Painting entries.  */}
    </div>
  );
}

export default PaintingForm;
