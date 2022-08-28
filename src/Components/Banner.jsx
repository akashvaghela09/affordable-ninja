import React, { useState, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";
import { data } from "../data";
import { PosterOne } from './PosterOne';
import { PosterTwo } from './PosterTwo';

const Banner = () => {
    const { brandList } = data;
    const posterCount = 2;
    const [posterIndex, setPosterIndex] = useState(1);

    const SiteInfo = () => {
        return (
            <div className='w-1/2 p-14 absolute top-0 left-0 z-10'>
                <p className='text-4xl font-bold text-justify'>Buy your next Laptop at <br />affordable price</p>
                <div className="flex my-6 gap-4">
                    <label className='flex  items-center'>
                        <TiTick className='text-blue-700 text-2xl' />
                        Maximum Value
                    </label>
                    <label className='flex  items-center'>
                        <TiTick className='text-blue-700 text-2xl' />
                        Safe & Hassel-free
                    </label>
                    <label className='flex  items-center'>
                        <TiTick className='text-blue-700 text-2xl' />
                        Free Doorstep Delivery
                    </label>
                </div>
                <div className='flex justify-start items-center my-3'>
                    <div className='w-20 h-[2px] bg-slate-800' />
                    <p className='p-2 mx-3 w-fit '>Choose a Brand</p>
                    <div className='w-20 h-[2px] bg-slate-800' />
                </div>
                <div className='flex justify-start gap-6'>
                    {
                        brandList.length > 0 &&
                        brandList.map((el, index) => {
                            return <Link to={el.to} key={el.name + "-" + index}>
                                <img className='w-16 h-16 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200 rounded-md drop-shadow-md bg-slate-200' src={el.img} alt={el.name} />
                            </Link>
                        })
                    }
                    <Link to="/all">
                        <p className='w-16 h-16 rounded-md drop-shadow-md bg-slate-50 flex justify-center items-center transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200'>See all</p>
                    </Link>
                </div>
            </div>
        )
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setPosterIndex((posterIndex) => {
                if (posterIndex >= posterCount) {
                    return 1
                } else {
                    return posterIndex + 1;
                }
            });
        }, 8000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className='w-full relative flex h-[500px]'>
                <SiteInfo />
                {
                    posterIndex === 1 &&
                    <Fade className='w-full'>
                        <div className='bg-gradient-to-l from-indigo-500 w-full h-full flex justify-end'>
                            <div className="w-1/2 h-4/5 flex justify-center items-start">
                                <PosterOne />
                            </div>
                        </div>
                    </Fade>
                }
                {
                    posterIndex === 2 &&
                    <Fade className='w-full'>
                        <div className='bg-gradient-to-l from-slate-500 w-full h-full flex justify-end'>
                            <div className="w-1/2 h-4/5 flex justify-center items-start">
                                <PosterTwo />
                            </div>
                        </div>
                    </Fade>
                }
        </div>
    )
}

export { Banner }