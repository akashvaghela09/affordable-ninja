import React from 'react'
import Poster1 from "../Assets/poster1.png";

const PosterOne = () => {
    return (
        <div className='w-96 h-80 rounded-lg p-4 flex flex-col justify-center items-center'>
            <img className='h-fit' src={Poster1} alt="poster"/>
            <p className='px-3 py-2 rounded-lg font-bold text-2xl'>Special Offer For Students*</p>
        </div>
    )
}

export{ PosterOne }