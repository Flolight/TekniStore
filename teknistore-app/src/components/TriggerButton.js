import React, { useState, useEffect } from "react";

const TriggerButton = (props) => {
    return (
        <>
            <button className="bg-indigo-500 text-white active:bg-indigo-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                        onClick={() => props.displayModal(true, "Create")}
                >
                <i className="fas fa-plus"></i> {props.triggerText}
            </button>
        </>
    );
}

export default TriggerButton;