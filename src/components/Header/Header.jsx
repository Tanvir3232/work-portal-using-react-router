import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex items-center justify-between my-container'>
            <div className='font-bold text-4xl '>
                Work<span className='text-blue-500'>Portal</span>
            </div>
            <nav className='flex gap-6 text-lg font-semibold'>
                <Link to="/">Home</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/applied-job/">Applied Job</Link>
                <Link to="/blog">Blog</Link>
            </nav>
            <div>
                <button className='btn-primary'>Star Applying</button>
            </div>
        </div>
    );
};

export default Header;Header