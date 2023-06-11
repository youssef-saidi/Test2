import React, { useEffect } from 'react'

const Load = () => {
    useEffect(() => {
        // Prevent scrolling on the entire page
        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";

        return () => {
            // Re-enable scrolling when the component is unmounted
            document.documentElement.style.overflow = "auto";
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <section className='absolute h-screen w-screen bg-white z-50 overflow-hidden flex justify-center items-center'>
            {/* <svg className="preloader">
                <g>
                    <path d="M 50,100 A 1,1 0 0 1 50,0" />
                </g>
                <g>
                    <path d="M 50,75 A 1,1 0 0 0 50,-25" />
                </g>
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: "#5C70D6", stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: "#4292FD", stopOpacity: 1 }} />
                    </linearGradient>
                </defs>
            </svg> */}
            <svg className="pl relative -top-5" viewBox="0 0 200 200" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="pl-grad1" x1="1" y1="0.5" x2="0" y2="0.5">
                        <stop offset="0%" stop-color="hsl(313,90%,55%)" />
                        <stop offset="100%" stop-color="hsl(223,90%,55%)" />
                    </linearGradient>
                    <linearGradient id="pl-grad2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="hsl(313,90%,55%)" />
                        <stop offset="100%" stop-color="hsl(223,90%,55%)" />
                    </linearGradient>
                </defs>
                <circle className="pl__ring" cx="100" cy="100" r="82" fill="none" stroke="url(#pl-grad1)" stroke-width="36" stroke-dasharray="0 257 1 257" stroke-dashoffset="0.01" stroke-linecap="round" transform="rotate(-90,100,100)" />
                <line className="pl__ball" stroke="url(#pl-grad2)" x1="100" y1="18" x2="100.01" y2="182" stroke-width="36" stroke-dasharray="1 165" stroke-linecap="round" />
            </svg>

        </section>
    )
}

export default Load