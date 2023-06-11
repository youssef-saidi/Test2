import React from 'react'
import { useLocation } from 'react-router-dom';
import Star from '../components/atoms/Star';

const Details = () => {
    const location = useLocation();
    const { data } = location.state;
    console.log(data);
    return (

        <main className="profile-page mt-96">
            <section className="relative block h-500-px">
                <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80')" }}>
                    <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
                </div>
                <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{ transform: "translateZ(0px)" }}>
                    <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                        <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
                    </svg>
                </div>
            </section>
            <section className="relative py-16 bg-blueGray-200">
                <div className="container mx-auto px-4">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                        <div className="px-6">
                            <div className="flex flex-wrap justify-center">
                                {/* <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"> */}
                                <div className="relative w-24 mt-5">
                                    <img src={data.imageURL} className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px" />
                                </div>
                                {/* </div> */}
                                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:justify-end justify-center self-center">
                                    <div className="py-6 px-3 mt-32 sm:mt-0 flex items-center">

                                        <Star />
                                        <span className='font-bold'>{data.stars_count}</span>
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                        <div className="mr-4 p-3 text-center">
                                            <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{data.skills.length}</span><span className="text-sm text-blueGray-400">Skills</span>
                                        </div>
                                        <div className="mr-4 p-3 text-center">
                                            <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{data.specialities.length}</span><span className="text-sm text-blueGray-400">specialities</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-12">
                                <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                    {data.denomination}
                                </h3>
                         
                                {
                                    data.specialities.map((sp) =>
                                    (
                                        <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                        <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                                        {sp}
                                    </div>
                              
                                    ))


                                }
                            </div>
                            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-9/12 px-4">
                                        <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius quos harum laboriosam nam repudiandae saepe necessitatibus distinctio eum reprehenderit maiores odit nisi, quasi itaque sunt cumque a veritatis excepturi quis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    )
}

export default Details