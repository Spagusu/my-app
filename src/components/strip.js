import React from 'react';
function Strip() {
    return (
        <div className={`bg-gradient-to-r from-blue-700 to-sky-400 h-24 p-5 w-full text-white grid md:place-content-center sm:place-content-center`}>
            <div className='items-center justify-center'>
                <p className='sm:text-base md:text-xl'>Hit the ground running with a minimalistic look
                    <button className='bg-white text-black p-2 text-sm ml-2 sm:text-sm md:text-base lg:text-lg '>Learn More</button>
                </p>

            </div>

        </div>
    )
}

export default Strip;