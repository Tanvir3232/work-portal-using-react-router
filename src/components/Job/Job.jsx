import React from 'react';
import { MapPinIcon,CurrencyDollarIcon } from '@heroicons/react/24/solid'

const Job = ({ job }) => {
    const { companyLogo, companyName, fullTimeOrPartTime, remoteOrOnsite, id, jobTitle, location, salary } = job;
    return (
        <div className='shadow-lg text-gray-600 text-lg bg-slate-50 text-left p-6 rounded-md'>
            <figure>
                <img className='w-2/3 h-48 object-cover' src={companyLogo} alt="" />
            </figure>
            <p className='text-2xl text-gray-700 mt-5 font-bold'>{jobTitle}</p>
            <p>{companyName}</p>
            <div className='flex gap-5 my-3'>
                <p className='px-3 py-1 rounded-md font-medium text-purple-500 border-2 border-gray-700'>{remoteOrOnsite}</p>
                <p className='px-3 py-1 rounded-md font-medium text-purple-500 border-2 border-gray-700'>{fullTimeOrPartTime}</p>
            </div>
            <div className='mb-5 flex gap-6'>
                <p className='flex items-center gap-2'><MapPinIcon className="h-7 w-5 text-gray-500" /> {location} </p>
                <p className='flex items-center gap-2'><CurrencyDollarIcon className="h-6 w-6 text-gray-500" /> Salary: {salary}</p>
            </div>
            <button className='btn-primary'>View Details</button>
        </div>
    );
};

export default Job;