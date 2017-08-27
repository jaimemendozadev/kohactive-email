import React, {Component} from 'react';
import {Row, Input, Button} from 'react-materialize';
import utils from './utils/index.jsx';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      fromEmail: '',
      toEmail: '',
      subject: '',
      content: ''
    }
  }  

  render(){
    return(
      <form onSubmit={utils.handleSubmit.bind(this)}>
        <Row>
          <Input onChange={utils.sentBy.bind(this)} value={this.state.fromEmail} s={6} label="From" />

  	      <Input onChange={utils.sendTo.bind(this)}  value={this.state.toEmail} s={6} type="email" label="To" />
             

  	      <Input onChange={utils.subjectLine.bind(this)} value={this.state.subject} s={12} label="Subject" />
            
  	      <Input onChange={utils.content.bind(this)} value={this.state.content} s={12} type="textarea" label="Content" />

          <Button waves='light' type="submit">Submit</Button>
        </Row>
      </form>
    )
  }
}

export default Form;