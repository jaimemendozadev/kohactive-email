import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Form from './form.jsx';

class App extends Component {
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div>
        <h1>SimplySendIt!</h1>
        <Form />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));

