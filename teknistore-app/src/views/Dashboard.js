import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import NewFixtureForm from '../components/NewFixtureForm'
import FixtureList from '../components/FixtureList';
import NavBar from '../components/NavBar'

function Dashboard() {
  const [fixtures, setFixtures] = useState([]);

  const handleCreate = newFixture => {
    setFixtures([newFixture, ...fixtures]);
  };
  return (
    <>
      <NavBar />
      <NewFixtureForm onSend={handleCreate} />
      <FixtureList data={fixtures} />
    </>
  );
}

export default Dashboard;
