import React from 'react'

const Fixture = ({ fixture }) => {
    return (
        <div class="w-full flex flex-col justify-center items-center">
            <div class='max-w-lg bg-white shadow-md rounded-lg overflow-hidden mx-auto'>
                <div class="py-4 px-8 mt-3">
                    <div class="flex flex-col mb-8">
                    <h2 class="text-gray-700 font-semibold text-2xl tracking-wide mb-2">{fixture}</h2>
                    <p>Description here</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Fixture;