import React, { Component } from 'react';
import EventCard from '../../components/UpComingEvents/EventCard/EventCard';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'
import './EventsPage.css';


class EventsPage extends Component {
  state = {
    search: ""
  }

  searchHandler = (e) => {
    this.setState({search: e.target.value});
  }

  render() {
    let events = this.props.events.filter(event => {
      return event.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    });

  return (
    <>
    <Header />
    <div className="eventsPage_wrapper">
      <h2 className="eventsPage_title">All Events</h2>
      <div style={{textAlign:"center", padding: "10px"}}>
        <input type="text" style={{marginTop: "30px"}} onChange={this.searchHandler} placeholder="Search event..."/>
      </div>
      <section className="eventsPage_cards">
        { this.props.events &&
        events.map(event => {
            return <EventCard
              getEvents={this.props.getEvents}
              id={event.event_id}
              title={event.title} 
              location={event.location}
              date={event.date}
              price={event.price}
              remainingSeats={event.remaining_seats}
              description={event.description}
              src={event.image_src}
              pictureID={event.picture_id}/>
          })
        }  
      </section>
    </div>
    <Footer />
    </>
  )
}
}

export default EventsPage;
