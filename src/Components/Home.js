import React from 'react';
import Display from './Display';
import { useState } from "react";
import Sliders from "../svgImages/Sliders.svg"
function Home() {
    const [show, setShow] = useState(false);

    return (
        <div className='display-block'>
         <button style={{
            fontStyle:"inherit",
            color:"black",
            backgroundColor:"white",
            fontWeight:550,
            cursor:"pointer",
            position:"fixed",
            top:"1px"
         }} onClick={()=>setShow(!show)}>
           <img style={{
            marginTop:"1px"
           }} src={Sliders}></img> Display {show?"^":"ᴠ"} 
         </button>
         <Display status={show}/>
        </div>
    );
}
export default Home