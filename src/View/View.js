import React from 'react'

export const View = ({events,deleteEvent}) => {
    
    return events.map(events=>(
        <div className= "card">
            <div className="card-body">
              <h4>{events.name}</h4>  
              <span>{events.address}</span>
              <span>{events.startDate} &nbsp; {events.startTime}</span>
            </div>
        </div>    
    
))
}
