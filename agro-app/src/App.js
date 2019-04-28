import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
       <BrowserRouter>
          <div className="App">
            <Header/>
            <main></main>
            <Footer/>
          </div>
       </BrowserRouter>
      
    );
  }
}

export default App;
