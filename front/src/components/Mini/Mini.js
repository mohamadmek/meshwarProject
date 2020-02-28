import React from 'react';
import './Mini.css'
const Mini = (props) => {
  console.log(props.src)
  return (
    <section className="MiniGallery_section">
      <div className="MiniGallery_img" style={{backgroundImage: `url('http://localhost:8080/images/${props.src.name}')`}}></div>
    </section>
  );
}

export default Mini;
