import React from 'react';

function Columns() {
    return (
      <div className="flex flex-row justify-between pt-32 place-items-center leading-8 sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl
      sm:leading-5 md:leading-7 lg:leading-9 xl:leading-10 2xl-leading-tight">
        <div className="flex flex-col sm:w-2/3">
          <h3 className='font-bold'>DESIGN</h3>
          <p>With an emphasis on typography, white-space and mobile-optimized design, your website will look absolutely breathtaking.</p>
          <button className='bg-black text-white rounded-sm w-24 h-10 text-xs'>Learn More</button>
        </div>
        <div className="flex flex-col sm:w-2/3">
          <h3 className='font-bold'>CONTENT</h3>
          <p>Our team will teach you the art of writing audience-focusedcontent that will help youachieve the success you trully desire.</p>
          <button className='bg-black text-white rounded-sm w-24 h-10 text-xs'>Learn More</button>
        </div>
        <div className="flex flex-col sm:w-2/3">
          <h3 className='font-bold'>STRATEGY</h3>
          <p>We help digital entrepreneurs build their digital business by focusing on three key elementsof a successful online platform.</p>
          <button className='bg-black text-white rounded-sm w-24 h-10 text-xs'>Learn More</button>
        </div>
      </div>
    );
  }
  

export default Columns;
