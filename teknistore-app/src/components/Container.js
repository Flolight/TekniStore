import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import TriggerButton from "./TriggerButton";

const Container = (props) => {
    const [showModal, setShowModal] = React.useState(false);
    const triggerText = "New object";
        const onSave = (newObject) => {
        
        setShowModal(false);
    }
    const updateModal= (nextState) => {
        setShowModal(nextState);
    }
    
    return (
        <>
            <div className="flex flex-row-reverse">
                <TriggerButton 
                    triggerText={triggerText}
                    showModal={updateModal}    
                />
                
            </div>
            { showModal ? (
                    <>
                        <Modal
                            closeModal={() => updateModal(false)}
                            onSubmit={props.onSubmit}
                        />
                    </>
                ) : null
            }
        </>
    );
}

export default Container;