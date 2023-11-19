import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios";
import Card from '../Components/Card';
import ThreeDots from "../svgImages/ThreeDots.svg";
import Plus from "../svgImages/Plus.svg";
import CheckCircle from "../svgImages/CheckCircle.svg";
import InProgress from "../svgImages/InProgress.svg";


function StatusData(props) {
    const[data,setData] = useState([]);
    const [todoTickets, setTodoTickets] = useState([]);
  const [inProgressTickets, setInProgressTickets] = useState([]);
  const [backlogTickets, setBacklogTickets] = useState([]);
  const [doneTickets,setDoneTickets] = useState([]);
  const [cancelTickets,setCancelTickets] = useState([]);

    useEffect(()=>{
        axios.get("https://api.quicksell.co/v1/internal/frontend-assignment").then((Response)=>{
       setData(Response.data)
       const todo = [];
       const inProgress = [];
       const backlog = [];
       const done = [];
       const cancel = [];

       Response.data.tickets.forEach(ele => {
         switch (ele.status) {
           case 'Todo':
             todo.push(ele);
             break;
           case 'In progress':
             inProgress.push(ele);
             break;
           case 'Backlog':
             backlog.push(ele);
             break;
             case 'Done':
             done.push(ele);
             break;
             case 'Cancel':
             cancel.push(ele);
             break;
           default:
             break;
         }
       });

       setTodoTickets(todo);
       setInProgressTickets(inProgress);
       setBacklogTickets(backlog);
       setDoneTickets(done);
       setCancelTickets(cancel);
     })
     .catch((error) => {
       console.error(error);
     });
 }, []);
  return (
    <div style={{
        visibility:props.status?"visible":"hidden",
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
<input type="radio" id="option1" name="group1" value="option1"/>
<p>Backlog</p>
<p style={
    {
        color:"gray",
        marginLeft:"2px"
    }
}>{backlogTickets.length}</p>
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
    backlogTickets.map((item)=>{
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
<input type="radio" id="option1" name="group1" value="option1"/>
<p>Todo</p>
<p style={
    {
        color:"gray",
        marginLeft:"2px"
    }
}>{todoTickets.length}</p>
</div>
<div style={{
    paddingTop:"18px"
}}>
<img src={Plus}></img>
<img src={ThreeDots}></img>

  
</div>
</div>
{
    todoTickets.map((item)=>{
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
<img src={InProgress}></img>
<p>In Progress</p>
<p style={
    {
        color:"gray",
        marginLeft:"2px"
    }
}>{inProgressTickets.length}</p>
</div>
<div style={{
    paddingTop:"18px"
}}>
<img src={Plus}></img>
<img src={ThreeDots}></img>

  
</div>
</div>
    {
        inProgressTickets.map((item)=>{
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
<img src={CheckCircle}></img>
<p>Done</p>
<p style={
    {
        color:"gray",
        marginLeft:"2px"
    }
}>{doneTickets.length}</p>
</div>
<div style={{
    paddingTop:"18px"
}}>
<img src={Plus}></img>
<img src={ThreeDots}></img>

  
</div>
</div>
{
    doneTickets.length==0?null:setDoneTickets.map((item)=>{
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
<input type="radio" id="option1" name="group1" value="option1"/>
<p>Cancelled</p>
<p style={
    {
        color:"gray",
        marginLeft:"2px"
    }
}>{cancelTickets.length}</p>
</div>
<div style={{
    paddingTop:"18px"
}}>
<img src={Plus}></img>
<img src={ThreeDots}></img>

  
</div>
</div>
{
    cancelTickets.length==0?null:cancelTickets.map((item)=>{
        return(<Card id={item.id} title={item.title} tag={item.tag}/>)
    })
}
    
    </div>
            
    </div>
  )
}

export default StatusData;