import React from 'react';

const Blog = () => {
    return (
        <div className='my-container divide-y-4 my-5'>
            <h1 className='text-center my-2 text-3xl font-bold'>Some important Viva Question and Answer</h1>
            <ul className='text-xl  mt-5 '>
                <li className='p-5 my-3 shadow-red-200'>
                    <h2 className='font-bold'>a. When should you use context API?</h2>
                    <div className='px-4 py-1'>
                        <p className='text-green-600 font-medium'>Answer:</p>
                        <p>
                        Context API in React should be used when you need to share data or state between multiple components that are not directly related to each other in the component tree.
                        </p>
                        <p className='py-1'>
                        Context provides a way to pass data through the component tree without having to pass props down manually at every level. This can help reduce the "prop drilling" problem where you have to pass props through multiple levels of components just to get to the component that needs it.
                        </p>
                    </div>
                </li>
                
                <li className='p-5 my-3 shadow-red-200'>
                    <h2 className='font-bold'>b. What is a custom hook?</h2>
                    <div className='px-4 py-1'>
                        <p className='text-green-600 font-medium'>Answer:</p>
                        <p>
                        A custom hook is a function that can be used to share and reuse code that contains stateful logic. It makes your code more reusable and easier to manage, and allows you to keep your components focused on their specific responsibilities.
                        </p>
                       
                    </div>
                </li>
                <li className='p-5 my-3 shadow-red-200'>
                    <h2 className='font-bold'>c. What is useRef?</h2>
                    <div className='px-4 py-1'>
                        <p className='text-green-600 font-medium'>Answer:</p>
                        <p>
                        The useRef hook can be used to create a reference to a DOM value or element that will persist between component renders. It can be used to access and modify an element's DOM properties, or it can be used to save a value so that it doesn't cause a re-render.
                        </p>
                        
                    </div>
                </li>
                <li className='p-5 my-3 shadow-red-200'>
                    <h2 className='font-bold'>d. What is useMemo?</h2>
                    <div className='px-4 py-1'>
                        <p className='text-green-600 font-medium'>Answer:</p>
                        <p>
                        useMemo is a hook that allows you to optimize the performance of your application by memoizing the result of a function call. It helps to avoid unnecessary calculations and improves the performance of your application by reusing previously computed results.
                        </p>
                        
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Blog;