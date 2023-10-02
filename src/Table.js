import React from 'react'
import "./table.css";
import { Link } from "react-router-dom";

export default function Table() {
  return (
    <div >
      <table id="myTable">
     <caption>Doctor Appointment</caption>
     <thead>
      <tr>
        <th scope="col">Department</th>
        <th scope="col">Number Of Doctors Available</th>
        <th scope="col">Floor Number</th>
        <th scope="col">Book Now</th>
      </tr>
    </thead>
    <tbody>
    <tr>
        <td scope="row" data-label="University Name">Cardiologist</td>
        <td >2</td>
        <td >1</td>
        <td ><Link to="/Docappointment" className='lkn'>Click To Book</Link></td>
      </tr>
    <tr>
        <td scope="row" data-label="University Name">Cardiologist</td>
        <td >2</td>
        <td >1</td>
        <td ><a>Click To Book</a></td>
      </tr>
    <tr>
        <td scope="row" data-label="University Name">Cardiologist</td>
        <td >2</td>
        <td >1</td>
        <td ><a>Click To Book</a></td>
      </tr>
    <tr>
        <td scope="row" data-label="University Name">Cardiologist</td>
        <td >2</td>
        <td >1</td>
        <td ><a>Click To Book</a></td>
      </tr>
    <tr>
        <td scope="row" data-label="University Name">Cardiologist</td>
        <td >2</td>
        <td >1</td>
        <td ><a>Click To Book</a></td>
      </tr>
    <tr>
        <td scope="row" data-label="University Name">Cardiologist</td>
        <td >2</td>
        <td >1</td>
        <td ><a>Click To Book</a></td>
      </tr>
    <tr>
        <td scope="row" data-label="University Name">Cardiologist</td>
        <td >2</td>
        <td >1</td>
        <td ><a>Click To Book</a></td>
      </tr>
    <tr>
        <td scope="row" data-label="University Name">Cardiologist</td>
        <td >2</td>
        <td >1</td>
        <td ><a>Click To Book</a></td>
      </tr>
    </tbody>
  </table>
    </div>
  )
}
