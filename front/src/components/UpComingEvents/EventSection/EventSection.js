import React from 'react';
import EventCard from '../EventCard/EventCard'
import './EventSection.css'
import Button from '../../UpComingEvents/Button/Button'
import {Link} from "react-router-dom"


  
const EventSection = (props) => {
   return (
      <div>
        <h3 style={{ paddingBottom: "20px", borderBottom: "2px solid #A8C2CA",textAlign: "center",width:"300px", margin: "0 auto", marginTop: "30px" }}>Upcoming Events</h3>
        <section className="EventSection_Wrapper">
            
           { props.events &&
            props.events.map((event, index) => {
            if(index <= 2) {
               return <EventCard
                getEvents={props.getEvents}
                id={event.event_id}
                title={event.title} 
                location={event.location}
                date={event.date}
                price={event.price}
                remainingSeats={event.remaining_seats}
                description={event.description}
                src={event.image_src}/>
            }
           })
          } 
        </section>
        <div style={{textAlign: "center", marginTop: "20px" }}>
        <Button><Link style={{textDecoration: "none", color: "#4a4a4a"}} to="/events">Show More</Link></Button>
        </div>
      </div>
    ) 
  
}

export default EventSection;