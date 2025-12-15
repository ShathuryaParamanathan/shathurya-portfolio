import React from 'react';

// Place your image in public/profile.jpg or update the src below
const profileImg = '/profile.jpg';

const Header = () => {
    return (
        <header className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <img
                        src={profileImg}
                        alt="Shathurya Paramanathan"
                        className="w-32 h-32 rounded-full border-2 border-white shadow-md object-cover"
                    />
                    <div>
                        <h1 className="text-3xl font-bold leading-tight">Shathurya Paramanathan</h1>
                        <p className="text-sm font-medium text-blue-100">IT Undergraduate, University of Moratuwa</p>
                    </div>
                </div>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#about" className="hover:underline text-white">About</a></li>
                        <li><a href="#projects" className="hover:underline text-white">Projects</a></li>
                        <li><a href="#contact" className="hover:underline text-white">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;