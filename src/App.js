import "./App.css";
import React, { Component, useState } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default class App extends Component {

  state= {
    progres: 0,
    country: 'us',
  }

  setProgress = (progress) => {
    this.setState({
      progres: progress,
    })
  }

  setCountry = (country) => {
    console.log("enterted country:", country)
    this.setState({ country: country})
    console.log("state country:", this.state.country)
  }

  newsProps = {
    pageSize: 12,
  }

  apiKey = process.env.REACT_APP_NEWS_API_KEY
  

  render() {
    console.log("apiKey:", this.apiKey)
    return (
      <div>
         <LoadingBar color='#c91f1fd1' progress={this.state.progres} height={3} />
         <NavBar setCountry={this.setCountry} />
          <Routes>
            <Route path="/" exact element={<News setProgress={this.setProgress} key={this.state.country} pageSize={this.newsProps.pageSize} country={this.state.country} apiKey={this.apiKey} category={"general"} />} />
            <Route path="/business" exact element={<News setProgress={this.setProgress} key="business" pageSize={this.newsProps.pageSize} country={this.state.country} apiKey={this.apiKey} category={"business"} />} />
            <Route path="/entertainment" exact element={<News setProgress={this.setProgress} key="entertainment" pageSize={this.newsProps.pageSize} country={this.state.country} apiKey={this.apiKey} category={"entertainment"} />} />
            <Route path="/health" exact element={<News setProgress={this.setProgress} key="health" pageSize={this.newsProps.pageSize} country={this.state.country} apiKey={this.apiKey} category={"health"} />} />
            <Route path="/science" exact element={<News setProgress={this.setProgress} key="science" pageSize={this.newsProps.pageSize} country={this.state.country} apiKey={this.apiKey} category={"science"} />} />
            <Route path="/sports" exact element={<News setProgress={this.setProgress} key="sports" pageSize={this.newsProps.pageSize} country={this.state.country} apiKey={this.apiKey} category={"sports"} />} />
            <Route path="/technology" exact element={<News setProgress={this.setProgress} key="technology" pageSize={this.newsProps.pageSize} country={this.state.country} apiKey={this.apiKey} category={"technology"} />} />
          </Routes>
      </div>
    );
  }
}
