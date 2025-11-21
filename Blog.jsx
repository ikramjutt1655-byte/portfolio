import React, { useEffect, useRef } from 'react';

function Blog() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const scrollSpeed = 1; // Normal speed
      const scroll = () => {
        scrollContainer.scrollLeft += scrollSpeed;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0;
        }
      };
      const interval = setInterval(scroll, 50); // Adjust timing for smoothness
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 py-24">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 mb-4">
            My Projects
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-600">
            A showcase of my recent work and development projects
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 inline-flex"></div>
          </div>
        </div>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Project 1 */}
          <div className="flex-shrink-0 w-80">
            <div className="h-full bg-gradient-to-br from-white to-blue-50 border border-blue-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src="/img/605592.png"
                alt="E-Commerce Platform"
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 mb-1 uppercase">
                  MERN Stack
                </h2>
                <h1 className="title-font text-lg font-medium text-black mb-3">
                  E-Commerce Platform
                </h1>
                <p className="leading-relaxed mb-3 text-gray-600">
                  A full-featured e-commerce application built with React, Node.js, Express, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.
                </p>
                <div className="flex items-center flex-wrap">
                  <a className="text-blue-600 inline-flex items-center md:mb-2 lg:mb-0 hover:text-blue-800 transition-colors duration-200">
                    View Project
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </a>
                  <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-blue-200">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    2.5K
                  </span>
                  <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                    12
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="flex-shrink-0 w-80">
            <div className="h-full bg-gradient-to-br from-white to-blue-50 border border-blue-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src="/img/681016.jpg"
                alt="Task Management App"
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 mb-1 uppercase">
                  React & Firebase
                </h2>
                <h1 className="title-font text-lg font-medium text-black mb-3">
                  Task Management App
                </h1>
                <p className="leading-relaxed mb-3 text-gray-600">
                  A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with React and Firebase for seamless user experience.
                </p>
                <div className="flex items-center flex-wrap">
                  <a className="text-blue-600 inline-flex items-center md:mb-2 lg:mb-0 hover:text-blue-800 transition-colors duration-200">
                    View Project
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </a>
                  <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-blue-200">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    1.8K
                  </span>
                  <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                    8
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="flex-shrink-0 w-80">
            <div className="h-full bg-gradient-to-br from-white to-blue-50 border border-blue-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src="/img/1335179.png"
                alt="Weather Dashboard"
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 mb-1 uppercase">
                  JavaScript & API
                </h2>
                <h1 className="title-font text-lg font-medium text-black mb-3">
                  Weather Dashboard
                </h1>
                <p className="leading-relaxed mb-3 text-gray-600">
                  An interactive weather application that provides current conditions and forecasts for multiple cities. Features include location-based weather, search functionality, and responsive design.
                </p>
                <div className="flex items-center flex-wrap">
                  <a className="text-blue-600 inline-flex items-center md:mb-2 lg:mb-0 hover:text-blue-800 transition-colors duration-200">
                    View Project
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </a>
                  <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-blue-200">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    3.2K
                  </span>
                  <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                    15
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Duplicate projects for infinite scroll effect */}
          <div className="flex-shrink-0 w-80">
            <div className="h-full bg-gradient-to-br from-white to-blue-50 border border-blue-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src="/img/605592.png"
                alt="E-Commerce Platform"
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 mb-1 uppercase">
                  MERN Stack
                </h2>
                <h1 className="title-font text-lg font-medium text-black mb-3">
                  E-Commerce Platform
                </h1>
                <p className="leading-relaxed mb-3 text-gray-600">
                  A full-featured e-commerce application built with React, Node.js, Express, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.
                </p>
                <div className="flex items-center flex-wrap">
                  <a className="text-blue-600 inline-flex items-center md:mb-2 lg:mb-0 hover:text-blue-800 transition-colors duration-200">
                    View Project
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </a>
                  <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-blue-200">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    2.5K
                  </span>
                  <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                    12
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 w-80">
            <div className="h-full bg-gradient-to-br from-white to-blue-50 border border-blue-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src="/img/681016.jpg"
                alt="Task Management App"
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 mb-1 uppercase">
                  React & Firebase
                </h2>
                <h1 className="title-font text-lg font-medium text-black mb-3">
                  Task Management App
                </h1>
                <p className="leading-relaxed mb-3 text-gray-600">
                  A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with React and Firebase for seamless user experience.
                </p>
                <div className="flex items-center flex-wrap">
                  <a className="text-blue-600 inline-flex items-center md:mb-2 lg:mb-0 hover:text-blue-800 transition-colors duration-200">
                    View Project
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </a>
                  <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-blue-200">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    1.8K
                  </span>
                  <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                    8
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 w-80">
            <div className="h-full bg-gradient-to-br from-white to-blue-50 border border-blue-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src="/img/1335179.png"
                alt="Weather Dashboard"
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 mb-1 uppercase">
                  JavaScript & API
                </h2>
                <h1 className="title-font text-lg font-medium text-black mb-3">
                  Weather Dashboard
                </h1>
                <p className="leading-relaxed mb-3 text-gray-600">
                  An interactive weather application that provides current conditions and forecasts for multiple cities. Features include location-based weather, search functionality, and responsive design.
                </p>
                <div className="flex items-center flex-wrap">
                  <a className="text-blue-600 inline-flex items-center md:mb-2 lg:mb-0 hover:text-blue-800 transition-colors duration-200">
                    View Project
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </a>
                  <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-blue-200">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    3.2K
                  </span>
                  <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                    15
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
