import React from 'react';
import { data } from "../data";

const WhyUs = () => {
    const { whyUs } = data;

    return (
        <div className='w-11/12 md:w-10/12 bg-slate-100 p-4 md:px-14 md:py-5 md:my-14 m-5 flex flex-col rounded-lg drop-shadow-lg'>
            <p className='border-l-4 border-red-500 px-2 md:px-4 md:my-2 text-left text-xl font-bold'>Why Us</p>
            <div className='flex flex-col md:flex-row justify-between my-2 md:my-6 gap-2 md:gap-6'>
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