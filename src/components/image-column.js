import React from 'react';
import img3 from './../assets/img3.jpg';
import img4 from './../assets/img4.jpg';
import img5 from './../assets/img5.jpg';
import img6 from './../assets/img6.jpg';
function ImageColumn() {
  return (
    <div className='flex flex-row justify-between place-items-center pt-52'>
      <div>
        <div className='flex flex-col pb-11'>
          <img className="w-96" src={img3} alt='building'/>
          <span className='uppercase font-bold'>Overcoming creative block</span>
          <p>Brian Gordon - May 1 2017</p>
        </div>
        <div className='flex flex-col'>
          <img className="w-96" src={img4}  alt='building' />
          <span className='uppercase font-bold'>Why communication is key</span>
          <p>Brian Gordon - May 1 2017</p>
        </div>
      </div>
      <div>
        <div className='flex flex-col pb-11'>
          <img className="w-96" src={img5}  alt='building' />
          <span className='uppercase font-bold'>the path of least resistance</span>
          <p>Brian Gordon - May 1 2017</p>
        </div>
        <div className='flex flex-col'>
          <img className="w-96" src={img6}  alt='building'/>
          <span className='uppercase font-bold'>how to reach new heights</span>
          <p>Brian Gordon - May 1 2017</p>
        </div>
      </div>
    </div>
  )
}


export default ImageColumn;

