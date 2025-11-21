import React from 'react';
import { motion } from 'framer-motion';

const Info = () => {
  return (
    <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-xl shadow-lg max-w-4xl mx-auto my-12 border border-blue-100">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 mb-6">
          Ikram
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 mb-6">
          <span className="text-xl font-semibold text-blue-700 bg-blue-100 px-4 py-2 rounded-full">
            Web Developer
          </span>
          <span className="text-xl font-semibold text-blue-700 bg-blue-100 px-4 py-2 rounded-full">
            MERN Stack Developer
          </span>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Passionate about creating innovative web solutions that combine beautiful design with powerful functionality.
          Specialized in the MERN stack to build scalable, user-friendly applications that make a difference.
        </p>
        <div className="mt-8 flex justify-center space-x-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">5+</div>
            <div className="text-sm text-gray-500">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">50+</div>
            <div className="text-sm text-gray-500">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">100%</div>
            <div className="text-sm text-gray-500">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
