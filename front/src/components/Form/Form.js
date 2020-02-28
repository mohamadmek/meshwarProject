import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: "",
        email: "",
        address: "",
        mobile: "",
        message: ""
      }
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    const data = this.state.data;
    alert("Message Sent!");
    this.setState({
      data: {
        name: "",
        email: "",
        address: "",
        mobile: "",
        message: ""
      }
    })
    const response = await fetch("http://localhost:8080/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    
    const answer = await response.json();
    console.log(answer);
  };

  handleChange = e => {
    let id = e.target.id;
    let data = { ...this.state.data };
    data[id] = e.target.value;
    this.setState({
      data: data
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="bg"></div>
        <h2 className="contact-us_title">
          WE'D LOVE TO HEAR FROM <span className="contact-us_span">YOU</span>!
        </h2>
        <hr />{" "}
        <div className="form-wrapper">
          <div className="name-input">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={this.state.data.name}
              onChange={this.handleChange}
              id="name"
              placeholder="Your name..."
              required
            />
          </div>
          <div className="email-input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={this.state.data.email}
              onChange={this.handleChange}
              id="email"
              placeholder="Your email..."
              required
            />
          </div>
          <div className="address-label">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              value={this.state.data.address}
              onChange={this.handleChange}
              id="address"
              placeholder="Your address"
            />
          </div>
          <div>
            <label htmlFor="mobile">Mobile</label>
            <input
              type="text"
              id="mobile"
              placeholder="Your number..."
              value={this.state.data.mobile}
              onChange={this.handleChange}
            />
          </div>
          <div className="message">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={this.state.data.message}
              onChange={this.handleChange}
              placeholder="Enter your message here..."
            ></textarea>
          </div>
          <button className="contact-us_submit" type="submit">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
