import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <section className="text-gray-800 bg-white py-24">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-black mb-4">
            Skills & Expertise
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-600">
            A showcase of the technologies and tools I excel in.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-gray-800 inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-white border border-gray-300 text-black mb-4 flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <div className="flex-grow pl-6">
              <h2 className="text-black text-lg title-font font-medium mb-2">React</h2>
              <p className="leading-relaxed text-base text-gray-600">Building dynamic user interfaces with modern JavaScript.</p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-white border border-gray-300 text-black mb-4 flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
              </svg>
            </div>
            <div className="flex-grow pl-6">
              <h2 className="text-black text-lg title-font font-medium mb-2">Node.js</h2>
              <p className="leading-relaxed text-base text-gray-600">Server-side development with scalable backend solutions.</p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-white border border-gray-300 text-black mb-4 flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div className="flex-grow pl-6">
              <h2 className="text-black text-lg title-font font-medium mb-2">MongoDB</h2>
              <p className="leading-relaxed text-base text-gray-600">NoSQL database management for efficient data storage.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
