import React from 'react'
import QRCode from 'qrcode.react'

const Fixture = ({fixture, displayModal}) => {
    return (
        <>
            
            <div className="w-full flex flex-col justify-center items-center">
                <div className="w-full flex flex-row-reverse mr-4">
                    <button 
                        className="p-1 bg-transparent border-0 text-black opacity-90 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => displayModal(true, "Delete", fixture)}
                    >
                        <span className="bg-transparent text-black opacity-90 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            <i className="fa fa-trash fa-sm  text-red-600"></i>
                            </span>
                    </button>
                    <button 
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-90 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => displayModal(true, "Update", fixture)}
                    >
                        <span className="bg-transparent text-black opacity-90 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            <i className="fa fa-edit fa-sm text-indigo-900"></i>
                            </span>
                    </button>
                </div>    
                <div className='w-full bg-white shadow-md rounded-lg overflow-hidden'>
                    <div className="py-8 px-8 mt-3">
                        <div className="flex flex-col mb-8">
                        <h2 className="text-gray-700 font-semibold text-2xl tracking-wide mb-2">{fixture.name}</h2>
                        <p>{fixture.description? fixture.description : "description"}</p>
                        
                        </div>
                        <div className="flex justify-between items-end">
                            <QRCode value={fixture.description} size={50} className=""/>
                            <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-indigo-100 bg-indigo-600 rounded-full">Cable</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Fixture;