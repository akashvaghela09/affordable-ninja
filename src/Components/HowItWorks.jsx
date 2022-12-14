import React from 'react';
import { data } from "../data";

const HowItWorks = () => {
    const { howItWorks } = data;
    return (
        <div className='p-4 md:p-14 flex flex-col w-11/12 mt-5 md:w-10/12 md:mt-[-100px] bg-slate-100 z-10 rounded-md drop-shadow-lg'>
            <div className=''>
                <p className='border-l-4 border-red-500 px-2 text-xl md:text-2xl font-bold mb-5 text-left'>How Affordable Works</p>
                <div className='my-6 grid md:grid-cols-3 grid-cols-1'>
                    {
                        howItWorks.length > 0 &&
                        howItWorks.map((el, index) => {
                            return <div className='m-2 p-4 flex flex-col justify-start items-center rounded-md' key={index}>
                                <p className='text-7xl'>
                                    {el.icon}
                                </p>
                                <label className='flex justify-start items-center w-full my-2 md:my-4 '>
                                    <p className='bg-blue-300 text-slate-900 w-8 h-8 flex justify-center items-center rounded-full mr-4'>{index + 1}</p>
                                    <p className='font-bold'>{el.tag}</p>
                                </label>
                                <p className='text-sm text-left'>{el.desc}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export { HowItWorks }