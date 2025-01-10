import React from 'react';

const Main2 = () => {
  return (
    <div className="grid grid-cols-12 bg-green-950 p-4 min-h-screen items-center">
      {/* Left Section - Image with Text */}
      <div className="col-span-12 sm:col-span-6 relative flex flex-col ">
        {/* Image */}
        <img
          src="../../public/photos/2nd.jpg"
          alt="Destination Image"
          className="w-full max-w-xs h-64 object-cover rounded-lg"
        />

        {/* Text positioned at the end of the image */}
        <div className="absolute text-center bottom-4 left-44 transform -translate-x-1">
          <i>
            <h1 className="text-yellow-500 text-4xl sm:text-6xl font-bold">
              TH<span className="text-white">E</span> ART OF <br />
              TAIL<span className="text-white">O</span>RED TH<span className="text-white">A</span>VEL
            </h1>
          </i>
        </div>
      </div>

      {/* Right Section - Two Overlapping Images */}
      <div className="col-span-12 sm:col-span-6 flex justify-center relative">
  <div className="relative w-44 h-44 sm:w-60 sm:h-60">
    {/* Top Image */}
    <img
      src="../../public/photos/2nd.jpg"
      alt="Destination Image"
      className="w-full h-full object-cover rounded-lg z-10 transform rotate-6"
    />

    {/* Bottom Image */}
    <img
      src="../../public/photos/2nd.jpg"
      alt="Destination Image"
      className="w-full h-full object-cover rounded-lg absolute top-6 right-6 z-0 transform -rotate-6"
    />
  </div>
</div>

    </div>
  );
};

export default Main2;
