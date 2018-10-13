import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Components/Nav';
import Skills from './Components/Skills';
import WEs from './Components/WorkExperiences';
import OnTheWeb from './Components/OnTheWeb';
import Contact from './Components/Contact';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h2 className="text-center mb-5" id="skills">My Skills</h2>
        <Skills />
        <hr />
        <h2 className="text-center mb-5 mt-5" id="workexp">Work Experiences</h2>
        <WEs />
        <h2 className="text-center mb-5 mt-5" id="accounts">My Accounts</h2>
        <OnTheWeb />
        <h2 className="text-center mb-5 mt-5" id="accounts">Contact Me</h2>
        <Contact />
      </div>
    );
  }
}

export default App;
