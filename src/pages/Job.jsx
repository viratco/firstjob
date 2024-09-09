import React, { useState } from 'react';

const Job = () => {
    const [isLocationOpen, setIsLocationOpen] = useState(false);
    const [isCompanyOpen, setIsCompanyOpen] = useState(false);

    const toggleLocationDropdown = () => {
        setIsLocationOpen(!isLocationOpen);
    };

    const toggleCompanyDropdown = () => {
        setIsCompanyOpen(!isCompanyOpen);
    };

    const clearFilters = () => {
        // Implement filter clearing logic here
    };

    return (
        <div className="min-h-screen bg-transparent text-white">
            {/* Title Section */}
            <div className="flex flex-col items-center justify-center mt-10">
                <h2 className="gradient-title font-extrabold text-5xl sm:text-7xl lg:text-8xl text-center">
                    Latest Job
                </h2>
                <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-gray-400 text-center max-w-3xl">
                    Discover the latest job opportunities that match your skills and interests. Search and apply now to take the next step in your career.
                </p>
            </div>

            {/* Filters Section */}
            <section id="filters" className="mt-10 px-4">
                <div className="flex mb-4">
                    <textarea
                        className="flex-grow px-3 py-3 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                        rows="1"
                        placeholder="Enter keywords or job titles..."
                    ></textarea>
                    <button
                        className="ml-2 bg-blue-500 text-white px-4 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Search
                    </button>
                </div>

                {/* Filter Controls */}
                <div className="flex space-x-4 mb-4">
                    {/* Location Dropdown */}
                    <div className="relative flex-grow">
                        <button
                            onClick={toggleLocationDropdown}
                            className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-left"
                        >
                            Filter by Location
                        </button>
                        {isLocationOpen && (
                            <div className="absolute right-0 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                                <ul className="py-1">
                                    <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">New York</a></li>
                                    <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">San Francisco</a></li>
                                    <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Chicago</a></li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Company Dropdown */}
                    <div className="relative flex-grow">
                        <button
                            onClick={toggleCompanyDropdown}
                            className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-left"
                        >
                            Filter by Company
                        </button>
                        {isCompanyOpen && (
                            <div className="absolute right-0 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                                <ul className="py-1">
                                    <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Company A</a></li>
                                    <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Company B</a></li>
                                    <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Company C</a></li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Clear Filters Button */}
                    <button
                        onClick={clearFilters}
                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                        Clear Filters
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Job;
