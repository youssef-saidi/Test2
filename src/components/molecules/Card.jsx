import React from 'react'
import Image from '../atoms/Image'
import Star from '../atoms/Star'
import { Link, NavLink } from 'react-router-dom'



const Card = ({ data }) => {

    return (
        <>
            {!data ?
                <div className="rounded-md p-4 max-w-sm w-full flex justify-center items-center mx-auto my-auto">
                    <div className="animate-pulse bg-slate-100 w-56 h-36 flex justify-center items-center space-x-4">


                        <div className="flex flex-col justify-center items-center w-full h-full z-50">
                            <div className="w-10 h-10 rounded-full animate-spin
                      border-8 border-dashed border-purple-500 border-t-transparent">
                            </div>

                        </div>

                    </div>
                </div>
                :
                <NavLink to={{ pathname: "/details" }}
                    state={{ data: data }}>
                    <div key={data.id} className='flex flex-col shadow-lg w-56 rounded-md hover:scale-90'>
                        <Image image={data.imageURL} />
                        <h1 className='text-black text-center text-bold text-xl'>{data.denomination}</h1>

                        <div className='w-full flex flex-row justify-end items-center p-2'>
                            <span className='font-semibold'>{data.stars_count}</span>
                            <Star />

                        </div>
                    </div>
                </NavLink>
            }
        </>
    )
}

export default Card