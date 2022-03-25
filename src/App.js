import './App.css';
import React, { Component } from 'react';
import NavBar from "./Components/NavBar";
import News from './Components/News'

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <News pageSize={12} country={'in'} apiKey={'4053b8b400004c86982aebd728731683'} category={'sports'}  />
      </div>
    );
  }
}

