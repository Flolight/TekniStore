import React, { useState, useEffect } from "react";

import NavBar from "../components/NavBar";

import NewFixtureForm from '../components/NewFixtureForm'
import FixtureList from '../components/FixtureList';
const Stock = () => {
    const [fixtures, setFixtures] = useState([]);

    const handleCreate = newFixture => {
      setFixtures([newFixture, ...fixtures]);
    };
    return (
        <>
            <NavBar />
            <h2>The stock</h2>
            <NewFixtureForm onSend={handleCreate} />
            <FixtureList data={fixtures} />
        </>
    );
}

export default Stock;