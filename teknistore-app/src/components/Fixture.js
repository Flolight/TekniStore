import React from 'react'

const Fixture = ({ name, description }) => {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className='max-w-lg bg-white shadow-md rounded-lg overflow-hidden mx-auto'>
                <div className="py-4 px-8 mt-3">
                    <div className="flex flex-col mb-8">
                    <h2 className="text-gray-700 font-semibold text-2xl tracking-wide mb-2">{name}</h2>
                    <p>{description? description : "description"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Fixture;