import React from 'react'
import Fixture from './Fixture'

const FixtureList = ({ data }) => {
    return (
        <div className="flex flex-wrap justify-center">
            {data.map(fixture => <Fixture name={fixture.name} description={fixture.description} key={fixture.name} />)}
        </div>
    );
}

export default FixtureList;