import React from 'react';


const Main2 = () => {
  return (
    <div className="grid grid-cols-12 bg-green-950 p-4 min-h-screen items-center">
      {/* Left Section - Image with Text */}
      <div className="col-span-12 sm:col-span-6 relative flex flex-col ">
        {/* Image */}
        <img
          src="../../public/photos/3rd.jpg"
          alt="Destination Image"
          className="w-full max-w-xs h-72 object-cover rounded-lg"
        />

        {/* Text positionede end of the image */}
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
  <div className="relative w-52 h-52 sm:w-52 sm:h-64">
    {/* Top Image */}
    <img
      src="../../public/photos/2nd.jpg"
      alt="Top Image"
      className="w-full h-full object-cover rounded-lg z-10 transform rotate-12 shadow-lg"
    />

    {/* Bottom Image */}
    <img
      src="../../public/photos/4th.jpg"
      alt="Bottom Image"
      className="w-full h-full object-cover rounded-lg absolute top-6 left-16 z-0 transform -rotate-45 shadow-lg"
    />
  </div>
</div>


    </div>
  );
};

export default Main2;
