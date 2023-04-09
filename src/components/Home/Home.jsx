import React from 'react';
import { useLoaderData } from 'react-router-dom';
import JobCategory from '../JobCategory/JobCategory';

const Home = () => {
    const jobCategories = useLoaderData();
    console.log(jobCategories);
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
            {/* Job category section */}
            <div className='my-12'>
                <h1 className='text-center font-bold text-5xl'>Job Category List</h1>
                <p className='text-center my-6'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='grid md:grid-cols-4 gap-5'>
                    {
                        jobCategories.map((category,index)=><JobCategory
                            key={index}
                            category={category}
                        ></JobCategory>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;