import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="mb-2">
          &copy; {new Date().getFullYear()} Shathurya Paramanathan. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/ShathuryaParamanathan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/shathurya-paramanathan-5a3048243"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            LinkedIn
          </a>
          <a
            href="mailto:shathuparam27@gmail.com"
            className="hover:text-blue-400"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
