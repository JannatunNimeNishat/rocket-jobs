import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
const Header = () => {
    const [openIcon, setOpenIcon] = useState(true)

    return (
        <div className=' bg-[#D9D9D9] pt-6 pb-3   '>
                <div className='md:hidden '>
                    {
                        openIcon ?
                            <XMarkIcon onClick={() => setOpenIcon(!openIcon)} className='h-6 w-6 text-black ml-3'></XMarkIcon>
                            :
                            <Bars3Icon onClick={() => setOpenIcon(!openIcon)} className='h-6 w-6 text-black ml-3'></Bars3Icon>
                    }
                </div>
               
                   <div className={`w-2/3 md:w-10/12 ml-8 md:mx-auto md:flex items-center justify-between rounded  bg-white md:bg-[#D9D9D9] absolute md:static  p-3  ${openIcon ? 'top-14' : '-top-52'} `} >
                  
                   <Link to='/'> <h3 className='text-3xl font-bold'>Rocket Jobs</h3></Link>
                    <div className='flex flex-col md:flex-row   md:gap-5 text-xl'>
                        <NavLink to='/statistics'
                            className={({ isActive }) => isActive ? 'active' : ''}
                        >Statistics</NavLink>
                        <NavLink to='/applied-jobs'
                            className={({ isActive }) => isActive ? 'active' : ''}
                        >Applied Jobs</NavLink>
                        <NavLink to='/blog'
                            className={({ isActive }) => isActive ? 'active' : ''}
                        >Blog</NavLink>
                    </div>
                    <button className='my-btn mt-3 md:mt-0'> Start Applying</button>
                   </div>
            
        </div>
    );
};

export default Header;