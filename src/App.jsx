import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from  "axios";
import Navbar from "./Navbar"

function App() {
  const [height, setHeight] = useState(100);
  const [top, setTop] = useState(100)
  const [mid, setMid] = useState(400)
  const [bottom, setBottom] = useState(500)

  const [baseline, setBaseline] = useState(100)

  const header = document.querySelector('.header');



  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY; // Get how far you've scrolled
    //const newHeight = Math.min(100, Math.max(50, 100 - scrollPosition)); // Calculate new height with max 150px and min 50px
    setHeight(-scrollPosition);
  });

  useEffect(() => {
    //the running code
    if(height<baseline-10 || height < -720){
      setMid(50)
      setBottom(50)
      setTop(50)
      setBaseline(height)
      }
    if(height>10+baseline || height>0){
      setMid(400)
      setBottom(500)
      setTop(100)
      setBaseline(height)

      }
    
    }, [height]); 


  return (
    
    <>
      <div>
      <Navbar height={[top,mid,bottom]}></Navbar>
  
      </div>
      <div className = "box one">
        {height}
      </div>
      {/* <div className = "box three" style={{color: "red"}}>
        {height}
      </div>
      <div className = "box two" style={{color: "blue", position: 'fixed'}}>
        {height}
      </div> */}



    </>
  )
}

export default App
