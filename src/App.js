import './App.css';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, {useState} from 'react';
import Alert from './Components/Alert';
//import { BrowserRouter,Routes, Route } from 'react-router-dom';
function App() {

  const [mode, setMode] = useState('light'); // to state dark mode is enable or not
  const [alert, setAlert]= useState('null');


const showAlert=(message,type)=>{
setAlert({
  msg:message,
  type:type
})
setTimeout(()=>{
  setAlert(null);
}, 1500);
    };

  const toggleMode = ()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled","success");
      document.title='MY-DATA - Dark Mode';
    }
    else{
      setMode('light')
       document.body.style.backgroundColor = 'white';
       showAlert("Light mode has been enabled","success");
       document.title='MY-DATA - Light Mode';

    }
  }

  return (
  <>
    {/* <BrowserRouter > */}
    
    {/*<Navbar title="my-data" aboutText="About my-data" /> */}
    {/*<Navbar/>*/}
    <Navbar title="my-data" mode={mode} toggleMode={toggleMode} />
    <Alert alert ={alert}/>
    <div className="container my-3">
    {/* <Routes >
      <Route path='/about' element={ <About />} />
    <Route
    path="/" */}
    element={<TextForm  showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}
    {/* </Routes> */}
    </div>
{/* </BrowserRouter> */}
 </>

  );

}

export default App;