import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThan, faGreaterThan } from '@fortawesome/free-solid-svg-icons';

const Main6 = () => {
  return (
    <main className="bg-green-950 text-white min-h-screen relative">
      {/* Carousel Section */}
      <div
        id="carouselExampleControls"
        className="carousel slide relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active p-16 ">
            <img
              src="../../public/photos/3rd.jpg"
              alt="Destination Image"
              className="w-full h-screen object-cover rounded-3xl"
              loading="lazy"
            />
          </div>
        </div>
        {/* Previous Button */}
        <button
          className="carousel-control-prev absolute top-1/2 left-4 transform -translate-y-1/2 z-10"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
          aria-label="Previous Slide"
        >
          <span
            className="carousel-control-prev-icon bg-black rounded-full p-2"
            aria-hidden="true"
          ></span>
          <FontAwesomeIcon icon={faLessThan} className="sr-only" />
        </button>
        {/* Next Button */}
        <button
          className="carousel-control-next absolute top-1/2 right-4 transform -translate-y-1/2 z-10"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
          aria-label="Next Slide"
        >
          <span
            className="carousel-control-next-icon bg-black rounded-full p-2"
            aria-hidden="true"
          ></span>
          <FontAwesomeIcon icon={faGreaterThan} className="sr-only" />
        </button>
      </div>

      {/* Left Content */}
      <div className="absolute top-1/4 left-4 md:left-1/4 transform -translate-x-1/4 text-left max-w-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-400">
          NO<span className="text-white">R</span>WAY
        </h1>
        <p className="text-base md:text-lg mt-4">
          Norway captivates with its breathtaking natural beauty, featuring
          majestic fjords, cascading waterfalls, and pristine landscapes. From
          the Northern Lights dancing in the Arctic sky to the dramatic coastal
          scenery, Norway offers a visual feast for travelers seeking enchanting
          vistas and a serene connection with nature.
        </p>
        <span className="block mt-6 text-lg md:text-xl font-medium text-yellow-400 cursor-pointer hover:underline">
          Discover Places in Norway
        </span>
      </div>

      {/* Right Card */}
      <div className="absolute top-1/4 right-4 md:right-1/4 transform translate-x-1/4">
        <div className="shadow-lg rounded-lg overflow-hidden w-72 sm:w-80 p-6 relative text-center">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-80"
            style={{ backgroundImage: 'url(https://via.placeholder.com/400)' }}
          ></div>
          <div className="relative z-10">
            <p className="text-sm text-gray-200 uppercase">From</p>
            <h1 className="text-3xl md:text-4xl font-bold text-yellow-400">
              $150
            </h1>
            <p className="text-lg md:text-xl text-white font-medium mt-2">
              Fly to Norway
            </p>

            <div className="flex justify-center items-center mt-4">
              <div className="flex -space-x-2">
                <img
                  src="https://via.placeholder.com/40"
                  alt="Traveler"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white"
                  loading="lazy"
                />
                <img
                  src="https://via.placeholder.com/40"
                  alt="Traveler"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white"
                  loading="lazy"
                />
                <img
                  src="https://via.placeholder.com/40"
                  alt="Traveler"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white"
                  loading="lazy"
                />
              </div>
              <p className="text-white text-sm ml-3">200+ Travelers</p>
            </div>
          </div>

          <div className="absolute inset-0  bg-opacity-50 z-0"></div>
        </div>
      </div>
    </main>
  );
};

export default Main6;
