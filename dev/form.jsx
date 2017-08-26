import React from 'react';
import {Row, Input, Button} from 'react-materialize';

var Form = () => {
  function handleSubmit(event){
    console.log("the event is ", event)
  }
  return(
    <Row onSubmit={handleSubmit}>
	  <Input placeholder="someone@their-email.com" s={6} type="email" label="To" />
      <Input placeholder="Your Name" s={6} label="From" />
	  <Input placeholder="Subject" s={12} label="Subject" />
      
	  <Input placeholder="Enter Your Message Here" s={12} type="textarea" label="Content" />
      <button type="submit">Submit</button>
    </Row>
  )
}

export default Form;