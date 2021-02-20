import React, { useState, useEffect } from "react";

import NavBar from "../components/NavBar";

import NewFixtureForm from '../components/NewFixtureForm'
import FixtureList from '../components/FixtureList';
import Container from "../components/Container";

const Stock = () => {
    const [fixtures, setFixtures] = useState([]);
    const [showModal, setShowModal] = React.useState(false);

    const updateModal= (nextState) => {
        setShowModal(nextState);
    };
    const handleCreate = newFixture => {
      setFixtures([newFixture, ...fixtures]);
    };
    const onSubmit = event => {
        event.preventDefault();
        handleCreate({
            name: event.target.name.value,
            description: event.target.description.value,
        });
        updateModal(false);
    };
    
    return (
        <>
            <NavBar />
            <h2>The stock</h2>
            <Container 
                onSubmit={onSubmit}
                updateModal={updateModal}
                showModal={showModal}
            />

            <NewFixtureForm onSend={handleCreate} />
            <FixtureList data={fixtures} />
        </>
    );
}

export default Stock;