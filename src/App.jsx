import './App.css'
import Navbar from "./Navbar"

import { useState, useEffect } from 'react'
import { Model } from "/untitled";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";



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
        
        <div className="cube">
          <Canvas camera={{ fov: 64, position: [-2, 2, 0] }}>
            <ambientLight intensity={5} />
            <OrbitControls enableZoom={true} />
            <Model />
          </Canvas>
        </div>
        

        <div className="cube a"></div>
        <div className="cube b"></div>
        <div className="cube c"></div>
        
        
      </div>
      


    </>
  )
}

export default App
