import React from 'react';

function Contects() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 py-24">
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative hover:shadow-xl transition-shadow duration-300">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
            ></iframe>
            <div className="bg-gradient-to-br from-white to-blue-50 relative flex flex-wrap py-6 rounded-lg shadow-lg border border-blue-200">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 tracking-widest text-xs">ADDRESS</h2>
                <p className="mt-1 text-gray-600">Your Location, City, Country</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 tracking-widest text-xs">EMAIL</h2>
                <a className="text-blue-600 leading-relaxed hover:text-blue-800 transition-colors duration-200">ikram@example.com</a>
                <h2 className="title-font font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 tracking-widest text-xs mt-4">PHONE</h2>
                <p className="leading-relaxed text-gray-600">+1 (123) 456-7890</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-gradient-to-br from-white to-blue-50 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 rounded-lg shadow-lg border border-blue-200 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 text-lg mb-1 font-medium title-font px-6 pt-6">Get In Touch</h2>
            <p className="leading-relaxed mb-5 text-gray-600 px-6">I'd love to hear from you. Send me a message and let's discuss your next project!</p>
            <div className="relative mb-4 px-6">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4 px-6">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4 px-6">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <div className="px-6 pb-6">
              <button className="text-white bg-gradient-to-r from-blue-600 to-blue-800 border-0 py-2 px-6 focus:outline-none hover:from-blue-700 hover:to-blue-900 rounded-lg text-lg transition-all duration-200 shadow-md hover:shadow-lg">
                Send Message
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-3 px-6 pb-6">Your message will be responded to within 24 hours.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contects;
