import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import NewFixtureForm from './NewFixtureForm'
import FixtureList from './FixtureList';
import SideBar from './SideBar'

function Dashboard() {
  const [fixtures, setFixtures] = useState([]);

  const handleCreate = newFixture => {
    setFixtures([newFixture, ...fixtures]);
  };
  return (
    <>
        <SideBar />
        <NewFixtureForm onSend={handleCreate} />
        <FixtureList data={fixtures} />
    </>
  );
}

export default Dashboard;
