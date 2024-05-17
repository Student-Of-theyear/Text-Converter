import React, { useState } from 'react'

export default function About(props) {

  // const [myStyle, setmyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white"
  // })

  let myStyle = {
    color: props.mode === "dark"?"white":"black",
    backgroundColor: props.mode === "dark"?"black":"white"
  }

  // const [btnStyle, setBtnStyle] = useState("Enable Dark Mode");
  // const toggleMode = () => {
  //   if(myStyle.color === "black") {
  //     setmyStyle({
  //     color: "white",
  //     backgroundColor: "black",
  //     border: "1px solid white",
  //    })
  //    setBtnStyle("Enable Light Mode");
  //   } else {
  //     setmyStyle({
  //     color: "black",
  //     backgroundColor: "white",
  //    })
  //    setBtnStyle("Enbale Dark Mode");
  //   }
  // }

  return (
    <div className="container my-3" style={myStyle}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong> Analyze your text </strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      <strong> Textutils gives you a way to analyze your text quickly and efficiently. Be it word count,
        character cout or </strong>

      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong> Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={myStyle}>
       <strong>TextUtils is a free character counter tool that provides instant character count & word countstatistics for a given text. TextUtils reports the number of words and characters. Thus it is 
       suitable for writing text with word/ character limit.</strong>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong> Browser compatible </strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={myStyle}>
      <strong>This word counter software words in any web browsers such as chrome, Firefox, Internet
        Explorer, safari, opera. It suits to count characters in facbook, blog, books, excel 
        document, pdf document, essays, etc.</strong>
      </div>
    </div>
  </div>
</div>

{/* <div className="container my-3">
<button type="button" className="btn btn-primary" onClick={toggleMode}>{btnStyle}</button>
</div> */}

    </div>
  )
}
