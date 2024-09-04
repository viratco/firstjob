import React from 'react';

const Login = () => {
    return (
        <div className="min-h-screen flex justify-center items-center bg-custom-background">
            <main className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-10 sm:py-20">
                {/* Left Column: Text Areas */}
                <div className="flex flex-col justify-center items-center">
                    <h1 className='gradient-title font-extrabold text-4xl sm:text-6xl lg:text-8xl py-4'>
                        Login
                    </h1>
                    <form className='flex flex-col gap-6 w-full max-w-md'>
                        <div className="flex flex-col gap-2">
                            <label className='text-gray-200 text-sm sm:text-lg font-medium'>
                                Username
                            </label>
                            <textarea 
                                className='w-full px-3 py-1 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400'
                                placeholder='Enter your username'
                                rows="1"
                            ></textarea>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className='text-gray-200 text-sm sm:text-lg font-medium'>
                                Password
                            </label>
                            <textarea 
                                className='w-full px-3 py-1 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400'
                                placeholder='Enter your password'
                                type='password'
                                rows="1"
                            ></textarea>
                        </div>
                        <button 
                            type='submit'
                            className='w-full py-3 mt-6 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        >
                            Login
                        </button>
                    </form>
                </div>

                {/* Right Column: Custom Banner */}
                <div className="flex justify-center items-center">
                    {/* Placeholder for custom banner */}
                    <div className="w-full h-64 md:h-full bg-gray-800 rounded-md">
                        <p className="text-white text-center p-8">Your Custom Banner Here</p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Login;
