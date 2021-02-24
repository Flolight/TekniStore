import React, { useState, useEffect } from "react";
import Amplify, { API, graphqlOperation } from 'aws-amplify'

import NavBar from "../components/NavBar";

import NewObjectForm from '../components/NewObjectForm'
import FixtureList from '../components/FixtureList';
import Container from "../components/Container";
import { createFixture } from "../graphql/mutations"
import { listFixtures } from "../graphql/queries"
import Modal from "../components/Modal";

const Stock = () => {
    const [fixtures, setFixtures] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalAction, setModalAction] = useState("");
    const [currentObject, setCurrentObject] = useState();

    useEffect(() => {
        fetchFixtures()
      }, [])

    const fetchFixtures = async () => {
    try {
        const objectData = await API.graphql(graphqlOperation(listFixtures))
        const object = objectData.data.listFixtures.items
        setFixtures(object)
    } catch (err) { console.log('error fetching fixture') }
    }

    const displayModal= (nextState, action, object) => {
        setCurrentObject(object||null)
        setModalAction(action)
        setShowModal(nextState);
    };
    const handleCreate = async newFixture => {
        try{
            setFixtures([newFixture, ...fixtures]);
            await API.graphql(graphqlOperation(createFixture, {input: newFixture}))
        }catch(err){console.error('Error creating fixture ')}
      
    };
    const onSubmit = event => {
        event.preventDefault();
        handleCreate({
            name: event.target.name.value,
            description: event.target.description.value,
        });
        displayModal(false);
    };
    
    return (
        <>
            <NavBar />
            <h2>The stock</h2>
            <Container 
                object={currentObject}
                action={modalAction}
                onSubmit={onSubmit}
                displayModal={displayModal}
                showModal={showModal}
            />
            <FixtureList data={fixtures} displayModal={displayModal} onSubmit={onSubmit} />
        </>
    );
}

export default Stock;