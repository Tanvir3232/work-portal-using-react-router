import { jobAndAppliedJobsData } from "./JobsAndAppliedJobs"

export const SingleJobDetails = (jobs,id )=>{
    const job =  jobs.find(job=>job.id===id);
    return job;
}