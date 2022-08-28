import React, { useState } from 'react'
import { data } from "../data";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { Fade } from 'react-awesome-reveal';
import { FaUserCircle } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";

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
        <div className='px-14 py-5 bg-slate-100'>
            <p className='border-l-4 border-red-500 px-4 my-2 text-left text-xl'>Customer Stories</p>
            <div className='relative h-96 flex justify-center items-center'>
                <button className='reviewButtonLeft' onClick={() => handleClick(-1, "left")}>
                    <BsFillArrowLeftCircleFill className='text-5xl' />
                </button>
                <button className='reviewButtonRight' onClick={() => handleClick(1, "right")}>
                    <BsFillArrowRightCircleFill className='text-5xl' />
                </button>
                {
                    loading === false &&
                    singleReview.name !== undefined &&
                    singleReview.desc !== undefined &&
                    singleReview.city !== undefined &&
                    <Fade direction={direction}>
                        <div className='flex flex-col justify-start items-center w-80 h-80'>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='bg-blue-500 rounded-lg p-4'>{singleReview.desc}</div>
                                <AiFillCaretDown className='text-4xl text-blue-500 m-[-12px]' />
                            </div>
                            <FaUserCircle className='text-6xl m-4' />
                            <div>
                                <p className='font-bold'>{singleReview.name}</p>
                                <p>({singleReview.city})</p>
                            </div>
                        </div>
                    </Fade>
                }
            </div>
        </div>
    )
}

export { Reviews }