
import React from 'react'
import './Admincss.css';
import { Link } from 'react-router-dom';
import Nav from './components/Nav';
import Adminpage from './Adminpage';

export default function Adminlogin() {
  return (
    <div className='adm'>
     <div>
        <nav className="navbar">
        <ul>Hospitals</ul>
        <ul>Privacy Policy</ul>
        <ul>Contact Us</ul>
        {/* <ul><Link to="/Adminlogin" className="btn1">Admin Login</Link></ul> */}
      </nav>
      <div className="logo">
        <h1>AIIMS<span> Dashboard.</span></h1>
      </div>
      </div>
      <div className='log'>
      <h1>Admin Login</h1>
        <div className='mnq'>
        <label className='lb1'>Username :</label><br/>
        <input placeholder='Enter Username' type='text' className='inp1'/><br/><br/>
        <label className='lb1'>Password :</label><br/>
        <input placeholder='Enter Username' type='password' className='inp1'/><br/>
        <Link to="/Adminpage" className='ln1'>Login</Link>
        </div>
      </div>
    </div>
  )

}
