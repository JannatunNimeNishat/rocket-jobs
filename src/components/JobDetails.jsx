import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const singleJobDetail = useLoaderData();
    const { id, job_description, job_responsibility, educational_requirements, experiences, salary, job_title,phone,email,location } = singleJobDetail;

    return (
        <>
            <div className=' bg-[#D9D9D9] '>
                <h1 className='pt-16 pb-28 text-center text-xl font-bold'>Job Details</h1>
            </div>
            <div className='mt-36 mb-8 my-container grid grid-cols-4'>
                <div className='col-span-3'>
                    <p><span className='font-bold'>Job Description: </span>{job_description}</p>
                    <p className='mt-3'><span className='font-bold'>Job Responsibility: </span>{job_responsibility}</p>
                    <p className='font-bold mt-3'>educational Requirements:</p>
                    <p className='mt-3'>{educational_requirements}</p>
                    <p className='font-bold mt-3'>Experiences: </p>
                    <p className='mt-3'>{experiences}</p>

                </div>
                <div className='col-span-1'>
                    <div className='category-card p-3'>
                        <h3 className='font-bold mt-3 mb-3'>Job Details</h3>
                        <hr />
                        <div className='flex mt-3 gap-2'>
                           <img  src="../../public/dollar.png" alt="" />
                            <p ><span className='font-semibold'>Salary: </span>{salary} (Per Month)</p>
                        </div>
                        <div className='flex mt-3 gap-2'>
                           <img  src="../../public/job.png" alt="" />
                            <p ><span className='font-semibold'>Job Title: </span>{job_title}</p>
                        </div>
                        <h3 className='font-bold mt-3 mb-3'>Job Details</h3>
                        <hr />
                        <div className='flex mt-3 gap-2'>
                           <img  src="../../public/phone.png" alt="" />
                            <p ><span className='font-semibold'>Phone: </span>{phone}</p>
                        </div>
                        <div className='flex mt-3 gap-2'>
                           <img  src="../../public/email.png" alt="" />
                            <p ><span className='font-semibold'>Email: </span>{email}</p>
                        </div>
                        <div className='flex mt-3 gap-2'>
                           <img  src="../../public/address.png" alt="" />
                            <p ><span className='font-semibold'>Address: </span>{location}</p>
                        </div>
                    </div>
                    <button className='my-btn w-full mt-3'>Apply Now</button>
                </div>
            </div>
        </>
    );
};

export default JobDetails;