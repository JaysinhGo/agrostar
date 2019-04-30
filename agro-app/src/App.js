import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import Header from './components/Header'
import Main from './containers/Main'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
       <BrowserRouter>
          <div className="App">
            <Header/>
            <Main/>
            <Footer/>
          </div>
       </BrowserRouter>
      
    );
  }
}

export default App;
