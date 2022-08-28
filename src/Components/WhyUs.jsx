import React from 'react';
import { data } from "../data";

const WhyUs = () => {
    const { whyUs } = data;

    return (
        <div className='w-10/12 bg-slate-100 px-14 py-5 my-14 flex flex-col rounded-lg drop-shadow-lg'>
            <p className='border-l-4 border-red-500 px-4 my-2 text-left text-xl'>Why Us</p>
            <div className='flex justify-between my-6 gap-6'>
                {
                    whyUs.length > 0 &&
                    whyUs.map((el, index) => {
                        return <div className='w-full flex justify-start items-start bg-slate-100 p-4 rounded-md' key={index}>
                            <p className='text-5xl mx-4'>
                                {el.icon}
                            </p>
                            <div className='flex flex-col justify-start'>
                                <p className='font-bold text-left'>{el.tag}</p>
                                <p className='text-left'>{el.desc}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export { WhyUs }