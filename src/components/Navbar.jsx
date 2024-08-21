import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold">
                    {/* Logo or Brand Name */}
                    My Booklet
                </div>
                <div>
                    {/* Navigation Links */}
                    <a href="#introduction" className="text-white mx-2 hover:underline">Introduction</a>
                    <a href="#chapter1" className="text-white mx-2 hover:underline">Chapter 1</a>
                    <a href="#chapter2" className="text-white mx-2 hover:underline">Chapter 2</a>
                    {/* Add more links as needed */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
