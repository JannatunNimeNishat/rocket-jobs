import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className=' bg-[#D9D9D9] '>
          <div className='my-container md:flex items-center justify-between p-3'>
          <Link to='/'> <h3 className='text-3xl font-bold'>Rocket Jobs</h3></Link>
            <div className='flex gap-5 text-xl'>
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
            <button className='my-btn'> Start Applying</button>
          </div>
        </div>
    );
};

export default Header;