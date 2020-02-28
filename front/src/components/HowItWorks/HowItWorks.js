import React, { Component } from 'react';
import './HowItWorks.css'

class HowItWorks extends Component {
  render() {
    return( 
      <div>
        <hr style={{backgroundColor: "#A8C2CA", border: "2px solid #A8C2CA", marginTop: "50px"}}></hr>
        <h2 id="howitworks_kek" >Start your Meshwar</h2>    
        <div className="howitworks_works">
          <div className="howitworks_step">
            <i className="fa fa-ticket" style={{fontSize: '32px',color:'#A8C2CA'}} aria-hidden="true"></i>
            <div className="howitworks_step_title">step 1</div>
            <h3 className="howitworks_sub">Book your Meshwar</h3>
            <p className="howitworks_width" >Start by surfing through our events section in search for your desired trip. Once you have made your mind, register.</p>
          </div>        
          <div className="howitworks_step">
          <i className="fa fa-child"  style={{fontSize: '32px', color:'#A8C2CA'}} aria-hidden="true"></i>
          <div className="howitworks_step_title">step 2</div>
            <h3 className="howitworks_sub"> Sit back </h3>
            <p className="howitworks_width">Once you have completed the registration and read all the requirments, sit back and relax till the day of the trip awakens.</p>
          </div>
          <div className="howitworks_step">
          <i class="fa fa-bus" style={{fontSize: '32px',color:'#A8C2CA'}} aria-hidden="true"></i>
          <div className="howitworks_step_title">step 3</div>
            <h3 className="howitworks_sub">Enjoy your Meshwar</h3>
            <p className="howitworks_width">Once the day finnaly comes, meet at the appointed destination and prepare for an adventure full of energy and excitment </p>
          </div>
        </div>
      </div>
      )
  }
    

}

export default HowItWorks;
