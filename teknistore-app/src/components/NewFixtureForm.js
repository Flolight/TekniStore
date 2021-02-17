import React, { useState } from 'react';

const NewFixtureForm = ({ onSend }) => {
    const [inputText, setInputText] = useState('');

    const handleTextChange = event => {
        setInputText(event.target.value)
    };

    const handleCreate = () => {
        onSend(inputText);
        setInputText('');
    };

    return (
        <div>
            <input
                type="text"
                data-testid="fixtureName"
                value={ inputText }
                onChange={ handleTextChange }
                className="border border-transparent focus:outline-none focus:ring-blue-800 focus:ring-2"
            />
             <button
                data-testid="createButton"
                onClick={ handleCreate }
                className="bg-blue-600"
            >
                Create Fixture
            </button>
        </div>
    );
};
export default NewFixtureForm;