import React, {useState} from 'react'

export default function TextForm(props) {

  const[text,setText] = useState('');

  const handleUpClick = ()=>{
   // console.log("Uppercase was clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext)
    props.showAlert("converted to uppercase", "succsess");

  }

  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("converted to lowercase", "succsess");

  }

  const handleOnChange = (event)=>{
    console.log("On Change");
    setText(event.target.value);
  }
  return (
    <>
    <div className="container"style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading} </h1>
      <div className="mb-3" >
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}
       id="myBox" rows="8"> </textarea>
      </div>
<button className="btn btn primary mx-1" onClick={handleUpClick}>convert to uppercase</button>
<button className="btn btn primary mx-1" onClick={handleLoClick}>convert to lowercase</button>

    </div>
    <div className="container my-3"style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
    </div>
    </>
  )
}
