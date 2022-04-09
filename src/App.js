import "./App.css";
import React, { Component, useState } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
 
  let [progres, setProgres] = useState(0)
  let [country, setCountryName] = useState('us')

  const setProgress = (progress) => {
    setProgres(progress)
  }

  const setCountry = (country) => {
    setCountryName(country)
  }

  const newsProps = {
    pageSize: 12,
  }

  let apiKey = process.env.REACT_APP_NEWS_API_KEY
  
   
    return (
      <div>
         <LoadingBar color='#c91f1fd1' progress={progres} height={3} />
         <NavBar setCountry={setCountry} />
          <Routes>
            <Route path="/" exact element={<News setProgress={setProgress} key={country} pageSize={newsProps.pageSize} country={country} apiKey={apiKey} category={"general"} />} />
            <Route path="/business" exact element={<News setProgress={setProgress} key="business" pageSize={newsProps.pageSize} country={country} apiKey={apiKey} category={"business"} />} />
            <Route path="/entertainment" exact element={<News setProgress={setProgress} key="entertainment" pageSize={newsProps.pageSize} country={country} apiKey={apiKey} category={"entertainment"} />} />
            <Route path="/health" exact element={<News setProgress={setProgress} key="health" pageSize={newsProps.pageSize} country={country} apiKey={apiKey} category={"health"} />} />
            <Route path="/science" exact element={<News setProgress={setProgress} key="science" pageSize={newsProps.pageSize} country={country} apiKey={apiKey} category={"science"} />} />
            <Route path="/sports" exact element={<News setProgress={setProgress} key="sports" pageSize={newsProps.pageSize} country={country} apiKey={apiKey} category={"sports"} />} />
            <Route path="/technology" exact element={<News setProgress={setProgress} key="technology" pageSize={newsProps.pageSize} country={country} apiKey={apiKey} category={"technology"} />} />
          </Routes>
      </div>
    );
}

export default App;
