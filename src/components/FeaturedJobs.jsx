import React from 'react';

const FeaturedJobs = ({ singleJob }) => {
    const { id, company_logo, job_title, company_name, job_location, job_type, location, salary } = singleJob;
    // console.log(id,company_logo,job_title,company_name,job_location,job_type,location,salary);
    return (
        <div className='border rounded md:h-[350px] md:w-[648] p-8 m-5 md:m-0'>
            <img className='mt-5' src={company_logo} alt="" />
            <h3 className='font-bold mt-8'>{job_title}</h3>
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
            <button className='my-btn mt-5'>View Details</button>
        </div>
    );
};

export default FeaturedJobs;