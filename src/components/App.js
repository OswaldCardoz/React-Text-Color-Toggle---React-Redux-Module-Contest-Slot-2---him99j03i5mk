import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
  const [isBlue,setIsBlue]=useState(false);
  const toggle=()=>{
    setIsBlue((prev)=>!prev);
  }
//code here 
  return (
    <div id="main">
      <p className={isBlue?'blueColor':'redColor'} >Newton School</p>
      <button id='button' onClick={toggle}>Change Style</button>
    </div>
  )
}


export default App;
