import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";  // Ensure the path is correct
import About from "./components/About";  // Create this component
import Home from "./components/Home";   // Create this component

function App() {
  return (
    <Router>
      <div>
        <Header />  {/* Render Header component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<About />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
