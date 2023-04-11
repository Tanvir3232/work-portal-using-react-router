import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpenIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div>
            <div className='hidden md:flex  items-center justify-between my-container'>
                <div className='font-bold text-4xl '>
                    Work<span className='text-blue-500'>Portal</span>
                </div>
                <nav className='flex  gap-6 text-lg font-semibold'>
                    <Link to="/">Home</Link>
                    <Link to="/statistics">Statistics</Link>
                    <Link to="/applied-job/">Applied Job</Link>
                    <Link to="/blog">Blog</Link>
                </nav>
                <div>
                    <button className='btn-primary'>Star Applying</button>
                </div>
            </div>
            {/* mobile header */}
            <div className='md:hidden mx-6 py-5'>
                <div className=' flex  justify-between'>
                    <div className='font-bold text-2xl '>
                        Work<span className='text-blue-500'>Portal</span>
                    </div>
                    <nav>
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {
                                isMenuOpen ? <XMarkIcon className='w-6'></XMarkIcon> : <Bars3Icon className='w-6'></Bars3Icon>
                            }
                        </button>
                        {
                            isMenuOpen && (
                                <div className={`flex flex-col gap-6 text-lg font-semibold`}>
                                    <Link to="/">Home</Link>
                                    <Link to="/statistics">Statistics</Link>
                                    <Link to="/applied-job/">Applied Job</Link>
                                    <Link to="/blog">Blog</Link>
                                </div>
                            )
                        }

                    </nav>
                </div>
                <div className='text-center my-10'>
                    <button className='btn-primary'>Star Applying</button>
                </div>
            </div>

        </div>
    );
};

export default Header; Header