import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import NewFixtureForm from './NewFixtureForm'

function App() {
  return (
    <div className="App">
      <NewFixtureForm />
    </div>
  );
}

export default App;
