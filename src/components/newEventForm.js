
import { useState } from 'react';
import './newEventForm.css';

export default function NewEventForm({addEvent}){
    const [title,setTitle]=useState("");
    const [date,setDate] = useState("");
    const[location,setLocation] = useState('manchester')
const handleSubmit = (e)=>{
e.preventDefault();
const event = {
title:title,
date:date,
location:location,
id:Math.floor(Math.random()*10000),
}
console.log(event)
addEvent(event);
resetForm();
setLocation("manchester");
console.log(event)
}



const resetForm=()=>{
    setTitle('');
    setDate('');
}
    return (
        <form className='new-event-form' onSubmit={handleSubmit}>
            <label>
                <span>Event Title</span>
                <input 
                type='text' 
                onChange={(e)=>{setTitle(e.target.value);
                }}value={title} 
                />             
             </label> 
                
           <label>
                    <span>Event date</span> 
                        <input type='date'
                         onChange={(e)=>{setDate(e.target.value);}}
                         
                         value={date}
                         />
            </label>
           <label>
                   <span>event location</span>
                    <select onChange={(e)=>{setLocation(e.target.value)}}>
                        <option value="manchester">Manchester</option>
                        <option value="london">London</option>
                        <option value="cardif">Cadif</option>
                    </select>
           </label>
          
            <button> submit</button>
            
        </form>
    )
}