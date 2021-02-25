import React from 'react'
import Fixture from './Fixture'

const FixtureList = (props) => {
    return (
        <>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-8">
                {props.data.map((fixture) => {
                    return (
                        <div key={fixture.id}>
                            <Fixture 
                                displayModal={props.displayModal}
                                fixture={fixture}
                                name={fixture.name}
                                description={fixture.description}
                                key={fixture.id}
                                />
                        </div>
                    ); 
                    })}
            </div>
      </>
    );
}

export default FixtureList;