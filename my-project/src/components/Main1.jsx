import React from 'react';
import Header from './Header';
import Main2 from './Main2';

const Main1 = () => {
  return (
    <div className='bg-black'>
    <div
      className="relative h-screen bg-cover bg-center flex flex-col justify-center items-center text-center text-white border-4 border-black rounded-3xl p-4 md:p-16"
      style={{
        backgroundImage: "url('../../public/photos/1st.jpg')",
        backgroundColor: 'black',
      }}
    >
      {/* Header positioned within the image */}
      <div className="absolute top-0 left-0 w-full">
        <Header />
      </div>

      {/* Main content section */}
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="mb-12 md:mb-20 px-4">
          <h1 className="text-3xl md:text-6xl text-yellow-400 font-bold mb-4">
            EMB<span className="text-white">A</span>RK ON A JOURNE
            <span className="text-white">Y</span> <br /> OF A LIF
            <span className="text-white">E</span> TIME
          </h1>
          <p className="text-base md:text-xl max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam in
            magnam doloribus doloremque debitis iusto quibusdam non distinctio
            dolorem alias.
          </p>
        </div>
        <button className="bg-yellow-500 text-black font-semibold px-4 md:px-6 py-2 md:py-3 rounded-full hover:bg-yellow-600 transition">
          Book Now
        </button>
      </div>
    </div>
{/* 2nd div with the image amd h1  */}

<Main2/>
    </div>
  );
};

export default Main1;
