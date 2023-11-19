import React from 'react'
import { useState } from 'react';
import UserData from '../FetchedData/UserData';
import StatusData from '../FetchedData/StatusData';
import Priority from '../FetchedData/Priority';

function Display(props) {
    const [showStatus, setShowStatus] = useState(true);
    const [showUser, setShowUser] = useState(false);
    const [showPriority, setShowPriority] = useState(false);
    const [group1Value, setGroup1Value] = useState('');
    const [group2Value, setGroup2Value] = useState('');
    const [reverse,setReverse] = useState(false);
    const [descending,setDescending] = useState(false);

        
    const handleDropdownChange = (group, value) => {
        // Update the state based on the group
        if (group === 'group1') {
            setGroup1Value(value);
            setShowUser(value==="Users");
            setShowStatus(value==="Status");
            setShowPriority(value==="Priority")
        } else if (group === 'group2') {
            setGroup2Value(value);
            setReverse(value==="Priority");
            setDescending(value==="Title");

        }

        console.log(value,"vvvvvvvvvv");
        // Add your custom logic here
    //     if(value==="Users"){
    //         setShowUser(!showUser);
    //         console.log(showUser,"mmmmmm")
    //     }
    //     else if(value==="Status"){
    //         setShowStatus(!showStatus);
    //     }
    // };

    if (!showPriority && (reverse || descending) && !(reverse && descending) && !(showUser || showStatus)) {
        alert("First select the Priority option from Grouping, then apply filters.");
    }


    }



  return (
    <div>
    <div
    className='Display'
     style={{
        visibility:props.status?"visible":"hidden"
    }}>
    <div style={{
        display:"flex",
        flexWrap:"wrap",
        justifyContent:'space-between'
    }}>
      <p style={{
        color:"gray",
        fontWeight:550
      }}>Grouping</p>
      <select
                id="group1"
                className="group-dropdown"
                value={group1Value}
                onChange={(e) => handleDropdownChange('group1', e.target.value)}
            style={{
                height:"20px",
                marginTop:"20px",
                width:"83px"
            }}
            >
                <option value="Status">Status</option>
                <option value="Users">Users</option>
                <option value="Priority">Priority</option>
            </select>

    </div>
    <div style={{
        display:"flex",
        flexWrap:"wrap",
        justifyContent:'space-between'
    }}>
     <p
     style={{
        color:"gray",
        fontWeight:550
      }}
     >Ordering</p>
     <select
                id="group2"
                className="group-dropdown"
                value={group2Value}
                onChange={(e) => handleDropdownChange('group2', e.target.value)}
                style={{
                height:"20px",
                marginTop:"20px",
                width:"83px"

            }}
            >
                <option value="Priority">Priority ⬇️</option>
                <option value="Title">Title</option>
                
    </select>
    </div>
    
    </div>
    <div>
    
        {showUser && (<UserData status={showUser}/>)}
        {
            showStatus && (<StatusData status={showStatus}/>)
        }
        {
            showPriority && (<Priority status={showPriority} reverse = {!reverse} descending = {descending}/>)
        }
        </div>
</div>
  );
}

export default Display;