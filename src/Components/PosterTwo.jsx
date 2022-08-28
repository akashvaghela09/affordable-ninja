import React from 'react'
import Poster2 from "../Assets/poster2.png";
const PosterTwo = () => {
    return (
        <div className='w-96 h-80 rounded-lg p-4 flex flex-col justify-center items-center'>
            <img className='h-fit' src={Poster2} alt="poster"/>
            <p className='px-3 py-2 m-[-20px] rounded-lg font-bold text-xl'>Laptops starting from 22,000</p>
        </div>
    )
}

export{ PosterTwo }