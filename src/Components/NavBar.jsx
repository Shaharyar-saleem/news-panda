import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';

const NavBar = () => {
  const setCountryValue = (event) => { 
    this.props.setCountry(event.target.value)
  }
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NewsPanda
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                Technology
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <select className="form-control" onChange={setCountryValue}>
                <option value="us">USA</option>
                <option value="in">India</option>
                <option value="nz">New Zeland</option>
                <option value="ru">Russia</option>
                <option value="de">Germany</option>
                <option value="gk">Greek</option>
                <option value="ae">UAE</option>
                <option value="tr">Turkey</option>
              </select>
            </form>
          </div>
        </div>
      </nav>
    </div>
    );
}

export default NavBar;
