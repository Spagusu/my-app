import React from 'react';
function Strip() {
    return (
        <div className={`bg-gradient-to-r from-blue-700 to-sky-400 h-32 sm:h-6 md:h-14 lg:h-32 xl:h-40 2xl:h-60 w-full flex items-center justify-center text-white `}>
            <p className='sm:text-xs md:text-base lg:text-lg xl:text-xl 2xl:text-4xl '>Hit the ground running with a minimalistic look
                <button className='bg-white text-black p-2 text-sm ml-2 sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl'>Learn More</button>
            </p>

        </div>
    )
}

export default Strip;