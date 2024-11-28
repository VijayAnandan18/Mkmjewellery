import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import CollectionPage from "./pages/CollectionPage";
function App() {
  return (
    <Router>
      <Routes>
        {/* Define the Home route */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/collections" element={<CollectionPage/>}/>
        {/* You can add more routes here for other pages */}
      </Routes>
    </Router>
  );
}

export default App;
