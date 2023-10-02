import React, { Component } from 'react'
import { Link } from 'react-router-dom' 

export default class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
        <ul>Hospitals</ul>
        <ul>Privacy Policy</ul>
        <ul>Contact Us</ul>
        <ul><Link to="/Adminlogin" className="btn1">Admin Login</Link></ul>
      </nav>
      <div className="logo">
        <h1>AIIMS<span> Dashboard.</span></h1>
      </div>
      </div>
    )
  }
}
