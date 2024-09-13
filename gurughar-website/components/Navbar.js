"use client"
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white shadow-lg">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                
                {/* Logo and Title */}
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img src="/assets/logo.jpg" alt="Gurughar Logo" className="h-16 w-16 object-contain" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h5 className="text-xl font-bold whitespace-nowrap">
                            Newfoundland Sikh Society
                        </h5>
                        <p className="text-sm font-medium">Gurdwara Sahib</p>
                    </div>
                </div>

                {/* Hamburger Menu for Mobile */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Navigation Links (only visible on desktop) */}
                <div className="hidden md:flex space-x-6 text-lg font-semibold">
                    <Link href="/" className="text-gray-700 hover:text-blue-600 transition duration-200">
                        Home
                    </Link>
                    <Link href="/about" className="text-gray-700 hover:text-blue-600 transition duration-200">
                        About
                    </Link>
                    <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition duration-200">
                        Contact                    </Link>

                    <Link href="/donation" className="text-gray-700 hover:text-blue-600 transition duration-200">
                        Donate
                    </Link>
                    <Link href="/blogs" className="text-gray-700 hover:text-blue-600 transition duration-200">
                        Blog
                    </Link>
                </div>
            </div>

            {/* Dropdown menu for mobile */}
            {isOpen && (
                <div className="md:hidden flex flex-col items-center space-y-2 py-4">
                    <Link href="/" className="text-gray-700 hover:text-blue-600 transition duration-200">
                        Home
                    </Link>
                    <Link href="/about" className="text-gray-700 hover:text-blue-600 transition duration-200">
                        About
                    </Link>
                    <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition duration-200">
                        Contact
                    </Link>
                    <Link href="/donation" className="text-gray-700 hover:text-blue-600 transition duration-200">
                        Donate
                    </Link>
                    <Link href="/blogs" className="text-gray-700 hover:text-blue-600 transition duration-200">
                        Blog
                    </Link>


                </div>
            )}
        </nav>
    );
}

