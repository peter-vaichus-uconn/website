import React, {useState} from 'react';
import search from "./assets/search.png"
import ham from "./assets/ham.png"
import x from "./assets/Red_X.svg.png"



function Navbar({height}) {

    function disableScroll() {
        document.body.style.overflow = 'hidden';
      }

    function enableScroll() {
        document.body.style.overflow = '';
      }



    const [drop, SetDrop] = useState(0)
    const [hamdrop, SetHamdrop] = useState(0)

    const [searchdrop, SetSearchdrop] = useState(false)
    const [isdown, SetIsdown] = useState(true)

    return (
    <>

        <div onMouseEnter={()=>SetDrop(400)} onMouseLeave={()=>SetDrop(0)} style={{ height: `${drop}px` , fontSize: `25px`}} className="header sub3">
        <div > React</div>
        <div> Python</div>
        <div> </div>
        </div>


        <div style={{ height: `${height[2]/3}px` , fontSize: `25px`}} className="header sub1 drop">
        <div class="font-bold text-6xl" className = "BLB" onMouseEnter={()=>SetDrop(400)} onMouseLeave={()=>SetDrop(0)}> Software</div>
        <div class="font-bold text-6xl" className = "BCB" onMouseEnter={()=>SetDrop(400)} onMouseLeave={()=>SetDrop(0)}> Cybersecurity</div>
        <div class="font-bold text-6xl" className = "BRB" onMouseEnter={()=>SetDrop(400)} onMouseLeave={()=>SetDrop(0)}> Networking</div>
        </div>

        <div style={{ height: `${height[1]/3}px` , fontSize: `25px`}} className="header sub2">
        <div className = "LB font-bold text-2xl">Home</div>
        <div className = "CB font-bold text-2xl">About</div>
        <div className = "RB font-bold text-2xl">Projects</div>
        <div className = "RB font-bold text-2xl">Experience</div>
        <div  className = "RB font-bold text-2xl">Contact</div>
        </div>

        <div style={{ height: `${height[0]}px` , fontSize: `${height[0]-20}px`}} className="header">
        <button style={{  backgroundImage: `url(${ham})`,backgroundSize: "cover"}} className='card' onClick={()=>{(hamdrop == 900 ? SetHamdrop(0) : SetHamdrop(900)), SetSearchdrop(true), disableScroll()}}></button>
        <button class="font-bold text-6xl" style={{  color: 'black', fontSize: `${height[0]-20}px`, transition: 'font-size .8s ease', }} onClick={()=>(console.log('hello'))}>Peter Vaichus</button>
        <button style={{  backgroundImage: `url(${search})`,backgroundSize: "cover"}} className='card'></button>
        </div>

        <div style={{ transition: 'height 0.9s ease', backgroundColor: 'black', color: 'white', height: `${hamdrop}px`, fontSize: `${hamdrop}px`}} className="header">
        <div> aceholder</div>
        <div> Placeholder</div>
        <div> Placeholder</div>
        </div>

        {searchdrop && (<div style={{backgroundColor: 'black', height: `${height[0]}px` , fontSize: `${height[0]-20}px`}} className="header">
        <button style={{  borderColor: 'black', backgroundColor: 'black', backgroundImage: `url(${x})`,backgroundSize: "cover"}} className='card' onClick={()=>{(hamdrop == 900 ? SetHamdrop(0) : SetHamdrop(900)), SetSearchdrop(false), enableScroll()}}></button>
        <button style={{  backgroundColor: 'black', border: '0px', color: 'white', fontSize: `${height[0]-20}px`, transition: 'font-size .8s ease', }} onClick={()=>(console.log('hello'))}></button>
        <button style={{   borderColor: 'black', backgroundColor: 'black',backgroundImage: `url(${search})`,backgroundSize: "cover"}} className='card'></button>
        </div>)}
        


    </>
    );
}

export default Navbar;
