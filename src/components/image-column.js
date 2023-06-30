import React from 'react';
import img3 from './../assets/img3.jpg';
import img4 from './../assets/img4.jpg';
import img5 from './../assets/img5.jpg';
import img6 from './../assets/img6.jpg';
function ImageColumn() {
  return (
    <div className='grid grid-cols-1 gap-10 lg:grid-cols-2 md:gap-6 md:p-24'>
      <div>
        <img className='md:h-80 md:w-full' src={img5} alt='building' />
        <span className='uppercase font-bold md:text-xl'>the path of least resistance</span>
        <p className='md:text-xl'>Brian Gordon - May 1 2017</p>
      </div>
      <div >
        <img className='md:h-80 md:w-full' src={img6} alt='building' />
        <span className='uppercase font-bold md:text-xl'>how to reach new heights</span>
        <p className='md:text-xl'>Brian Gordon - May 1 2017</p>
      </div>
      <div>
        <img className='md:h-80 md:w-full' src={img3} alt='building' />
        <span className='uppercase font-bold md:text-xl '>Overcoming creative block</span>
        <p className='md:text-xl'>Brian Gordon - May 1 2017</p>
      </div>
      <div>
        <img className='md:h-80 md:w-full' src={img4} alt='building' />
        <span className='uppercase font-bold md:text-xl '>Why communication is key</span>
        <p className='md:text-xl'>Brian Gordon - May 1 2017</p>
      </div>
    </div>
  )
}


export default ImageColumn;

