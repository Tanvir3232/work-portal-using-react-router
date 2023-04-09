import React from 'react';

const JobCategory = ({category}) => {
    const {name,totalJobs,icon} =category;
    return (
        <div className='text-left shadow-xl p-8 bg-slate-100 rounded-lg'>
            <img className='w-20' src={icon} alt="" />
            <p className='font-bold mt-5 mb-2 text-xl'>{name}</p>
            <p className='text-slate-600'>{totalJobs} available jobs</p>
        </div>
    );
};

export default JobCategory;