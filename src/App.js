import './App.css';
import React, { Component } from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";

// Pages
import Home from './Pages/Home';
import About from './Pages/About';
import Experience from './Pages/Experience';
import Music from './Pages/Music';
import Photography from './Pages/Photography';
import Repairs from './Pages/Repairs';
import Projects from './Pages/Projects';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/music" element={<Music />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/repairs" element={<Repairs />} />
        </Routes>
      </BrowserRouter> 
    );
  }
}

export default App;
