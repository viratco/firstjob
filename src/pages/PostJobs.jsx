import React from 'react';

const PostJobs = () => {
    return (
        <div>
            <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
                <h1 className="flex flex-col items-center justify-center gradient-title font-extrabold text-4xl sm:text-6xl lg:text-8xl py-4" style={{ letterSpacing: '0.05em' }}>
                    <span>Post a Job</span>
                </h1>
                <form className="flex flex-col items-center gap-6 w-full">
                    <div className="w-4/5">
                        <label htmlFor="jobTitle" className="block text-xl font-semibold mb-2">Job Title:</label>
                        <textarea
                            id="jobTitle"
                            className="w-full p-4 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-400"
                            rows="1"
                            placeholder="Enter the job title here..."
                        ></textarea>
                    </div>
                    <div className="w-4/5">
                        <label htmlFor="jobDescription" className="block text-xl font-semibold mb-2">Job Description:</label>
                        <textarea
                            id="jobDescription"
                            className="w-full p-4 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-400"
                            rows="3"
                            placeholder="Enter the job description here..."
                        ></textarea>
                    </div>
                    <div className="w-4/5 flex gap-6">
                        <div className="w-1/2">
                            <label htmlFor="jobLocation" className="block text-xl font-semibold mb-2">Job Location:</label>
                            <input
                                type="text"
                                id="jobLocation"
                                className="w-full p-4 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-400"
                                placeholder="Enter the job location..."
                            />
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="companyName" className="block text-xl font-semibold mb-2">Company:</label>
                            <input
                                type="text"
                                id="companyName"
                                className="w-full p-4 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-400"
                                placeholder="Enter the company name..."
                            />
                        </div>
                    </div>
                </form>
            </main>
        </div>
    );
}

export default PostJobs;
