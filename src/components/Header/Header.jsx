import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex items-center justify-between'>
            <div className='font-bold text-4xl '>
                Work<span className='text-blue-500'>Portal</span>
            </div>
            <nav className='flex gap-6 text-lg font-semibold'>
                <Link>Statistics</Link>
                <Link>Applied Job</Link>
                <Link>Blog</Link>
            </nav>
            <div>
                <button className='btn-primary'>Star Applying</button>
            </div>
        </div>
    );
};

export default Header;Header