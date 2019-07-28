import React, { Component } from 'react';
import Layout from './containers/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  state = {
  }
  componentDidMount(){
  }
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Layout />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
