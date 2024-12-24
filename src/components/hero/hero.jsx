import React, { useState } from 'react';
import Imag1 from '../../assets/c3.jpg';
import Search from '../subComponents/search';
import SearchResultList from '../subComponents/searchResultList';
import Card from "../cards/card.jsx";


const Hero = () => {
  const [result, setResult] = useState([]);

  return (
    <section className="hero-section bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
        {/* Text Section */}
        <div className="text-section md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">
            Start Becoming Your Best Self
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Learn math the fun and easy way! Explore interactive tutorials, practice problems, and resources tailored just for you.
          </p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition duration-200">
            Get Started
          </button>

          {/* Search and Search Results */}
          <Search setResult={setResult} />

          {/* Uncomment when API is ready */}
          {/* <SearchResultList result={result} /> */}
          
        </div>

        {/* Image Section */}
        <div className="img-section md:w-1/2 relative mt-8 md:mt-0">
          <div className="absolute inset-0 bg-orange-500 opacity-20 rounded-lg blur-sm"></div>
          <img
            src={Imag1}
            alt="Hero Section"
            className="relative rounded-lg shadow-xl object-cover w-full h-200"
          />
        </div>
      </div>

      {/* Cards Section */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Master Math with Our Expertly Designed Lessons
        </h2>

        <div>
        <Card />
        </div>
      </div>
    </section>
  );
};

export default Hero;
