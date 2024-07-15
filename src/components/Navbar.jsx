import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-2 fixed-top">
  <Link className="navbar-brand" to="/">NewsMonk</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" style={{display:"flex",justifyContent:"space-between"}} id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/">General</Link>
        
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/entertainment">Entertainment</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/sports">Sports</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/science">Science</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/technology">Technology</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/business">Business</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/health">Health</Link>
      </li>
      
    </ul>
    {/* <form className="form-inline my-2 my-lg-0 d-flex">
      <input className="form-control mr-sm-2 me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  </div>
</nav>
    )
  }
}
