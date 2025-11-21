import React from 'react';

const About = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 py-24">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 mb-4">
            About Me
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-600">
            Passionate web developer specializing in the MERN stack
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:space-x-8">
          <motion.div
            className="sm:w-1/2 mb-8 sm:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
                My Story
              </h2>
              <p className="leading-relaxed text-base text-gray-600 mb-4">
                Hello! I'm Ikram, a dedicated web developer with a passion for creating innovative and user-friendly web applications. My journey in web development began with a curiosity about how websites work, and it has evolved into a career focused on building robust, scalable solutions using modern technologies.
              </p>
              <p className="leading-relaxed text-base text-gray-600 mb-4">
                As a MERN stack developer, I specialize in MongoDB, Express.js, React, and Node.js. I enjoy the full-stack development process, from designing intuitive user interfaces to implementing efficient backend logic and managing databases. My approach combines technical expertise with a keen eye for design, ensuring that every project not only functions flawlessly but also provides an excellent user experience.
              </p>
              <p className="leading-relaxed text-base text-gray-600">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I'm always eager to take on new challenges and collaborate on exciting projects.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="sm:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300 mb-6">
              <h2 className="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Key Highlights
              </h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
                <li>Proficient in MERN stack development</li>
                <li>Experience with responsive web design</li>
                <li>Strong problem-solving and analytical skills</li>
                <li>Committed to writing clean, maintainable code</li>
                <li>Continuous learner of emerging web technologies</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
                Education & Interests
              </h2>
              <p className="leading-relaxed text-base text-gray-600 mb-4">
                I hold a degree in Computer Science and continuously expand my knowledge through online courses and industry certifications. My interests extend beyond coding to include UI/UX design principles, performance optimization, and the latest trends in web development.
              </p>
              <p className="leading-relaxed text-base text-gray-600">
                I'm particularly interested in how technology can solve real-world problems and improve user experiences. Whether it's building a dynamic e-commerce platform or a collaborative tool, I approach each project with enthusiasm and attention to detail.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
