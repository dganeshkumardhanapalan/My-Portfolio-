import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Contact from './contents/Contact';
import Projects from './contents/Projects';
import WorkExperience from './contents/WorkExperience';
import References from './contents/References';



function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
    <Route exact path="/">
    <Home />
    </Route>
    <Route path="/about">
    <About />
    </Route>
    <Route path="/education">
    <Education />
    </Route>
    <Route path="/skills">
    <Skills />
    </Route>
    <Route path="/contact">
    <Contact />
    </Route>
    <Route path="/projects">
    <Projects />
    </Route>
    <Route path="/references">
    <References />
    </Route>
    <Route path="/workexperience">
    <WorkExperience />
    </Route>
    
    </div>
    </Router>
    );
  }
  
  export default App;
  