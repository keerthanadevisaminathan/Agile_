import React from "react";
import { Link } from "react-router-dom";
import "./table.css";

const Docappointment = () => {
  const data = [
    {
      id: "Dr.Deeksha",
      name: "11.00am",
      contact: "6345894627",
    },
    {
      id: "Dr.Vikas",
      name: "8.00am",
      contact: "9562395783",
    },
    {
      id: "Dr.Nicholas",
      name: "3.00pm",
      contact: "9562694062",
    },
    {
      id: "Dr.Deepthi",
      name: "7.00pm",
      contact: "6596238946",
    },
  ];

  return (
    <div className="table-container">
      <div className="table">
        <center>
          <h2>Cardiologists</h2>
        </center>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Available Time</th>
              <th>Contact Number</th>
              <th>Book</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.contact}</td>
                <td>
                  <Link to="/userform" className="btn2">
                    Book now
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="image-container">
        <div className="image-blur" />
      </div>
    </div>
  );
};

export default Docappointment;