import React from 'react';
 
const Footer = () => {
    return (
        <div className='mt-20 bg-[#1A1919] text-white text-center md:text-left'>
           <div className='my-container pt-24 p-3 '>
             <div className='md:flex justify-between'>
                <div>
                    <h1 className='text-2xl font-bold'>Rocket Jobs</h1>
                    <p className='mt-3 mb-3'>There are many variations of passages of <br /> Lorem Ipsum , but the majority have suffered <br /> alteration in some form.</p>
                    <img className='mx-auto md:mx-0 ' src="group.png" alt="" />
                </div>
                <div>
                    <h1 className='text-xl font-bold'>Company</h1>
                    <p className='mt-3 mb-3'>About Us</p>
                    <p className='mt-3 mb-3'>Work</p>
                    <p className='mt-3 mb-3'>Latest News</p>
                    <p className='mt-3 mb-3'>Careers</p>

                </div>
                <div>
                    <h1 className='text-xl font-bold'>Product</h1>
                    <p className='mt-3 mb-3'>Prototype</p>
                    <p className='mt-3 mb-3'>Plans & Pricing</p>
                    <p className='mt-3 mb-3'>Customers</p>
                    <p className='mt-3 mb-3'>Integrations</p>

                </div>
                <div>
                    <h1 className='text-xl font-bold'>Support</h1>
                    <p className='mt-3 mb-3'>Help Desk</p>
                    <p className='mt-3 mb-3'>Sales</p>
                    <p className='mt-3 mb-3'>Become a Partner</p>
                    <p className='mt-3 mb-3'>Developers</p>
                </div>
                <div>
                    <h1 className='text-xl font-bold'>Contact</h1>
                    <p className='mt-3 mb-3'>524 Broadway , NYC</p>
                    <p className='mt-3 mb-3'>+1 777 - 978 - 5570</p>

                </div>
            </div>
            <hr className='mt-8 mb-5 text-white' />
            <div className=' flex justify-between'>
                <p><small>@2023 Rocket-Jobs. All Rights Reserved</small></p>
                <p className='mb-8'><small>Powered by Rocket-jobs</small></p>
            </div>
           </div>

        </div>

    );
};

export default Footer;