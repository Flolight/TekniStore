import React from 'react'
import Fixture from './Fixture'

const FixtureList = ({ data }) => {
    return (
        <>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-8">
                {data.map((fixture, index) => {
                    return (
                        <>
                            <div>
                                <Fixture name={fixture.name} description={fixture.description} key={fixture.id ? fixture.id : index}/>
                            </div>
                        </>
                    ); 
                    })}
            </div>
      </>
    );
}

export default FixtureList;