import React from 'react'

const FixtureList = ({ data }) => {
    return (
        <ul>
            {data.map(fixture => <li key={fixture}>{fixture}</li>)}
        </ul>
    );
}

export default FixtureList;