import React, { useContext, useState } from 'react';
import { getAppliedJob } from '../../utilities/fakeDB';
import { JobContext } from '../../App';
import AppliedJobCard from '../AppliedJobCard/AppliedJobCard';

const AppliedJob = () => {
    const getStoredAppliedJob = getAppliedJob();
    const jobs = useContext(JobContext);
    let storedAppliedJob = [];
    for (const id of getStoredAppliedJob) {
        const foundAppliedJob = jobs.find(job => job.id === id);
        storedAppliedJob.push(foundAppliedJob);
    }
    const [appliedJob, setAppliedJob] = useState(storedAppliedJob);

    const viewOnsiteJobs = () => {
        const onsiteJobs = storedAppliedJob.filter(job => job.remoteOrOnsite == 'Onsite');
        setAppliedJob(onsiteJobs);
    }
    const viewRemoteJobs = () => {
        const remoteJobs = storedAppliedJob.filter(job => job.remoteOrOnsite == 'Remote');
        setAppliedJob(remoteJobs);
    }
    return (
        <div>
            <div className='mt-6 mb-24'>
                <img className='object-cover w-64' src="/assets/All Images/Vector.png" alt="" />
                <div className='text-center'>
                    <h1 className='text-3xl font-bold -mt-32 text-Center'>Applied Job</h1>
                </div>
            </div>
            <div className='md:mx-32 mx-6 px-6'>
                {
                    appliedJob.length>0
                    ?<div className='md:text-right text-center my-2'>
                            <button onClick={viewOnsiteJobs} className='bg-blue-600 px-6 py-2 my-2 mr-1 text-white rounded-md text-sm font-medium hover:bg-blue-800'>Only Onsite</button>
                            <button onClick={viewRemoteJobs} className='bg-orange-600 px-6 py-2 text-white rounded-md text-sm font-medium hover:bg-orange-800'>Only Remote</button>
                     </div>
                    : <div className='text-center text-lg font-medium'>You have not applied for any job!</div>
                   
                }
                {
                    appliedJob.map(job => <AppliedJobCard
                        key={job.id}
                        job={job}
                    ></AppliedJobCard>)
                }
            </div>
        </div>
    );
};

export default AppliedJob;