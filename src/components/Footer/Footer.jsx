import { MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Footer = () => {
    return (
        <div className='bg-gray-900 md:p-20 p-10 text-sm text-gray-300 divide-y-2'>
            <div className=' flex md:flex-row justify-between gap-8 items-start flex-col '>
                <div>
                    <h1 className='font-bold text-2xl '>
                        Work<span className='text-blue-500'>Portal</span>
                    </h1>
                    <p className='py-3 w-64'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <img src="/assets/Icons/social.png" alt="" />
                </div>
                <div>
                    <h1 className='text-xl mb-3 font-medium'>Services</h1>
                    <p className='py-1'>Home</p>
                    <p className='py-1'>Applied Job</p>
                    <p className='py-1'>Statistics</p>
                    <p className='py-1'>Blog</p>
                </div>
                <div>
                    <h1 className='text-xl mb-3 font-medium'>Support</h1>
                    <p className='py-1'>Help Desk</p>
                    <p className='py-1'>Apply</p>
                    <p className='py-1'>Become a partner</p>
                    <p className='py-1'>Developers</p>
                </div>
                <div>
                    <h1 className='text-xl mb-3 font-medium'>Contact</h1>
                    <p className='py-1 flex gap-2 items-center'> <MapPinIcon className='w-4 h-6'></MapPinIcon>  Golapgonj, Sylhet, BD</p>
                    <p className='py-1 flex gap-2 items-center'><PhoneIcon className='w-4 h-6'></PhoneIcon> 01732328171</p>

                </div>

            </div>
            <div className='flex md:flex-row flex-col py-2 mt-5 pt-5 justify-between'>
                <p>&copy; 2023 WorkPortal. All Rights Reserved</p>
                <p>Powered by WorkPortal</p>
            </div>
        </div>
    );
};

export default Footer;