import React from 'react';

const Main4 = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center   bg-green-950">
      {/* Left Side: Image Container */}
      <div className="relative w-64 h-64  mx-auto pl-10  pt-6 lg:mx-0">
        {/* First Image */}
        <img
          src="../../public/photos/5th.png"
          alt="Destination Image"
          className="absolute  w-48 h-48 object-cover   rounded-lg transform rotate-12 shadow-lg -translate-x-3 -translate-y-3"
        />
        {/* Second Image */}
        <img
          src="../../public/photos/6th.png"
          alt="Destination Image"
          className="absolute w-48 h-48  object-cover rounded-lg transform rotate-45 shadow-lg translate-x-3 translate-y-3"
        />
      </div>

      {/* Right Side: Stats Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 text-center">
  {/* Stat 1 */}
  <div className="space-y-2">
    <h1 className="text-6xl font-bold text-white">15+</h1>
    <p className="text-lg text-yellow-500">Years of experience</p>
  </div>
  {/* Stat 2 */}
  <div className="space-y-2">
    <h1 className="text-6xl font-bold text-white">24M+</h1>
    <p className="text-lg text-yellow-500">Happy Travelers</p>
  </div>
  {/* Stat 3 */}
  <div className="space-y-2">
    <h1 className="text-6xl font-bold text-white">550+</h1>
    <p className="text-lg text-yellow-500">Unique Destinations</p>
  </div>
</div>

    </div>
  );
};

export default Main4;
