import React from 'react';

const Main2 = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg">
      {/* Left Section - Full Image Card with Centered Text */}
      <div className="flex-1 flex flex-col justify-center items-center text-center rounded-lg shadow-lg overflow-hidden">
  {/* Image as the card content */}
  <img
    src="../../public/photos/2nd.jpg"
    alt="Destination Image"
    className="w-full h-64 object-cover rounded-t-lg"
  />

  {/* Content Section */}
  <div className="bg-black bg-opacity-50 p-8 rounded-b-lg w-full">
    <h1 className="text-3xl lg:text-5xl font-bold text-yellow-400 mb-4">
      Explore Your Dream Destination
    </h1>
    <p className="text-lg text-gray-300">
      Discover amazing places, experience unforgettable moments, and start your journey today!
    </p>
  </div>
</div>

      {/* Right Section - Two Vertically Aligned Images */}
      <div className="flex-1 grid grid-rows-2 gap-4 p-4">
        <div
          className="h-48 bg-cover bg-center rounded-lg"
          style={{
            backgroundImage: "url('../../public/photos/2nd.jpg')",
          }}
        ></div>
        <div
          className="h-48 bg-cover bg-center rounded-lg"
          style={{
            backgroundImage: "url('../../public/photos/2nd.jpg')",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Main2;
