import React,{useEffect} from 'react'
import Card from '../molecules/Card'
import { useUsers } from '../../hooks'
import { useSelector } from 'react-redux';

const Cards = () => {


    const { Users, isLoading, error,fetchUsers } = useUsers();
    useEffect(() => {
        fetchUsers()
    }, [])
    
    const users = useSelector((state) => state.users.users)
    console.log(users)

    // console.log(Users)
    return (
        <>
            <section className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center gap-y-5 my-10'>
                {
                    users == undefined || users?.length === 0 ?
                        new Array(20).fill({}).map(() => (
                            <div className="rounded-md p-4 max-w-sm w-full flex justify-center items-center mx-auto my-auto">
                                <div className="animate-pulse bg-slate-100 w-56 h-36 flex justify-center items-center space-x-4">


                                    <div className="flex flex-col justify-center items-center w-full h-full z-50">
                                        <div className="w-10 h-10 rounded-full animate-spin
                                    border-8 border-dashed border-purple-500 border-t-transparent">
                                        </div>

                                    </div>

                                </div>
                            </div>
                        )) :

                        users?.map((item) => <Card data={item} isLoading={isLoading} />)


                }
            </section>

        </>
    )
}

export default Cards