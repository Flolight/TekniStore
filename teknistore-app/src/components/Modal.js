import React, { useState, useEffect } from "react";

const Modal = (props) => {
    


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
                        Create new object
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
                    {/*body*/}
                    <form onSubmit={() => props.onSubmit("test")}>
                        <div className="relative p-6 flex-auto">
                        
                            <div>
                                <label>
                                    Name
                                </label>
                                <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Object name" />
                            </div>
                            <div>
                                <label>
                                    Quantity
                                </label>
                                <input type="number"
                                        className="px-4 py-2 border w-full"
                                        min="1"
                                        max="100000"
                                        />
                            </div>
                        </div>
                    
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                    <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                        onClick={() => props.closeModal()}
                    >
                        Close
                    </button>
                    <button
                        className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="submit"
                        style={{ transition: "all .15s ease" }}
                        
                    >
                        Save Changes
                    </button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
}

export default Modal;