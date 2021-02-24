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
                    displayModal={props.displayModal}
                />
                
            </div>
            { props.showModal ? (
                    <>
                        <Modal
                            action={props.action}
                            closeModal={() => props.displayModal(false)}
                            onSubmit={props.onSubmit}
                        />
                    </>
                ) : null
            }
        </>
    );
}

export default Container;