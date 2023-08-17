
import './components/modal.css'
import './App.css';
import {useState} from 'react'
import Title from './components/Title';
import Modal from './components/Modal';
import EvenList from './components/EvenList';
import NewEventForm from './components/newEventForm';


function App() {
  const [showModal,setShowModal] = useState(false);
  const[showme,setshowme] = useState(true);
  const [event,setEvent] = useState([])
 
const addEvent = (event) =>{

  setEvent((prevEvents)=>{

return [...prevEvents,event];

  })
  setShowModal(false)

}

  function handleClick(id){
    console.log (id)
  setEvent((prevEvent)=>{
 return prevEvent.filter((event)=>{
      return   id !== event.id;
      })
  })
  }
  return (
      <div className="App">
     
      <Title Title='Mario Kindom event' subTitle ="all the latest events in mario kindom" />

   { showme &&  <div><button onClick={()=>{setshowme(false)}}>hide-me</button></div>}
    
   { !showme && <div><button onClick={()=>{  setshowme(true) }}>show-me</button></div>}
    
     {showme && <EvenList  event ={event} handleClick={handleClick}/>}
       {showModal && <Modal isSalesModal={true}>
           <NewEventForm addEvent={addEvent} />
          </Modal>}
          
          <button onClick={()=>{setShowModal(true)}}>add form</button>
         

      </div>
  );
}

export default App;
