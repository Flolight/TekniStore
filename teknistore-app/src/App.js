import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import NewFixtureForm from './NewFixtureForm'
import FixtureList from './FixtureList';
import SideBar from './SideBar'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const [fixtures, setFixtures] = useState([]);

  const handleCreate = newFixture => {
    setFixtures([newFixture, ...fixtures]);
  };
  return (
    <div className="App">
      <Router>
        <SideBar />
        <NewFixtureForm onSend={handleCreate} />
        <FixtureList data={fixtures} />
      </Router>
    </div>
  );
}

export default App;
