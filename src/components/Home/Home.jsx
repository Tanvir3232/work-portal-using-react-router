import React from 'react';

const Home = () => {
    return (
        <div>
            {/* Banner section */}
            <div className='my-5 flex items-center justify-between'>
                <div className='w-1/2 text-left'>
                    <h1 className='text-7xl font-semibold'>One Step Closer To Your <span className='text-purple-500'>Dream Job</span></h1>
                    <p className='my-5'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='btn-primary my-5'>Get Started</button>
                </div>
                <div>
                    <img className='object-cover w-full h-full' src="/assets/All Images/banner.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;