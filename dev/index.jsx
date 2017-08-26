import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Form from './form.jsx';

class App extends Component {
  constructor(props){
    super(props);
    this.handleSend = this.handleSend.bind(this);

  }

  handleSend(event){
    console.log("the event is ", event);
  }

  render(){
    return(
      <div>
        <h1>SimplySendIt!</h1>
        <p>SimplySendIt is a simple app that allows you to send an email to anyone in the world!</p>

        <p>You don't even need to signup for an email account. We'll send the message on your behalf using our custom domain!</p>

        <p>We just need the recepient email, the subject of the message, and the message you want to send!</p>
        <Form callBack={this.handleSend} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));

