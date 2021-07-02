// import useState hook to initialize our states and make them re-settable
import { useState } from 'react';



function PaintingForm() {
// create a state to keep track of ImgURL
// const [stateName, setterMethod] = useState(initialStateValue);
  const[formData, setFormData] = setState([])
  
  const [imgUrl, setImgUrl] = useState("");

  function handleImgUrl(e) {
    setImgUrl(e.target.value)
  }

{/* Breakout Activity #1: Add necessary callback functions to "control" all remaining <inputs>. 
Extra Credit: How we can avoid using separate callback functions to handle each controlled <input>? */}

return (
  <div>
    <h1> Add a New Painting</h1>
    <form>
      <input 
        type="text" 
        placeholder="ImgURL" 
        onChange={handleImgUrl}
        value={imgUrl}    
        /> <br/>

    {/* Breakout Activity #1: Add necessary attributes to "control" all remaining <inputs>. 
    Extra Credit: How we can avoid using separate callback functions to handle each controlled <input>? */}
      <input type="text" placeholder="Title"/><br/>
      <input type="text" placeholder="Artist Name"/><br/>
      <input type="text" placeholder="date"/><br/>
      <input type="text" placeholder="width"/><br/>
      <input type="text" placeholder="height"/><br/>

      <input type="submit" value="Add New Painting"/>
    </form>

{/* Breakout Activity #2: Dynamically display a list of Added Titles / Artists as we continue to submit new Painting entries.  */}
  </div>
  );
}

export default PaintingForm;
