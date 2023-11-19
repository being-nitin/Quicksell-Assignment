import React from 'react'
import { useState,useEffect } from 'react';
import UserData from '../FetchedData/UserData';
import StatusData from '../FetchedData/StatusData';
import axios from "axios";
import ThreeDots from "../svgImages/ThreeDots.svg";
import Plus from "../svgImages/Plus.svg";
import CheckCircle from "../svgImages/CheckCircle.svg";
import InProgress from "../svgImages/InProgress.svg";
import Card from '../Components/Card';
import Low from "../svgImages/Low.svg";
import Exclamation from "../svgImages/Exclamation.svg";
import High from "../svgImages/High.svg";
import Medium from "../svgImages/Medium.svg";

function Priority(props) {
    const[data,setData] = useState([]);
    const [noPriority, setNoPriority] = useState([]);
    // const [reverse, setReverse] = useState(false);
    const [urgent, setUrgent] = useState([]);
    const [high, setHigh] = useState([]);
    const [medium, setMedium] = useState([]);
    const [low, setLow] = useState([]);
    useEffect(()=>{
        axios.get("https://api.quicksell.co/v1/internal/frontend-assignment").then((Response)=>{
       setData(Response.data)
       const nop = [];
       const urg = [];
       const hi = [];
       const med = [];
       const lo = [];

       Response.data.tickets.forEach(ele => {
         switch (ele.priority) {
           case 0:
             nop.push(ele);
             break;
           case 1:
             urg.push(ele);
             break;
           case 2:
             hi.push(ele);
             break;
             case 3:
             med.push(ele);
             break;
             case 4:
             lo.push(ele);
             break;
           default:
             break;
         }
       });
       
       const sortAscending = (a, b) => a.title.localeCompare(b.title);

       setNoPriority(props.descending ? nop.sort(sortAscending) : nop);
       setUrgent(props.descending ? urg.sort(sortAscending) : urg);
       setHigh(props.descending ? hi.sort(sortAscending) : hi);
       setMedium(props.descending ? med.sort(sortAscending) : med);
       setLow(props.descending ? lo.sort(sortAscending) : lo);
     })
     .catch((error) => {
       console.error(error);
     });
 }, [props.descending]);
  return (
    props.reverse?
    <div style={{
        // visibility:props.status?"visible":"hidden",
        display:"flex",
        justifyContent:"space-between",
        width:"100%"
        
    }}>
<div style={{
    display:"flex",
    flexDirection: "column",
    width:"90%",
}}>
<div>
<div style={{
    display:"flex",
    justifyContent:"space-between"
}}>
<div style={{
    display:"flex",
    justifyContent:"space-between"
}}>
<img src={ThreeDots}></img>
<p>No priority</p>
<p style={
    {
        color:"gray",
        marginLeft:"2px"
    }
}>{noPriority.length}</p>
</div>
<div style={{
    paddingTop:"18px"
}}>
<img src={Plus}></img>
<img src={ThreeDots}></img>

  
</div>
</div>
</div>
{
    noPriority.map((item)=>{
        return (<Card id={item.id} title={item.title} tag={item.tag}/>)    
    })
}

</div>
<div style={{
    display:"flex",
    flexDirection: "column",
    width:"90%",
    marginLeft:"6px"
}}>
<div style={{
    display:"flex",
    justifyContent:"space-between"
}}>
<div style={{
    display:"flex",
    justifyContent:"space-between"
}}>
<img src={Exclamation}></img>
<p>Urgent</p>
<p style={
    {
        color:"gray",
        marginLeft:"2px"
    }
}>{urgent.length}</p>
</div>
<div style={{
    paddingTop:"18px"
}}>
<img src={Plus}></img>
<img src={ThreeDots}></img>

  
</div>
</div>
{
    urgent.map((item)=>{
        return (<Card id={item.id} title={item.title} tag={item.tag}/>)
    })
}
    
    </div>
    
    <div style={{
    display:"flex",
    flexDirection: "column",
    width:"90%",
    marginLeft:"6px"
}}>
<div style={{
    display:"flex",
    justifyContent:"space-between"
}}>
<div style={{
    display:"flex",
    justifyContent:"space-between"
}}>
<img src={High}></img>
<p>High</p>
<p style={
    {
        color:"gray",
        marginLeft:"2px"
    }
}>{high.length}</p>
</div>
<div style={{
    paddingTop:"18px"
}}>
<img src={Plus}></img>
<img src={ThreeDots}></img>

  
</div>
</div>
    {
        high.map((item)=>{
            return(<Card id={item.id} title={item.title} tag={item.tag}/>)
        })
    }    </div>
    <div style={{
    display:"flex",
    flexDirection: "column",
    width:"90%",
    marginLeft:"6px"
}}>
<div style={{
    display:"flex",
    justifyContent:"space-between"
}}>
<div style={{
    display:"flex",
    justifyContent:"space-between"
}}>
<img src={Medium}></img>
<p>Medium</p>
<p style={
    {
        color:"gray",
        marginLeft:"2px"
    }
}>{medium.length}</p>
</div>
<div style={{
    paddingTop:"18px"
}}>
<img src={Plus}></img>
<img src={ThreeDots}></img>

  
</div>
</div>
{
    medium.length==0?null:medium.map((item)=>{
        return(<Card id={item.id} title={item.title} tag={item.tag}/>)
    })
}
    
    </div>
    <div style={{
    display:"flex",
    flexDirection: "column",
    width:"90%",
    marginLeft:"20px"
}}>
<div style={{
    display:"flex",
    justifyContent:"space-between"
}}>
<div style={{
    display:"flex",
    justifyContent:"space-between"
}}>
<img src={Low}></img>
<p>Low</p>
<p style={
    {
        color:"gray",
        marginLeft:"2px"
    }
}>{low.length}</p>
</div>
<div style={{
    paddingTop:"18px"
}}>
<img src={Plus}></img>
<img src={ThreeDots}></img>

  
</div>
</div>
{
    low.length==0?null:low.map((item)=>{
        return(<Card id={item.id} title={item.title} tag={item.tag}/>)
    })
}
    
    </div>
            
    </div>: <div style={{
        // visibility:props.status?"visible":"hidden",
        display:"flex",
        justifyContent:"space-between",
        width:"100%"
        
    }}>
<div style={{
    display:"flex",
    flexDirection: "column",
    width:"90%",
}}>
<div>
<div style={{
    display:"flex",
    justifyContent:"space-between"
}}>
<div style={{
    display:"flex",
    justifyContent:"space-between"
}}>
<img src={High}></img>
<p>High</p>
<p style={
    {
        color:"gray",
        marginLeft:"2px"
    }
}>{high.length}</p>
</div>
<div style={{
    paddingTop:"18px"
}}>
<img src={Plus}></img>
<img src={ThreeDots}></img>

  
</div>
</div>
</div>
{
    high.map((item)=>{
        return (<Card id={item.id} title={item.title} tag={item.tag}/>)    
    })
}

</div>
<div style={{
    display:"flex",
    flexDirection: "column",
    width:"90%",
    marginLeft:"6px"
}}>
<div style={{
    display:"flex",
    justifyContent:"space-between"
}}>
<div style={{
    display:"flex",
    justifyContent:"space-between"
}}>
<img src={Medium}></img>
<p>Medium</p>
<p style={
    {
        color:"gray",
        marginLeft:"2px"
    }
}>{medium.length}</p>
</div>
<div style={{
    paddingTop:"18px"
}}>
<img src={Plus}></img>
<img src={ThreeDots}></img>

  
</div>
</div>
{
    urgent.map((item)=>{
        return (<Card id={item.id} title={item.title} tag={item.tag}/>)
    })
}
    
    </div>
    
    <div style={{
    display:"flex",
    flexDirection: "column",
    width:"90%",
    marginLeft:"6px"
}}>
<div style={{
    display:"flex",
    justifyContent:"space-between"
}}>
<div style={{
    display:"flex",
    justifyContent:"space-between"
}}>
<img src={Low}></img>
<p>Low</p>
<p style={
    {
        color:"gray",
        marginLeft:"2px"
    }
}>{low.length}</p>
</div>
<div style={{
    paddingTop:"18px"
}}>
<img src={Plus}></img>
<img src={ThreeDots}></img>

  
</div>
</div>
    {
        low.map((item)=>{
            return(<Card id={item.id} title={item.title} tag={item.tag}/>)
        })
    }    </div>
    <div style={{
    display:"flex",
    flexDirection: "column",
    width:"90%",
    marginLeft:"6px"
}}>
<div style={{
    display:"flex",
    justifyContent:"space-between"
}}>
<div style={{
    display:"flex",
    justifyContent:"space-between"
}}>
<img src={Exclamation}></img>
<p>Urgent</p>
<p style={
    {
        color:"gray",
        marginLeft:"2px"
    }
}>{urgent.length}</p>
</div>
<div style={{
    paddingTop:"18px"
}}>
<img src={Plus}></img>
<img src={ThreeDots}></img>

  
</div>
</div>
{
    urgent.length==0?null:medium.map((item)=>{
        return(<Card id={item.id} title={item.title} tag={item.tag}/>)
    })
}
    
    </div>
    <div style={{
    display:"flex",
    flexDirection: "column",
    width:"90%",
    marginLeft:"20px"
}}>
<div style={{
    display:"flex",
    justifyContent:"space-between"
}}>
<div style={{
    display:"flex",
    justifyContent:"space-between"
}}>
<img src={ThreeDots}></img>
<p>No Priority</p>
<p style={
    {
        color:"gray",
        marginLeft:"2px"
    }
}>{noPriority.length}</p>
</div>
<div style={{
    paddingTop:"18px"
}}>
<img src={Plus}></img>
<img src={ThreeDots}></img>

  
</div>
</div>
{
    noPriority.length==0?null:noPriority.map((item)=>{
        return(<Card id={item.id} title={item.title} tag={item.tag}/>)
    })
}
    
    </div>
            
    </div>
  )
}

export default Priority;