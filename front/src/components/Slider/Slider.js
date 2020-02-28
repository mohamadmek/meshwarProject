import React from 'react';
import './Slider.css'
const Slider = () => {
  
    return (
       <div>
<div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="Slider_img1"></div>
      <div className="carousel-caption d-none d-md-block">
        <h5>There is a lot of adventures out there, waiting for us to live them!</h5>
      </div>
    </div>
    <div className="carousel-item">
    <div className="Slider_img2"></div>
      <div className="carousel-caption d-none d-md-block">
        <h5>If thinking about it makes you excited, imagine actually doing it</h5>
      </div>
    </div>
    <div className="carousel-item">
    <div className="Slider_img3"></div>
      <div className="carousel-caption d-none d-md-block">
        <h4>If you don’t take risks, you’ll have a wasted soul.</h4>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
       </div>
      
     )
}

export default Slider;
