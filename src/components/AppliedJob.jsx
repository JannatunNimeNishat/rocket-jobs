import React from 'react';
import { useNavigate } from 'react-router-dom';

const AppliedJob = ({ singleAppliedJob }) => {
    const { id, company_logo, job_title, company_name, job_location, job_type, location, salary } = singleAppliedJob
    const navigate = useNavigate();
    const handleViewDetails = (id)=>{
        navigate(`/jobDetails/${id}`);
    }
    return (
        <div className='my-container flex justify-between items-center border w-[1320px] h-[300px] rounded-lg m-5'>
            <div className='flex items-center'>
                <div className='h-[240px] w-[240px] bg-[#F4F4F4] m-5 flex justify-center items-center rounded-lg'>
                    <img className='h-[50px] w-[145px]' src={company_logo} alt="" />
                </div>
                <div>
                    <h3 className='text-xl font-bold'>{job_title}</h3>
                    <p>{company_name}</p>
                    <div className='flex gap-3 mt-3'>
                        <p className='px-3 py-2 border border-purple-600 text-purple-600 rounded-lg '>{job_location}</p>
                        <p className='px-3 py-2 border border-purple-600 text-purple-600  rounded-lg '>{job_type}</p>
                    </div>
                    <div className='md:flex gap-3 mt-3'>
                        <div className='flex'>
                            <img className='h-2/4 md:h-full' src="Location_Icon.png" alt="" />
                            <p>{location}</p>
                        </div>
                        <div className='flex'>
                            <img src="dFrame.png" alt="" />
                            <p>{salary}</p>
                        </div>

                    </div>
                </div>
            </div>
            <button onClick={()=> handleViewDetails(id)} className='my-btn mr-5'>View Details</button>
        </div>
    );
};

export default AppliedJob;