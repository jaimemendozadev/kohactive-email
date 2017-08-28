import axios from 'axios';
const apiURL = '/api/email';

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

function escapeHtml(string) {
  return String(string).replace(/[&<>"'`=\/]/g, function (s) {
    return entityMap[s];
  });
}


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
    FROM: escapeHtml(this.state.fromEmail),
    TO: escapeHtml(this.state.toEmail),
    SUBJECT: escapeHtml(this.state.subject),
    CONTENT: escapeHtml(this.state.content)
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