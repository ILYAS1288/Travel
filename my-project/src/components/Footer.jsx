import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-10 px-6">
      <div className="flex flex-col md:flex-row items-start justify-between gap-78 md:gap-12">
        {/* Left Section */}
        <div className="flex flex-col items-start w-full md:w-1/3">
          <h1 className="text-4xl font-bold">ballon<br />TRAVElS</h1>
          <p className="mt-4 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur <br />
             adipisicing elit. Fugiat odio saepe  <br />
             odit sequi veniam tenetur amet est <br />
              sed quaerat? Aspernatur corporis <br />
               inventore provident voluptatum <br />
                dignissimos est ratione illum a delectus?
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-wrap gap-4 md:w-2/3">
          {/* Company Links */}
          <div className="flex flex-col w-full md:w-1/4">
            <h2 className="text-xl font-semibold">Company</h2>
            <ul className="space-y-2 text-sm">
              <li>About us</li>
              <li>Careers</li>
              <li>Privacy Policy</li>
              <li>Terms & Condition</li>
            </ul>
          </div>
          
          {/* Destinations Links */}
          <div className="flex flex-col w-full md:w-1/4">
            <h2 className="text-xl font-semibold">Destinations</h2>
            <ul className="space-y-2 text-sm">
              <li>United States</li>
              <li>Asia</li>
              <li>Europe</li>
              <li>Canada</li>
              <li>South America</li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="flex flex-col w-full md:w-1/4">
            <h2 className="text-xl font-semibold">Support</h2>
            <ul className="space-y-2 text-sm">
              <li>Before you Book</li>
              <li>At the airport</li>
              <li>In the flight</li>
              <li>Lost property</li>
            </ul>
          </div>
             {/* Social Media Section */}
      <div className="mt-8 text-center">
        <h2 className="text-xl mb-4 font-semibold">Let's Get Social</h2>
        <div className="flex gap-6">
          {/* Social Media Icons */}
          <a href="#" className="text-white hover:text-blue-400">
            <i className="fab fa-facebook-f text-2xl"></i>
          </a>
          <a href="#" className="text-white hover:text-blue-400">
            <i className="fab fa-twitter text-2xl"></i>
          </a>
          <a href="#" className="text-white hover:text-red-400">
            <i className="fab fa-youtube text-2xl"></i>
          </a>
          <a href="#" className="text-white hover:text-pink-400">
            <i className="fab fa-instagram text-2xl"></i>
          </a>
        </div>
      </div>
        </div>
      
      </div>

     
    </div>
  );
}

export default Footer;
