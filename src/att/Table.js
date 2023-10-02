import React from "react";
import "./table.css";
import { Link } from "react-router-dom";

const Table = () => {
  const data = [
    {
      id: "Cardiologist",
      name: 4,
      drname: "Book Now",
    },
    {
      id: "Anesthesiologist",
      name: 5,
      drname: "Book Now",
    },
    {
      id: "Dermatologist",
      name: "4",
      drname: "Book Now",
    },
    {
      id: "Endocrinologist",
      name: 3,
      drname: "Book Now",
    },
    {
      id: "Surgeon",
      name: 5,
      drname: "Book Now",
    },
    {
      id: "Pulmonologist",
      name: 3,
      drname: "Book Now",
    },
    {
      id: "Psychiatrist",
      name: 4,
      drname: "Book Now",
    },
  ];

  return (
    <div className="table-container">
      <div className="table">
        <table className="justify-table align-table">
          <thead>
            <tr>
              <th>Departments</th>
              <th>No.of Doctors Available</th>
              <th>Book</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td className="justify-table">{item.id}</td>
                <td className="justify-table">{item.name}</td>
                <td className="justify-table">
                  {" "}
                  <Link className="lkn" to="/Appointment">
                    {item.drname}
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
export default Table;
