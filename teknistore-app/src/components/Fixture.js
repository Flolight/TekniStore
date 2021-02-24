import React from 'react'

const Fixture = (props) => {
    return (
        <>
            
                
                <div className='w-full bg-white shadow-md rounded-lg overflow-hidden'>
                    <div className="py-8 px-8 mt-3">
                        <div className="flex flex-col mb-8">
                        <h2 className="text-gray-700 font-semibold text-2xl tracking-wide mb-2">{props.name}</h2>
                        <p>{props.description? props.description : "description"}</p>
                        </div>
                    </div>
                </div>
            
        </>
    );
}

export default Fixture;