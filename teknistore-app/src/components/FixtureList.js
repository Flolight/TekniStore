import React from 'react'
import Fixture from './Fixture'

const FixtureList = ({ data }) => {
    return (
        <div className="flex flex-wrap justify-center">
            {data.map(fixture => <Fixture fixture={fixture} />)}
        </div>
    );
}

export default FixtureList;