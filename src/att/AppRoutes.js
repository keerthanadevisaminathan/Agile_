import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Docappointment from './Docappointment';
import Myform from './MyForm';
import 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Docappointment />} />
        <Route path="/Myform" element={<MyForm />} />
      </Routes>
    </Router>
  );
}

export default App;
