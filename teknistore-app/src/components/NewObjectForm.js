import React, { useState } from 'react';

const NewObjectForm = (props) => {
    let newObject = props.object ? props.object : {
        name: "name",
        description: "description"
    };
    const [name, setName] = useState(newObject.name);
    const [description, setDescription] = useState(newObject.description);

    const handleNameChange = event => {
        setName(event.target.value)
    };
    const handleChange = event => {
        setName(event.target.value)
    };

    const handleDescription = (event) => {
        setDescription(event.target.value)
    };

    return (
        <>
            {/*body*/}
            <form onSubmit={(event) => props.onSubmit(event, props.object)}>
                <div className="relative p-6 flex-auto">
                    <span>{props.object.id}</span>
                    <div>
                        <label>
                            Name
                        </label>
                        <input 
                            type="text"
                            name="name"
                            className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                            placeholder="Object name"
                            value={name}
                            onChange={handleChange}
                            />
                    </div>
                    <div>
                        <label>
                            Description
                        </label>
                        <textarea 
                            name="description" 
                            value={description}
                            className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                            onChange={handleChange}
                             />
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
                        {props.action}
                    </button>
                </div>
            </form>
        </>
    );
};
export default NewObjectForm;