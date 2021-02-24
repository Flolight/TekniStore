import React from 'react'
import Fixture from './Fixture'

const FixtureList = (props) => {
    return (
        <>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-8">
                {props.data.map((fixture, index) => {
                    return (
                        <>
                            <div className="w-full flex flex-col justify-center items-center">
                                <div className="w-full flex flex-row-reverse mr-4">
                                    <button 
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-90 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => props.displayModal(true, "Update")}
                                    >
                                        <span className="bg-transparent text-black opacity-90 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            <i className="fa fa-edit fa-sm"></i>
                                            </span>
                                    </button>
                                </div>
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