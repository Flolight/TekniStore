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
            />
             <button
                data-testid="createButton"
                onClick={ handleCreate }
            >
                Create Fixture
            </button>
        </div>
    );
};
export default NewFixtureForm;