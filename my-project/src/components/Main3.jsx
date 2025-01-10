import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faRocket, faBrain } from '@fortawesome/free-solid-svg-icons';

const Main3 = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 p-6 bg-green-950">
      {/* Section 1 */}
      <div className="flex flex-col  text-center">
        <FontAwesomeIcon icon={faPlane} className="text-blue-500 text-6xl mb-4" />
        <div className=''> 
            <h1 className="text-white text-lg font-bold mb-2">OUR airline flies <br /> greener</h1>
        <p className="text-sm text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet voluptatum labore aperiam aliquam vitae illum?
        </p></div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col items-center text-center">
        <FontAwesomeIcon icon={faRocket} className="text-red-500 text-6xl mb-4" />
        <h1 className="text-lg font-bold text-white mb-2">Your ideal <br /> destination partner</h1>
        <p className="text-sm text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet voluptatum labore aperiam aliquam vitae illum?
        </p>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col items-center text-center">
        <FontAwesomeIcon icon={faBrain} className="text-purple-500 text-6xl mb-4" />
        <h1 className="text-lg font-bold text-white  mb-2">Using AI for better experience</h1>
        <p className="text-sm text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet voluptatum labore aperiam aliquam vitae illum?
        </p>
      </div>
    </div>
  );
};

export default Main3;
