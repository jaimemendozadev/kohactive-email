import axios from 'axios';
const apiURL = 'http://localhost:3000/api/email';

const entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
  '`': '&#x60;',
  '=': '&#x3D;'
};

function escapeHtml (string) {
  return String(string).replace(/[&<>"'`=\/]/g, function (s) {
    return entityMap[s];
  });
}


function sentBy(event){

  var sanitizedInput = escapeHtml(event.target.value);

  this.setState({
    fromEmail: sanitizedInput
  });
}

function sendTo(event){
  var sanitizedInput = escapeHtml(event.target.value);
  this.setState({
    toEmail: sanitizedInput
  });
}

function subjectLine(event){
  var sanitizedInput = escapeHtml(event.target.value);
  this.setState({
    subject: sanitizedInput
  });
}

function content(event){
  var sanitizedInput = escapeHtml(event.target.value);

  console.log("sanitizedInput is ", sanitizedInput)
  this.setState({
    content: sanitizedInput
  });

  console.log("the state of content is ", this.state.content);
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