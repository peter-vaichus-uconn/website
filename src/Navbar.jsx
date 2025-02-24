import React, {useState, useEffect, useRef} from 'react';
import search from "./assets/search.png"
import ham from "./assets/ham.png"
import x from "./assets/Red_X.svg.png"



function Navbar({height}) {

    // function disableScroll(searchdrop) {
    //     document.body.style.overflow = (searchdrop ? "hidden": "");
    //   }


    const [drop, SetDrop] = useState(0)
    const [hamdrop, SetHamdrop] = useState(0)

    const [searchdrop, SetSearchdrop] = useState(false)
    const [isdown, SetIsdown] = useState(true)

    const [ham_height, setHam_Height] = useState("35px")
    const [search_height, setSearch_Height] = useState("30px")

    useEffect(() => {
    if (height[0] == 100) {
      // Runs only when height changes, not on initial render
      setHam_Height("35px");
    } else {
      setHam_Height("9px");
    }
    
    if (height[0] == 100) {
      // Runs only when height changes, not on initial render
      setSearch_Height("30px");
    } else {
      setSearch_Height("1px");
    }

  }, [height]);


    return (
    <>
      <div>
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
        <div></div>
        <button class="font-bold text-6xl" style={{  color: 'black', fontSize: `${height[0]-20}px`, transition: 'font-size .8s ease', }} onClick={()=>(console.log('hello'))}>Peter Vaichus</button>
        <div></div>
        </div>
        

        <div style={{ transition: 'height 0.1s ease', backgroundColor: 'black', color: 'white', height: `${hamdrop}px`, fontSize: `${hamdrop}px`}} className="header hamburger">
        <div> aceholder</div>
        <div> Placeholder</div>
        <div> Placeholder</div>
        </div>

        <div style = {{"--search-height":search_height }}className = "search">
        <button style={{  backgroundImage: `url(${search})`,backgroundSize: "cover", border:'0px'}} className='card'></button>
        </div>
        
        <div style={{ "--ham-height": ham_height }} className="ham">
          <label className="hamburger-menu">
            <input type="checkbox" onClick={()=>{(searchdrop ? SetHamdrop(0) : SetHamdrop(900)), SetSearchdrop(!searchdrop)}}/>
            <div></div> {/* Middle bar */}
          </label>
          <aside className="sidebar">
            <nav>
              <div></div>
            </nav>
          </aside>
        </div>

      </div>
    </>
    );
}

export default Navbar;
