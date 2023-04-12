import React from 'react';
import { Cell, Pie, PieChart, Tooltip } from 'recharts';
const Statistics = () => {

    const data = [{ name: 'Assignment 1', mark: 60, color: '#0088FE' }, { name: 'Assignment 2', mark: 60, color: '#00C49F' }, { name: 'Assignment 3', mark: 60, color: '#FFBB28' }, { name: 'Assignment 4', mark: 59 }, { name: 'Assignment 5', mark: 60, color: '#ffdab9' }, { name: 'Assignment 6', mark: 60, color: '#43aaa0' }, { name: 'Assignment 7', mark: 60, color: '#b482c2' }, { name: 'Assignment 8', mark: 60, color: '#075b6f' }];


    return (
        <div className='my-12   divide-y-2'>
            <h1 className='text-center font-bold text-3xl my-5'>1st to 8th Assignment Marks</h1>
            <PieChart className='mx-auto' width={400} height={320}>
                <Pie data={data} dataKey="mark" nameKey="name" cx="50%" cy="50%" outerRadius={150} fill='#ABDABB'>

                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Pie>

                <Tooltip></Tooltip>
            </PieChart>
        </div>
    );
};

export default Statistics;