import React from 'react';
import { Link } from 'react-router-dom';

const HairIDIntro = () => {
  return (
    <div className='rounded-lg shadow-md overflow-hidden nf bg-eggshell mx-60 lg:mx-60 py-10'>
      <div className='flex items-center justify-center'>
        <div className='grid grid-cols-1'>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <h1 className="text-4xl font-bold max-w-[25rem] col-span-1 m-4 order-2 lg:order-1">
              To find out what products work best for your hair, learn about what your
              <span className='nf text-teal'> Hair ID </span>
              is.
            </h1>
            <div className='col-span-1 m-4 order-1 flex justify-center'>
              <img
                src="images/temp/naturalflo-temp-logo.png"
                alt="Logo"
                className="w-full max-w-[20rem]"
              />
            </div>
          </div>
          <Link className='text-lg nf text-teal hover:text-teal-light underline mx-4' to={'/hair-id'}>Learn More</Link>
        </div>
      </div>
    </div>

  );
};

export default HairIDIntro;
