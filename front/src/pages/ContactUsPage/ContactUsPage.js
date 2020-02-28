import React, { Component } from 'react';
import Form from '../../components/Form/Form'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
class ContactUsPage extends Component {
  render() {
    if(this.props.loading){
      return(<div>LOOOADDDINGGGG</div>)
    }else{
      return (
        <>
          <Header />
          <Form />
          <Footer />
        </>
      )
    }
    
  
  }
}

export default ContactUsPage;
