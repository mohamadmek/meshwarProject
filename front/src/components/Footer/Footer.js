import React, { Component } from 'react';
import './Footer.css';
import FbIcon from '../../assets/icons/facebook-square-brands.svg'
import InstaIcon from '../../assets/icons/insta-icon.svg';
import TwitterIcon from '../../assets/icons/twitter-icon.svg';
// import footerBg from '../../assets/images/footer-background.png';

class Footer extends Component {
  render() {
    return (
      <footer>
        {/* <img className="footer_bg" src={footerBg} /> */}
        <div className="footer_wrapper">
          <h1 className="footer_h1">MESHWAR</h1>
          <ul>
            <li><a href="#"><img className="footer_social-link" src={FbIcon}/></a></li>
            <li><a href="#"><img className="footer_social-link" src={InstaIcon}/></a></li>
            <li><a href="#"><img className="footer_social-link" src={TwitterIcon}/></a></li>
          </ul>
         <div className="footer_parag"><p>Maggie inc. All Rights Reserved&#169;</p></div>
        </div>
       
      </footer>
    );
  }
}

export default Footer;
