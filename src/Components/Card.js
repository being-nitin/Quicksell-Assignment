import React from 'react'
import Dot from "../svgImages/Dot.svg"
import GrayDot from "../svgImages/GrayDot.png"

function Card(props) {
  return (
    <div className='card'>
    <div className='card-title'>
    <p style={{
        fontSize:"17px",
        color:"gray"
    }}>{props.id}
    </p>
    <p style={{
        fontSize: "17px",
        fontWeight:500,
        marginTop:"-4%"
    }}>{props.title}
    </p>    
</div>
        <div>
    
        <img></img>
        <div style={{
            display: "flex",
            flexDirection:"row",
            flexWrap:"wrap",
            marginTop:"-3%",
        }}>


           <img style={{
            width:"10px",
            maxWidth:"10px",
            height:"10px",
            marginTop:"7.5%"
    }} src={GrayDot}></img>    
            <p style={{
              color:"gray"
            }}>{props.tag}</p>
        </div>
    </div>


    </div>
  )
}

export default Card;