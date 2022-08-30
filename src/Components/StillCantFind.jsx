import React from 'react';
import { Link } from "react-router-dom";

const StillCantFind = () => {
    return (
        <div className='w-full p-4 md:p-14 flex justify-center items-center border-b-2 border-slate-200 bg-slate-100'>
            <p>Still can’t find something?</p>
            <Link to="/contact">
                <button className='bg-blue-500 text-slate-50 py-2 px-4 mx-4 rounded-lg'>Contact Us</button>
            </Link>
        </div>
    )
}

export { StillCantFind }