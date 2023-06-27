import React from 'react';
import img3 from './../assets/img3.jpg';
import img4 from './../assets/img4.jpg';
import img5 from './../assets/img5.jpg';
import img6 from './../assets/img6.jpg';
function ImageColumn() {
  return (
    <div className='flex flex-row justify-between place-items-center pt-44sm:flex-row'>
      <div>
        <div className='flex flex-col sm:pt-8 md:pt-14 lg:pt-20 xl:pt-32 2xl:pt-40 sm:m-3 md:m-8 lg:m-12 xl:m-16 2xl:m-20'>
          <img className="w-96 sm:w-28 md:w-44 lg:w-56 xl:w-96 2xl:w-96" src={img3} alt='building'/>
          <span className='uppercase font-bold sm:text-xs md:text-text-base lg:text-lg xl:text-xl 2xl:text-2xl'>Overcoming creative block</span>
          <p className='sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl '>Brian Gordon - May 1 2017</p>
        </div>
        <div className='flex flex-col sm:m-3 md:m-8 lg:m-12 xl:m-16 2xl:m-20'>
          <img className="w-96 sm:w-28 md:w-44 lg:w-56 xl:w-96 2xl:w-96" src={img4}  alt='building' />
          <span className='uppercase font-bold sm:text-xs md:text-text-base lg:text-lg xl:text-xl 2xl:text-2xl'>Why communication is key</span>
          <p className='sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl'>Brian Gordon - May 1 2017</p>
        </div>
      </div>
      <div>
        <div className='flex flex-col sm:pt-8 md:pt-14 lg:pt-20 xl:pt-32 2xl:pt-40 sm:m-3 md:m-8 lg:m-12 xl:m-16 2xl:m-20'>
          <img className="w-96 sm:w-28 md:w-44 lg:w-56 xl:w-96 2xl:w-96" src={img5}  alt='building' />
          <span className='uppercase font-bold sm:text-xs md:text-text-base lg:text-lg xl:text-xl 2xl:text-2xl'>the path of least resistance</span>
          <p className='sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl'>Brian Gordon - May 1 2017</p>
        </div>
        <div className='flex flex-col sm:m-3 md:m-8 lg:m-12 xl:m-16 2xl:m-20'>
          <img className="w-96 sm:w-28 md:w-44 lg:w-56 xl:w-96 2xl:w-96" src={img6}  alt='building'/>
          <span className='uppercase font-bold sm:text-xs md:text-text-base lg:text-lg xl:text-xl 2xl:text-2xl'>how to reach new heights</span>
          <p className='sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl'>Brian Gordon - May 1 2017</p>
        </div>
      </div>
    </div>
  )
}


export default ImageColumn;

