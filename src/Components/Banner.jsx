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
            <div className='w:full md:w-1/2 pb-12 md:pb-0 p-5 md:p-14 md:absolute top-0 left-0 z-10 bg-slate-100 md:bg-transparent'>
                <p className='text-xl md:text-4xl font-bold text-justify'>Buy your next Laptop at <br />affordable price</p>
                <div className="flex flex-col md:flex-row my-4 md:my-6 gap-2 md:gap-4">
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
                <div className='flex justify-center md:justify-start items-center my-3'>
                    <div className='w-20 h-[2px] bg-slate-800' />
                    <p className='p-2 mx-3 w-fit '>Choose a Brand</p>
                    <div className='w-20 h-[2px] bg-slate-800' />
                </div>
                <div className='flex justify-evenly md:justify-start md:gap-6'>
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
        <div className='w-full relative flex flex-col md:flex-row h-fit md:h-[500px]'>
                <SiteInfo />
                {
                    posterIndex === 1 &&
                    <Fade className='w-full'>
                        <div className='bg-gradient-to-l from-indigo-500 w-full h-full flex justify-end'>
                            <div className="w-full md:w-1/2 h-full md:h-4/5 flex justify-center items-center">
                                <PosterOne />
                            </div>
                        </div>
                    </Fade>
                }
                {
                    posterIndex === 2 &&
                    <Fade className='w-full'>
                        <div className='bg-gradient-to-l from-slate-500 w-full h-full flex justify-end'>
                            <div className="w-full md:w-1/2 h-full md:h-4/5 flex justify-center items-center">
                                <PosterTwo />
                            </div>
                        </div>
                    </Fade>
                }
        </div>
    )
}

export { Banner }