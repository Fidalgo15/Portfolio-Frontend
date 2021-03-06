import React from 'react';
import './components/style.css';
import Login from './components/Login';
import Nav from './Nav';
import { Router } from '@reach/router';
import Skill from './components/Skill';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Project from './components/Project';
import Reference from './components/Reference';

function App() {
  return (
    <div>
      <Nav />
        <Router>
          <Login path="/" />
          <Skill path="/skills" />
          <WorkExperience path="/work" />
          <Education path="/education" />
          <Project path="/projects" />
          <Reference path="/references" />
        </Router>
    </div>
  );
}

export default App;
