import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios";
import Card from '../Components/Card';
import ThreeDots from "../svgImages/ThreeDots.svg";
import Plus from "../svgImages/Plus.svg";
import CheckCircle from "../svgImages/CheckCircle.svg";
import InProgress from "../svgImages/InProgress.svg";
import User1 from "../svgImages/User1.webp";
import User2 from "../svgImages/User2.jpg";
import User3 from "../svgImages/User3.png";
import User4 from "../svgImages/User4.jpg";
import User5 from "../svgImages/User5.jpeg";

function UserData(props) {
    const[data,setData] = useState([]);
    const [userOne, setUserOne] = useState([]);
  const [userTwo, setUserTwo] = useState([]);
  const [userThree, setUserThree] = useState([]);
  const [userFour,setUserFour] = useState([]);
  const [userFive,setUserFive] = useState([]);
  const [names,setNames] = useState({})
    useEffect(()=>{
axios.get("https://api.quicksell.co/v1/internal/frontend-assignment").then((Response)=>{
       setData(Response.data);
       const u1 = [];
       const u2 = [];
       const u3 = [];
       const u4 = [];
       const u5 = [];
       
       const userMap = new Map();
Response.data.users.forEach(user => {
  userMap.set(user.id, user);
});

// Add user information to each ticket based on userId
const combinedData = Response.data.tickets.map(ticket => {
  const user = userMap.get(ticket.userId);
  if (user) {
    return {
      ...ticket,
      userName: user.name,
      userAvailable: user.available
    };
  }
  return ticket;
});
const userNames = [...new Set(combinedData.map(ticket => ticket.userName))];
setNames(userNames);
// console.log(combinedData,"combineddata");
combinedData.forEach(ele => {
    switch (ele.userId) {
      case 'usr-1':
        u1.push(ele);
        break;
      case 'usr-2':
        u2.push(ele);
        break;
      case 'usr-3':
        u3.push(ele);
        break;
        case 'usr-4':
        u4.push(ele);
        break;
        case 'usr-5':
        u5.push(ele);
        break;
      default:
        break;
    }
  });
  setUserOne(u1);
       setUserTwo(u2);
       setUserThree(u3);
       setUserFour(u4);
       setUserFive(u5);
     })
     .catch((error) => {
       console.error(error);
     });
 }, []);
 console.log(names,"kkkkkkkkkk")
 console.log(userOne,"oooooooo")

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
<img style={{
    width:"20px",
    height:"20px",
    paddingTop:"18px"
}} src={User1}></img>
<p>{names[0]}</p>
<p style={
    {
        color:"gray",
        marginLeft:"2px"
    }
}>{userOne.length}</p>
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
    userOne.map((item)=>{
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
<img style={{
   width:"20px",
    height:"20px",
    paddingTop:"18px"
}} src={User3}></img>
<p>{names[1]}</p>
<p style={
    {
        color:"gray",
        marginLeft:"2px"
    }
}>{userTwo.length}</p>
</div>
<div style={{
    paddingTop:"18px"
}}>
<img src={Plus}></img>
<img src={ThreeDots}></img>

  
</div>
</div>
{
    userTwo.map((item)=>{
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
<img style={{
   width:"20px",
    height:"20px",
    paddingTop:"18px"
}} src={User3}></img>
<p>{names[2]}</p>
<p style={
    {
        color:"gray",
        marginLeft:"2px"
    }
}>{userThree.length}</p>
</div>
<div style={{
    paddingTop:"18px"
}}>
<img src={Plus}></img>
<img src={ThreeDots}></img>

  
</div>
</div>
    {
        userThree.map((item)=>{
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
<img style={{
   width:"20px",
    height:"20px",
    paddingTop:"18px"
}} src={User4}></img>
<p>{names[3]}</p>
<p style={
    {
        color:"gray",
        marginLeft:"2px"
    }
}>{userFour.length}</p>
</div>
<div style={{
    paddingTop:"18px"
}}>
<img src={Plus}></img>
<img src={ThreeDots}></img>

  
</div>
</div>
{
    userFour.length==0?null:userFour.map((item)=>{
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
<img style={{
   width:"20px",
    height:"20px",
    paddingTop:"18px"
}} src={User5}></img>
<p>{names[4]}</p>
<p style={
    {
        color:"gray",
        marginLeft:"2px"
    }
}>{ userFive.length}</p>
</div>
<div style={{
    paddingTop:"18px"
}}>
<img src={Plus}></img>
<img src={ThreeDots}></img>

  
</div>
</div>
{
    userFive.length==0?null: userFive.map((item)=>{
        return(<Card id={item.id} title={item.title} tag={item.tag}/>)
    })
}
    
    </div>
            
    </div>
  )
}

export default UserData