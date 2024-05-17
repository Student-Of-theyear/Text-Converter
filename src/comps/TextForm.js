import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpcase = () => {
    setText("handleUppercase"+ text)
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Upeer case has been enabled", "success");
  }
  const handleOnChange = (e) => {
    console.log("on change")
    setText(e.target.value);
  }
  
  const handleLowercase =()=> {
    console.log("convert to lowerCase" + text);
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Lower case has been enabledd", "success");
  }
  
  const handleClear = ()=> {
    console.log("Clear the text" + text)
    let newText = " ";
    setText(newText);
    props.showAlert("Clear the text", "success");
  }

  const handleCopy = () => {
    // var text = document.getElementById("myBox")
    // text.select();
    navigator.clipboard.writeText(text); // remove = text.vlaue
    // document.getSelection().removeAllRanges();
    props.showAlert("Copy the text", "success");
  }
 

  const [text, setText] = useState("Enter text here");
  return (
    <>
    <div className='container'>
      <h1>{props.heading}</h1>
  <div className="mb-3">
  {/* <label for="myBox" className="form-label">Example textarea</label>   */}
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
   <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpcase}>Convert to UpperCase</button>
   <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowercase}>Convert to LowerCase</button>
   <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>clearText</button>
   <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>CopyText</button>

    </div>
    <div className="container my-3">
      <h2>your text summary</h2>
       {/*text.split(" ") arr dege */}
       {/* <p>{text.split(" ").length} words and {text.length} characters</p>  */}
      {/* for spaceing not count */}
      <p>{text.split(" ").filter((elem)=>{return elem.length!==0}).length} words and {text.length} characters</p> 

       <h1>preview</h1>
       <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
