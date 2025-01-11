import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThan, faGreaterThan } from '@fortawesome/free-solid-svg-icons';

const Main5 = () => {
  return (
    <div className="bg-green-950 p-8 ">
      {/* Header Section */}
      <div className="flex items-center ml-16 justify-between">
        {/* Left-Aligned Title */}
        <h1 className="text-yellow-500 text-4xl sm:text-6xl">
          DISC<span className="text-white">O</span>VER POPULA
          <span className="text-white">R</span> <br />
          DESTIN<span className="text-white">A</span>TIONS
        </h1>
        {/* Right-Aligned Icons */}
        <div className="text-yellow-500 text-3xl flex gap-2">
          <FontAwesomeIcon icon={faLessThan} />
          <FontAwesomeIcon icon={faGreaterThan} />
        </div>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-wrap gap-4 ml-16  mt-8">
        {['POPULAR', 'UNITED STATES', 'EUROPE', 'ASIA', 'AFRICA', 'SOUTH AMERICA', 'CANADA'].map((buttonText, index) => (
          <button
            key={index}
            className="border-2 border-yellow-500 text-yellow-500 bg-transparent px-4 py-2 rounded-lg hover:bg-yellow-500 hover:text-green-950 transition"
          >
            {buttonText}
          </button>
        ))}
      </div>

      {/* Images Section */}
      <div className="flex flex-wrap justify-start ml-16 gap-6 mt-8">
        {['1st.jpg', '4th.jpg', '2nd.jpg', '3rd.jpg'].map((imageName, index) => (
          <img
            key={index}
            src={`../../public/photos/${imageName}`}
            alt="Destination"
            className="w-64 h-64 sm:w-64 sm:h-64 object-cover rounded-lg shadow-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default Main5;
