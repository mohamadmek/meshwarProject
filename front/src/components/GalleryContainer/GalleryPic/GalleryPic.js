import React from 'react';
import './GalleryPic.css'
const GalleryPic = (props) => {
  return (
    <div>
        <div className="gallery_box">
          <img className="gallery_pic" src={`http://localhost:8080/images/${props.src.name}`} alt="asd"></img> 
        </div>
    </div>
  );
}

export default GalleryPic;
 