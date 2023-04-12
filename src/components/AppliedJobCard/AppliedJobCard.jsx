import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const AppliedJobCard = ({ job }) => {
    const { id, companyLogo, jobTitle, location, salary, fullTimeOrPartTime, remoteOrOnsite, companyName } = job;
    return (
        <div className='my-5 flex md:flex-row flex-col justify-between items-center p-5 shadow-lg rounded-md bg-slate-50 '>
            <div className='flex md:flex-row flex-col gap-4'>
                <div>
                    <img src={companyLogo} className='object-cover h-40 w-40' alt="" />
                </div>
                <div>
                    <h1 className='font-bold'>{jobTitle}</h1>
                    <p>{companyName}</p>
                    <div className='flex  gap-5 my-3'>
                        <p className='px-3 py-1 rounded-md font-medium text-purple-500 border-2 border-gray-700'>{remoteOrOnsite}</p>
                        <p className='px-3 py-1 rounded-md font-medium text-purple-500 border-2 border-gray-700'>{fullTimeOrPartTime}</p>
                    </div>
                    <div className='mb-5 flex md:flex-row flex-col gap-6'>
                        <p className='flex items-center gap-2'><MapPinIcon className="h-7 w-5 text-gray-500" /> {location} </p>
                        <p className='flex items-center gap-2'><CurrencyDollarIcon className="h-6 w-6 text-gray-500" /> Salary: {salary}</p>
                    </div>
                </div>
            </div>
            <Link  to={`/job/${id}`} ><button className='btn-primary'>View Details</button></Link>
        </div>
    );
};

export default AppliedJobCard;