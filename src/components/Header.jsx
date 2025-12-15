import React from 'react';

const Header = () => {
    return (
        <header className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Shathurya Paramanathan</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#about" className="hover:underline">About</a></li>
                        <li><a href="#projects" className="hover:underline">Projects</a></li>
                        <li><a href="#contact" className="hover:underline">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;