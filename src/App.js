import "./App.css";
import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
         <NavBar />
          <Routes>
            <Route path="/" exact element={<News key="general" pageSize={12} country={"in"} category={"general"} />} />
            <Route path="/business" exact element={<News key="business" country={"in"} category={"business"} />} />
            <Route path="/entertainment" exact element={<News key="entertainment" pageSize={12} country={"in"} category={"entertainment"} />} />
            <Route path="/health" exact element={<News key="health" pageSize={12} country={"in"} category={"health"} />} />
            <Route path="/science" exact element={<News key="science" pageSize={12} country={"in"} category={"science"} />} />
            <Route path="/sports" exact element={<News key="sports" pageSize={12} country={"in"} category={"sports"} />} />
            <Route path="/technology" exact element={<News key="technology" pageSize={12} country={"in"} category={"technology"} />} />
          </Routes>
      </div>
    );
  }
}
