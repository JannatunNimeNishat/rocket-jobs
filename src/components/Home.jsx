import React, { useEffect, useState } from 'react';
import JobCategory from './JobCategory';
import FeaturedJobs from './FeaturedJobs';

const Home = () => {
    const [jobCategory, setJobCategory] = useState([]);
    const [featuredJobs, setFeaturedJobs] = useState([]);
    //for jobCategory
    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setJobCategory(data))
    }, [])

    //for featuredJobs
    useEffect(()=>{
        fetch('jobs.json')
        .then(res=> res.json())
        .then(data => setFeaturedJobs(data));
    },[])
   

    return (
        <>
            <div className=' bg-[#D9D9D9] '>
                <div className='my-container grid md:grid-cols-2'>
                    <div className='md:flex flex-col justify-center  text-center md:text-left'>
                        <h3 className='text-5xl font-bold mt-5 md:mt-0'>One Step <br /> Closer To Your <br /> <span className='primary-color'>Dream Job</span></h3>
                        <p className='mt-5'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                        <button className='my-btn  md:w-2/6 mt-5'>Get Started</button>
                    </div>
                    <img className='mt-3 md:mt-0 pt-3' src='hero_img.png' alt="" />
                </div>
            </div>
            {/* job category section */}
            <section className='mt-32 my-container'>
                <h3 className='text-3xl font-bold text-center'>Job Category List</h3>
                <p className='mt-3 text-center'><small>Explore thousands of job opportunities with all the information you need. Its your future</small></p>
                <div className='mt-8 md:flex justify-between gap-3'>
                    {
                        jobCategory.map(singleCategory => <JobCategory
                            key={singleCategory.id}
                            singleCategory={singleCategory}
                        ></JobCategory>)
                    }
                </div>
            </section>

            {/* featured jobs section */}
            <section className='mt-32 my-container'>
            <h3 className='text-3xl  font-bold text-center'>Featured Jobs</h3>
                <p className='mt-3 text-center'><small>Explore thousands of job opportunities with all the information you need. Its your future</small></p>

                <div className='mt-8 md:grid grid-cols-2 gap-5'>
                    {
                       featuredJobs.map(singleJob => <FeaturedJobs
                       key={singleJob.id}
                       singleJob={singleJob}
                       ></FeaturedJobs>) 
                    }
                </div>

            </section>

        </>
    );
};

export default Home;