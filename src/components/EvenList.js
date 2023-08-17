import styles from './EventList.module.css'
import React from 'react'



function EvenList({event,handleClick}) {
    return (
        <div>
            {
                event.map((event , index)=>(

                    <div className={styles.card} key={event.id}>
                            <h1>{index}-{event.title}</h1>
                             <p>{event.location}</p>
                             <p>{event.date}</p>
                            <button onClick={()=>{handleClick(event.id);}}>delete Event</button>
                      </div>
                    ) )
            }
        </div>
    )
}

export default EvenList
