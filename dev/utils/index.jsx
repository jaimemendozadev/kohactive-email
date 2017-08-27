import axios from 'axios';
const apiURL = 'http://localhost:3000/api/email';

function sentBy(event){
  this.setState({
    fromEmail: event.target.value
  });
}

function sendTo(event){
  this.setState({
    toEmail: event.target.value
  });
}

function subjectLine(event){
  this.setState({
    subject: event.target.value
  });
}

function content(event){
  this.setState({
    content: event.target.value
  });
}

function handleSubmit(event){
  event.preventDefault();

  const message = {
    FROM: this.state.fromEmail,
    TO: this.state.toEmail,
    SUBJECT: this.state.subject,
    CONTENT: this.state.content
  }

  console.log("the formatted message is ", message);

  axios.post(apiURL, message)
    .then(response => {
      console.log("Response inside axios ", response);

    })
    .catch(error => {
      console.log("Error inside axios ", error);

    });
  
  this.setState({
    toEmail: '',
    subject: '',
    content: ''
  });
  
}

export default {
  sentBy,
  sendTo,
  subjectLine,
  content,
  handleSubmit
}