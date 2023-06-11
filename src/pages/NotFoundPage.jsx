import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <div className="z-30 bg-gradient-to-r from-purple-300 to-blue-200 z-30">
            <div className="z-30 w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
                <div className="z-30 bg-white shadow overflow-hidden sm:rounded-lg pb-8">
                    <div className="z-30 border-t border-gray-200 text-center pt-8">
                        <h1 className="z-30 text-9xl font-bold text-purple-400">404</h1>
                        <h1 className="z-30 text-6xl font-medium py-8">oops! Page not found</h1>
                        <p className="z-30 text-2xl pb-8 px-12 font-medium">Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
                        <NavLink to={"/"} className="z-30 bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6">
                            HOME
                        </NavLink>
                        <NavLink to={"/contact"} className="z-30 bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 text-white font-semibold px-6 py-3 rounded-md">
                            Contact Us
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage