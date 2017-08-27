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
      
      <p>SimplySendIt is an app that allows you to send an email to anyone in the  world!</p>  

      <p>You don't even need to signup for an email account. We'll send the message on your  behalf using our custom domain!</p>  

      <p>We just need the recepient's email, the subject of the message, and the message body you want to send!</p>

      <p>All you have to do is enter your name in the <em>From</em> field and we'll handle the rest!</p>

      <div style={style.form}>
        <Form />
      </div>      
    </div>

    
  )
}

ReactDOM.render(<App />, document.querySelector('.container'));

