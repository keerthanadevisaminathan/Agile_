import React from "react";
import Footer from "./Footer";
// import Appointment from "./Appointment";
import Table from "./Table";
import Navbar from "./Navbar";
import "./table.css";

const Layout = () => {
  return (
    <div>
      <div>
        <Navbar />
        <div className="image-with-text">
          <img
            src={
              "https://www.aakashhospital.in/admin/assets/images/illustrations/homebanner.svg"
            }
            alt="Imag"
            className="image"
          />
          <div style={{ textAlign: "center" }}>
            {"The Highest Quality Healthcare!"}
            <h2>DOCTOR APPOINTMEN</h2>
          </div>
        </div>
        <Table />
        <Footer />
        {/* <Appointment /> */}
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Layout;
