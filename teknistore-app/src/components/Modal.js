import React, { useState, useEffect } from "react";
import NewObjectForm from "./NewObjectForm";

const Modal = (props) => {

    switch(props.action){
        case "Delete":
            return (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-6xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                            <h3 className="text-3xl font-semibold">
                                {props.action} object
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-90 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => props.closeModal()}
                            >
                                <span className="bg-transparent text-black opacity-90 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                ×
                                </span>
                            </button>
                            </div>
                            <form onSubmit={(event) => props.onSubmit(event, props.object)}>
                            <p className="items-center relative p-6">Are you sure you want to delete <span className="font-bold">{props.object.name}</span></p>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                                <button
                                    className="text-black-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                    type="button"
                                    style={{ transition: "all .15s ease" }}
                                    onClick={() => props.closeModal()}
                                >
                                    Close
                                </button>
                                <button
                                    className="bg-red-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                    type="submit"
                                    style={{ transition: "all .15s ease" }}
                                >
                                    {props.action}
                                </button>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            );
            break; 
        default:
            return (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-6xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                            <h3 className="text-3xl font-semibold">
                                {props.action} object
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-90 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => props.closeModal()}
                            >
                                <span className="bg-transparent text-black opacity-90 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                ×
                                </span>
                            </button>
                            </div>
                            <NewObjectForm
                                object={props.object}
                                action={props.action}
                                onSubmit={props.onSubmit}
                                closeModal={props.closeModal}
                            />
                        </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            );
            break;     
    }

    
}

export default Modal;