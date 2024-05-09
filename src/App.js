import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Form1 from './components//Form1';
import { useState } from 'react';
import Alert1 from './components/Alert1';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, alertType) => {
    setAlert({
      msg: message,
      type: alertType
    });

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const changeMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Light Mode Access", "success")
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = 'grey'
      document.body.style.color = 'white'
      showAlert("Dark Mode Access", "success")
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="Blog" aboutUs="About Blog" mode={mode} changeMode={changeMode} />
        <Alert1 alertMsg={alert} />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path="/form1" element={<Form1 heading="Enter Heading Text" showAlert={showAlert} mode={mode} />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;


// {
//     BEFORE ROUTING LECTURE
//    <Navbar title="Blog" aboutUs="About Blog" mode={mode} changeMode={changeMode} />
//         <Navbar title='Blog'/>

//         <Alert1 alertMsg={alert} />

//         <div className="container">
//           <Form1 heading="Enter Heading Text" showAlert={showAlert} mode={mode} />
//         </div>
//         <Route exact path="/about" Component={About}>
//           <About />
//         </Route> }
