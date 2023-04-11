import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { JobContext } from '../../App';
import { CalendarDaysIcon, CurrencyDollarIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { getAppliedJob, storeApplyJob } from '../../utilities/fakeDB';
import { toast } from 'react-hot-toast';

const JobDetails = () => {
    const { jobId } = useParams();
    const jobs = useContext(JobContext);
    const job = jobs.find(singleJob => singleJob.id == jobId);
    const { jobDescription, jobResponsibility, jobTitle, location, salary, id, experiences, educationalRequirements, contactInformation } = job;
    const handleAppliedJob = id => {
        const appliedJob = getAppliedJob();
        const exists = appliedJob.find(existingJobId => existingJobId === id);
        if(exists){
            toast.error("it's already added");
        }else{
            storeApplyJob(id);
            toast.success("Successfully added to applied jobs");
        }
       
    }
    return (
        <div>
            <div className='mt-6 mb-24'>
                <img className='object-cover w-64' src="/assets/All Images/Vector.png" alt="" />
                <div className='text-center'>
                    <h1 className='text-3xl font-bold -mt-32 text-Center'>Job Details</h1>
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-6 my-container'>
               
                    <div className='md:w-2/3 w-full text-left text-lg'>
                        <p>
                            <strong className='font-bold text-lg'>Job Description: </strong>
                            {jobDescription}
                        </p>
                        <p className='py-2'>
                            <strong className='font-bold text-lg'>Job Responsibility: </strong>
                            {jobResponsibility}
                        </p>
                        <h1 className='font-bold text-lg '>Educational Requirement: </h1>
                        <p className='py-2'>{educationalRequirements}</p>
                        <h1 className='font-bold text-lg '>Experiences: </h1>
                        <p className='py-2'>{experiences}</p>
                    </div>
                    <div className='w-full md:w-1/3 text-lg bg-slate-100 p-5 shadow-md rounded-md'>
                        <div>
                            <p className='font-bold'>Job Details</p>
                            <hr className='my-5  border-1 border-gray-400' />

                            <div className='flex items-center gap-2  pb-2'>
                                <CurrencyDollarIcon className="h-6 w-6 text-gray-500" />
                                <div>
                                    <span className='font-medium '>Salary:</span> {salary}
                                </div>
                            </div>
                            <div className='flex items-center gap-2'>
                                <CalendarDaysIcon className="h-6 w-6 text-gray-500" />
                                <div>
                                    <span className='font-medium '> Job Title:</span> {jobTitle}
                                </div>
                            </div>
                        </div>
                        <div className='py-5'>
                            <p className='font-bold'>Contact Information</p>
                            <hr className='my-5  border-1 border-gray-400' />
                            <p className='flex items-center gap-2'>
                                <PhoneIcon className='w-5 h-5 '></PhoneIcon>
                                <span>Phone : {contactInformation.phone}</span>
                            </p>
                            <p className='flex items-center gap-2 py-2'>
                                <EnvelopeIcon className='w-5 h-5 '></EnvelopeIcon>
                                <span>Email : {contactInformation.email}</span>
                            </p>
                            <p className='flex items-center gap-2'>
                                <MapPinIcon className='w-5 h-5 '></MapPinIcon>
                                <span>Address : {location}</span>
                            </p>
                        </div>
                        <button onClick={() => handleAppliedJob(id)} className='btn-primary w-full'>Apply</button>
                    </div>
            </div>

        </div>
    );
};

export default JobDetails;