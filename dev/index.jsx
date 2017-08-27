import React from 'react';
import ReactDOM from 'react-dom';
import Form from './form.jsx';

const style = {
  form: {
    marginTop: '3.5em'
  }
}

const App = () => {
  return(
    <div>
      <h1>Simply Send It!</h1>
      
      <p>Simply Send It is an app that allows you to send an email to anyone in the  world!</p>  

      <p>You don't even need to signup for an email account. We'll send the message on your  behalf using our custom domain!</p>  

      <p>We just need the recepient's email, the subject of the message, and the message body you want to send!</p>

      <p>All you have to do is enter your name in the <em>From</em> field and we'll handle the rest!</p>

      <p>And in case the receipient is wondering why the email never got delivered. Remind them to check their Spam folder.</p>

      <div style={style.form}>
        <Form />
      </div>      
    </div>

    
  )
}

ReactDOM.render(<App />, document.querySelector('.container'));

