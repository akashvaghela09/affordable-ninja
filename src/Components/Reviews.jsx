import React, { useState } from 'react'
import { data } from "../data";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill, BsArrowLeft, BsArrowRight, BsArrowBarLeft } from "react-icons/bs";
import { Fade } from 'react-awesome-reveal';
import { FaUserCircle } from "react-icons/fa";
import { AiFillCaretDown, AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const Reviews = () => {
    const { reviews } = data;
    const [reviewIndex, setReviewIndex] = useState(0)
    const [loading, setLoading] = useState(false)
    const [direction, setDirection] = useState("")
    
    let singleReview = reviews[reviewIndex];

    const handleClick = (para, slideDirection) => {
        let newIndex = reviewIndex + para
        if(newIndex > reviews.length - 1){
            setReviewIndex(0)
        } else if (newIndex <= 0){
            setReviewIndex(reviews.length - 1)
        } else 
        {
            setReviewIndex(newIndex)
        }
        setLoading(true)
        setDirection(slideDirection)

        setTimeout(() => {
            setLoading(false)
        }, 0);
    }

    return (
        <div className='w-11/12 md:w-10/12 rounded-lg p-4 md:px-14 md:pt-5 bg-slate-100 drop-shadow-lg mb-14'>
            <p className='border-l-4 border-red-500 px-4 md:my-2 text-left text-xl'>Customer Stories</p>
            <div className='relative h-72 w-fit md:w-full flex justify-center items-center'>
                <button className='reviewButtonLeft hidden md:block' onClick={() => handleClick(-1, "left")}>
                    <BsFillArrowLeftCircleFill className='text-5xl text-slate-600' />
                </button>
                <button className='reviewButtonRight hidden md:block' onClick={() => handleClick(1, "right")}>
                    <BsFillArrowRightCircleFill className='text-5xl text-slate-600' />
                </button>
                {
                    loading === false &&
                    singleReview.name !== undefined &&
                    singleReview.desc !== undefined &&
                    singleReview.city !== undefined &&
                    <Fade direction={direction}>
                        <div className='flex flex-col justify-center md:justify-start items-center w-full md:w-80 h-fit md:h-72'>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='bg-slate-600 text-slate-100 rounded-lg p-4'>{singleReview.desc}</div>
                                <AiFillCaretDown className='text-4xl text-slate-600 m-[-12px]' />
                            </div>
                            <FaUserCircle className='text-6xl m-4 text-slate-600' />
                            <div>
                                <p className='font-bold'>{singleReview.name}</p>
                                <p>({singleReview.city})</p>
                            </div>
                        </div>
                    </Fade>
                }
            </div>
            <div className='md:hidden w-full flex gap-2'>
            <button className='bg-slate-600 w-1/2 flex justify-center items-center rounded-lg' onClick={() => handleClick(-1, "left")}>
                    <BsArrowLeft className='text-3xl text-slate-200 m-2' /> 
                </button>
                <button className='bg-slate-600 w-1/2 flex justify-center items-center rounded-lg' onClick={() => handleClick(1, "right")}>
                    <BsArrowRight className='text-3xl text-slate-200 m-2' />
                </button>
            </div>
        </div>
    )
}

export { Reviews }