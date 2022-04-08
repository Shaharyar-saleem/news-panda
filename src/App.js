import "./App.css";
import React, { Component, useState } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default class App extends Component {

  state= {
    progres: 0,
  }

  setProgress = (progress) => {
    console.log("progres is set to:", progress);
    this.setState({
      progres: progress,
    })
    console.log("currnet progress:", this.state.progres)
  }

  render() {
    return (
      <div>
         <LoadingBar color='#ff0000' progress={this.state.progres} height={3} />
         <NavBar />
          <Routes>
            <Route path="/" exact element={<News setProgress={this.setProgress} key="general" pageSize={12} country={"in"} category={"general"} />} />
            <Route path="/business" exact element={<News setProgress={this.setProgress} key="business" country={"in"} category={"business"} />} />
            <Route path="/entertainment" exact element={<News setProgress={this.setProgress} key="entertainment" pageSize={12} country={"in"} category={"entertainment"} />} />
            <Route path="/health" exact element={<News setProgress={this.setProgress} key="health" pageSize={12} country={"in"} category={"health"} />} />
            <Route path="/science" exact element={<News setProgress={this.setProgress} key="science" pageSize={12} country={"in"} category={"science"} />} />
            <Route path="/sports" exact element={<News setProgress={this.setProgress} key="sports" pageSize={12} country={"in"} category={"sports"} />} />
            <Route path="/technology" exact element={<News setProgress={this.setProgress} key="technology" pageSize={12} country={"in"} category={"technology"} />} />
          </Routes>
      </div>
    );
  }
}
