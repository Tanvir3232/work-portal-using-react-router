import React, { useContext } from 'react';
import { getAppliedJob } from '../../utilities/fakeDB';
import { JobContext } from '../../App';
import AppliedJobCard from '../AppliedJobCard/AppliedJobCard';

const AppliedJob = () => {
    const storedAppliedJob = getAppliedJob();
    const jobs = useContext(JobContext);
    let appliedJob = [];
    for(const id of storedAppliedJob){
        const foundAppliedJob = jobs.find(job=>job.id === id);
        appliedJob.push(foundAppliedJob);
    }
   
    return (
        <div>
            <div className='mt-6 mb-24'>
                <img className='object-cover w-64' src="/assets/All Images/Vector.png" alt="" />
                <div className='text-center'>
                    <h1 className='text-3xl font-bold -mt-32 text-Center'>Applied Job</h1>
                </div>
            </div>
            <div className='my-container'>
                {
                    appliedJob.map(job=><AppliedJobCard
                      key={job.id}
                      job={job}
                    ></AppliedJobCard>)
                }
            </div>
        </div>
    );
};

export default AppliedJob;