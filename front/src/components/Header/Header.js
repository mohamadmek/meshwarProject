import React, { Component } from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
class Header extends Component {
  state={
    hide:false,
    status: "header_navlist"
  }

  handleClick = ()=>{
    this.setState({ hide: !this.state.hide });
    if(this.state.hide) {
      this.setState({status: "header_navlist"});
    } else {
      this.setState({status: "header_navlist hide"});
    }
  }


  render() {
    return (
      <header>
        <div onClick={this.handleClick} className="burger">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <nav>
          <div id="hero">
            <Link to="/home" id="subHero"><h1 className="header_logo">MESHWAR</h1></Link>
          </div>
          <ul className={this.state.status}>  
            <li><Link className="header_navlink" to="/events">Events</Link></li>
            <li><Link className="header_navlink" to="/gallery">Gallery</Link></li>
            <li><Link className="header_navlink" to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </header> 
    );
  }
}

export default Header;