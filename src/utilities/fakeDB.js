const storeApplyJob = id =>{
    let appliedJob = [];
    const previousAppliedJob = JSON.parse(localStorage.getItem('applied-job'));
    if (previousAppliedJob) {
        appliedJob = [...previousAppliedJob, id];
    } else {
      appliedJob.push(id);
    }
    localStorage.setItem('applied-job', JSON.stringify(appliedJob));
} 
const getAppliedJob = () =>{
    let appliedJob = [];
    const previousAppliedJob = localStorage.getItem('applied-job');
    if(previousAppliedJob){
        appliedJob = JSON.parse(previousAppliedJob);
    }
    return appliedJob;

}
export {storeApplyJob,getAppliedJob}