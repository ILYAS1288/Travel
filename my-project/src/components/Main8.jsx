import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Main8 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    "How do I book a trip with your travel agency?",
    "What payment methods do you accept?",
    "Can I cancel or modify my booking?",
    "Do you offer group discounts?",
    "Are there guided tours available?",
  ];

  return (
    <div className="bg-green-950 min-h-screen p-6 flex flex-col ">
      <h1 className="text-yellow-500 text-center font-semibold text-4xl sm:text-6xl mb-8">
        FRE<span className="text-white">Q</span>UENTLY AS
        <span className="text-white">K</span>ED <br />
        QUESTI<span className="text-white">O</span>NS
      </h1>
      <div className="flex flex-wrap justify-between items-start ">
        {/* FAQ Section */}
        <div className="w-full max-w-lg">
          {faqs.map((question, index) => (
            <div
              key={index}
             className="p-4  mb-4 border-b-4 border-white shadow-md"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <p className="text-white text-lg font-medium">{question}</p>
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className={`text-yellow-500 text-lg transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              {activeIndex === index && (
                <span className="block mt-3 text-white text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Natus, optio.
                </span>
              )}
            </div>
          ))}
        </div>
        {/* Images Section */}
        <div className="relative flex flex-col p-16 items-center">
  <img
    src="../../public/photos/5th.png"
    alt="Destination"
    className="absolute w-52 h-64 object-cover rounded-3xl transform rotate-12"
    style={{ zIndex: 1 }}
    loading="lazy"
  />
  <img
    src="../../public/photos/6th.png"
    alt="Destination"
    className="w-52 h-64 object-cover rounded-3xl transform rotate-45"
    style={{ zIndex: 0 }}
    loading="lazy"
  />
</div>

      </div>
    </div>
  );
};

export default Main8;
