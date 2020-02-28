import React, { Component } from "react";
import "./MiniGallery.css";
import Mini from "../Mini/Mini";
class MiniGallery extends Component {
  randNB = () => {
    const arrRand = [];
    if(this.props.src.length > 5) {
      while (arrRand.length < 5) {
        let rand = Math.floor(Math.random() * this.props.src.length);
        if (arrRand.includes(rand)) {
          rand = Math.floor(Math.random() * this.props.src.length);
        } else {
          arrRand.push(rand);
        }
      }
    } 
    return arrRand;
  };

  render() {
    const random = this.randNB();
    return (
      <div>
        <section className="MiniGallery_section">
          {random.map(index => {
            return <Mini src={this.props.src[index]} />;
          })}
        </section>
      </div>
    );
  }
}

export default MiniGallery;
