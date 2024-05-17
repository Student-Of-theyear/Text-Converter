import { useState } from 'react';
import './App.css';
import Navbar from './comps/Navbar';
import TextForm from './comps/TextForm';
import About from './comps/About';
import Alert from './comps/Alert';



function App() {
  const [mode, setMode] = useState("light")
  
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })

    setTimeout(() => {
      setAlert(null)
    },3000)
  }

  const removeBodyClasses = ()=> {
    document.body.classList.remove("bg-light")
    document.body.classList.remove("bg-dark")
    document.body.classList.remove("bg-warning")
    document.body.classList.remove("bg-danger")
    document.body.classList.remove("bg-success")
  }

    const toggleMode = (cls) => {

      removeBodyClasses();
      console.log(cls)
      // document.body.classList.add("bg-"+cls);
      
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#b530e6"
      showAlert("Dark mode has been enabled", "success");
    }else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
      <>
      <Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>

      <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below" />
      </div>
      {/* <About mode={mode} /> */}
      </>
  );
}

export default App;
