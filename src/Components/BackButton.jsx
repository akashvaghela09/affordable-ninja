import React from 'react';
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
    const navigate = useNavigate();

    return (
        <div className='fixed top-[83px] left-3 p-1 w-fit rounded-md cursor-pointer drop-shadow-md bg-slate-50 flex justify-center items-center' onClick={() => navigate(-1)}>
            <BiArrowBack className='mr-2' /> Go Back
        </div>
    )
}

export { BackButton }