import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Main7 = () => {
  return (
    <div className="bg-green-950 flex flex-col py-8 px-4 md:px-12 lg:px-24">
      {/* Image and Heading Section */}
      <div className="relative flex ">
        <img
          src="../../public/photos/3rd.jpg"
          alt="Destination"
          className="w-56 h-72 object-cover rounded-3xl"
          loading="lazy"
        />
        <h1 className="absolute text-center text-6xl md:text-5xl font-semibold text-yellow-500 px-20 bottom-8">
          <span className='text-white '>O</span>UR TRAVEL <br />
          ST<span className='text-white '>O</span>RIES
        </h1>
      </div>

      {/* Description Section */}
      <p className="text-white text-center mt-6 leading-relaxed">
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
         Amet quis nemo, reiciendis omnis
        nostrum similique voluptatibus <br />
         ex autem modi odit, aspernatur iusto asperiores soluta <br />
         facere nulla? Delectus ipsa dicta odio."
      </p>

      {/* Navigation Arrows */}
      <div className="flex justify-between items-center mt-8 w-full">
  <FontAwesomeIcon
    icon={faArrowLeft}
    className="text-yellow-500 text-4xl cursor-pointer hover:text-gray-400"
  />
  <FontAwesomeIcon
    icon={faArrowRight}
    className="text-yellow-500 text-4xl cursor-pointer hover:text-gray-400"
  />
</div>


      {/* Traveler Info */}
      <div className="flex items-center justify-center mt-8 space-x-4">
        <img
          src="https://via.placeholder.com/40"
          alt="Traveler"
          className="w-10 h-10 rounded-full border-2 border-white"
          loading="lazy"
        />
        <div className="text-white">
          <h1 className="font-semibold">Christian Patric</h1>
          <span className="text-sm">New York, USA</span>
        </div>
      </div>
    </div>
  );
};

export default Main7;
