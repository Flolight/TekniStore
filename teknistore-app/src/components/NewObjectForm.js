import React, { useState } from 'react';

const NewObjectForm = (props) => {
    const [inputText, setInputText] = useState('');

    const handleTextChange = event => {
        setInputText(event.target.value)
    };

    const handleCreate = () => {

        setInputText('');
    };

    return (
        <>
            {/*body*/}
            <form onSubmit={(event) => props.onSubmit(event)}>
                <div className="relative p-6 flex-auto">
                    <div>
                        <label>
                            Name
                        </label>
                        <input type="text" name="name" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Object name" />
                    </div>
                    <div>
                        <textarea name="description" />
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
        </>
    );
};
export default NewObjectForm;