import React from 'react';
import './components/style.css';
import Login from './components/Login'
import Nav from './Nav'
import { Router } from '@reach/router'
import Skill from './components/Skill'
import WorkExperience from './components/WorkExperience'
import Education from './components/Education'
import Project from './components/Project'
import Reference from './components/Reference'
import KnowledgeCatalog from './components/KnowledgeCatalog'
// import ErrorTesting from './ErrorTesting'

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
          <KnowledgeCatalog path="/catalog" />
          {/* <ErrorTesting path="/error" /> */}
        </Router>
    </div>
  );
}

export default App;
