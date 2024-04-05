import React from 'react'
import { Link } from "react-router-dom"

export const PageNotFound = () => {
    return (
        <div className='flex flex-col items-center justify-center bg-green-900 min-h-screen'>
            <div className="relative block max-w-md md:w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 mx-5">
                <img className="rounded-lg w-1/2 mx-auto" src="https://cdn.pixabay.com/photo/2019/02/04/08/38/pixel-cells-3974187_1280.png" alt="Error" />
                <h5 className="mt-5 mb-3 text-4xl font-bold tracking-tight text-green-900">404</h5>
                <h6 className="mt-2 mb-7 text-xl font-bold tracking-tight text-green-900">Stránka nebyla nalezena</h6>
                <Link to="/" className="inline-flex items-center gap-2 text-white bg-green-600 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 focus:outline-none">
                    Zpět na hlavní stránku
                </Link>
            </div>
        </div>
    )
}
