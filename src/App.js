import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        {/* Define the Home route */}
        <Route path="/" element={<Home />} />
        {/* You can add more routes here for other pages */}
      </Routes>
    </Router>
  );
}

export default App;
