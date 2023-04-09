import React from 'react';

const Home = () => {
    return (
        <>
        <div className=' bg-[#D9D9D9] '>
            <div className='my-container grid md:grid-cols-2'>
                <div className='md:flex flex-col justify-center  text-center md:text-left'>
                    <h3 className='text-5xl font-bold mt-5 md:mt-0'>One Step <br /> Closer To Your <br /> <span className='primary-color'>Dream Job</span></h3>
                    <p className='mt-3'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                    <button className='my-btn  md:w-2/6 mt-3'>Get Started</button>
                </div>
                <img className='mt-3 md:mt-0' src='hero_img.png' alt="" />
            </div>
        </div>
        {/* job category section */}
        </>
    );
};

export default Home;