import React, { useState } from 'react';
import { FiPhoneCall } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const CallIcon = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/contact")
    }

    return (
        <div onClick={() => handleNavigate()} className='fixed bottom-6 right-10 bg-blue-500 w-16 h-16 z-20 flex justify-center items-center rounded-full cursor-pointer drop-shadow-lg'>
            <FiPhoneCall className='text-3xl text-slate-50'/>
        </div>
    )
}

export { CallIcon }