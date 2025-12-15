import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Shathurya Paramanathan. All rights reserved.</p>
                <div className="flex justify-center space-x-4">
                    <a href="https://github.com/shathurya" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/shathurya" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="mailto:shathurya@example.com">Email</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;