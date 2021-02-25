import React, { useState, useEffect, useCallback } from "react";
import Amplify, { API, graphqlOperation } from 'aws-amplify'

import NavBar from "../components/NavBar";

import NewObjectForm from '../components/NewObjectForm'
import FixtureList from '../components/FixtureList';
import Container from "../components/Container";
import { createFixture, updateFixture, deleteFixture } from "../graphql/mutations"
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
        console.log(fixtures)
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
    const handleUpdate = useCallback(async newFixture => {
        try{
            setFixtures([newFixture, ...(fixtures.filter(e => e.id !== newFixture.id))]);
            await API.graphql(graphqlOperation(updateFixture, {input: newFixture}))
        }catch(err){console.error('Error updating fixture ')}
      
    }, [fixtures]);
    const handleDelete = useCallback(async newFixture => {
        try{
            setFixtures([...(fixtures.filter(e => e.id !== newFixture.id))]);
            await API.graphql(graphqlOperation(deleteFixture, {input: newFixture}))
        }catch(err){console.error('Error deleting fixture ')}
      
    }, [fixtures]);
    
    const onSubmitCreate = event => {
        event.preventDefault();
        handleCreate({
            name: event.target.name.value,
            description: event.target.description.value,
        });
        displayModal(false);
    };
    const onSubmit = (event, object) => {
        event.preventDefault();
        const target = {
            id: object.id,
            name: event.target.name ? event.target.name.value : "",
            description: event.target.description ? event.target.description.value : "",
        }
        switch(modalAction){
            case "Create":
                handleCreate(target);
                break;
            case "Update":
                handleUpdate(target);
                break;
            case "Delete":
                handleDelete(target);
                break;
            default:
                break;
        }
        displayModal(false);
    };

    const onSubmitUpdate = event => {
        event.preventDefault();
        handleUpdate({
            id: event.target.name.value,
            name: event.target.name.value,
            description: event.target.description.value,
        });
        displayModal(false);
    };
    
    return (
        <>
            <NavBar />
            <div className="m-10">
                <div>
                    <h2 className="text-4xl font-normal mt-0 text-indigo-800">Stock</h2>
                </div>
                <Container 
                    object={currentObject}
                    action={modalAction}
                    onSubmit={onSubmit}
                    displayModal={displayModal}
                    showModal={showModal}
                />
                <FixtureList data={fixtures} displayModal={displayModal} />
            </div>
        </>
    );
}

export default Stock;