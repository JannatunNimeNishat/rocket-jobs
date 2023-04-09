import React from 'react';

const JobCategory = ({ singleCategory }) => {
    const { id, jobs_avail_able, logo, name } = singleCategory;
    return (
        <div className='p-8  category-card w-[300px] h-[200px] rounded-lg mt-5'>
            <div className='bg-gray-200 w-[60px] h-[60px] mt-3  rounded-lg flex justify-center items-center'>
                <img className='w-[40px] h-[40px]' src={logo} alt="" />
            </div>
            <h3 className='font-bold mt-3'>{name}</h3>
            <p className='mt-1'><small>{jobs_avail_able} Jobs Available</small></p>
        </div>
    );
};

export default JobCategory;