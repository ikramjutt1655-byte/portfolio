import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Blog from '../Blog';
import Contects from './objects/Contects';
import Footer from '../Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
        <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link to="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-white bg-opacity-20 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl font-bold">Ikram Portfolio</span>
            </Link>
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-blue-400 flex flex-wrap items-center text-base justify-center">
              <Link to="/" className="mr-5 hover:text-blue-200 transition-colors duration-200">Home</Link>
              <Link to="/about" className="mr-5 hover:text-blue-200 transition-colors duration-200">About</Link>
              <Link to="/projects" className="mr-5 hover:text-blue-200 transition-colors duration-200">Projects</Link>
              <Link to="/contact" className="mr-5 hover:text-blue-200 transition-colors duration-200">Contact</Link>
            </nav>
            <button
              className="inline-flex items-center bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded-lg text-base mt-4 md:mt-0 transition-all duration-200"
              onClick={() => {
                fetch('/cv/cv.pdf')
                  .then(res => res.blob())
                  .then(blob => {
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'cv.pdf';
                    a.click();
                    URL.revokeObjectURL(url);
                  })
                  .catch(err => console.error('Download failed:', err));
              }}
            >
              Download CV
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Blog />} />
            <Route path="/contact" element={<Contects />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App

