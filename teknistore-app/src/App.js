import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import NewFixtureForm from './NewFixtureForm'
import FixtureList from './FixtureList';

function App() {
  const [fixtures, setFixtures] = useState([]);

  const handleCreate = newFixture => {
    setFixtures([newFixture, ...fixtures]);
  };
  return (
    <div className="App">
      <NewFixtureForm onSend={handleCreate} />
      <FixtureList data={fixtures} />
    </div>
  );
}

export default App;
