import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AppliedJob from './AppliedJob';

const AppliedJobs = () => {
    const appliedJobs = useLoaderData()
   
    return (
        <>
            <div className=' bg-[#D9D9D9] '>
                <h1 className='pt-16 pb-28 text-center text-xl font-bold'>Applied Jobs</h1>
            </div>
            <div className='my-container text-right mt-24 mb-8'>
                <button className='my-btn mr-3'>Remote</button>
                <button className='my-btn'>Onsite</button>
            </div>
            <div >
                {
                    appliedJobs.map(singleAppliedJob => <AppliedJob
                    key={singleAppliedJob.id}
                    singleAppliedJob={singleAppliedJob}
                    ></AppliedJob>)
                }
            </div>
        </>
    );
};

export default AppliedJobs;