import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props){
    super(props);

  }

  render(){
    return(
      <h1>Hello You!</h1>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));

