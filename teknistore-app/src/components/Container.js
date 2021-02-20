import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import TriggerButton from "./TriggerButton";

const Container = (props) => {
    const triggerText = "New object";
    
    return (
        <>
            <div className="flex flex-row-reverse">
                <TriggerButton 
                    triggerText={triggerText}
                    showModal={props.updateModal}    
                />
                
            </div>
            { props.showModal ? (
                    <>
                        <Modal
                            closeModal={() => props.updateModal(false)}
                            onSubmit={props.onSubmit}
                        />
                    </>
                ) : null
            }
        </>
    );
}

export default Container;