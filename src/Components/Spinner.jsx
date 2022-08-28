import React from 'react';
import { CgSpinner } from "react-icons/cg";

const Spinner = () => {
    return (
        <div className='w-screen h-screen flex justify-center items-center fixed top-0 left-0 bg-slate-900/20'>
            <CgSpinner className='text-7xl animate-spin text-slate-500'/>
        </div>
    )
}

export { Spinner }