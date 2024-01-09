import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar";
import Welcome from "./components/Welcome";
import Dishes from "./components/Dishes";
import About from "./components/About";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Signup from "./components/Signup";


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <main>
        <div id="welcome">
          <Welcome />
        </div>
        <div id="dishes">
          <Dishes />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="menu">
          <Menu />
        </div>
        <div id="Contact">
          <Contact />
        </div> 
      </main>
        <Routes>
          <Route path="/dishes" element={<Dishes />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
