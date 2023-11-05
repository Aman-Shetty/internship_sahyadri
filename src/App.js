import React from "react";
import { AdmissionEnquiry } from "./components";
import { Placement } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Placement />} />
          <Route path="/admissionenquiry" element={<AdmissionEnquiry />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
