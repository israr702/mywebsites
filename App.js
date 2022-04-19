  import './App.css'
// import About from './component/About';
import Navebar from './component/Navebar';
  import Text from './component/Text'
  import React, { useState } from 'react';
import Alert from './component/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";
  
  
 const App = () => {
   const [mode, setMode] = useState('light')
   const toggleMode=()=>{
     if(mode === 'light'){
       setMode('dark');
       document.body.style.backgroundColor='grey';
       showAlert("Dark mode is enable", "success")
     }
     else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enable", "success")
     }
   }
   const [alert, setAlert] = useState(null)

    const showAlert = (message,type)=>{
      setAlert({
        msg : message,
        type : type

      })
      setTimeout(() => {
        setAlert(null)
      },2000);
    }
   return (
     <>
     {/* <Router> */}
        <Navebar mode={mode} toggleMode={toggleMode }/>
        <Alert alert={alert}/>
        <div className="container my-2">
         {/* <Switch>
          <Route exact path="/about">
            <About/>
          </Route> */}
          {/* <Route exact path="/"> */}
            <Text mode={mode} showAlert={showAlert}/>
          {/* </Route> */}
        {/* </Switch> */}
        </div>
        {/* </Router> */}
     </>
   );
 }
 
 export default App