import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className='bg-slate-100 drop-shadow flex flex-col items-center justify-center'>
            <p className='p-14'>Copyright @ 2022 <Link to="/" className='text-blue-600'>AffordableNinja.in</Link> All rights reserved</p>
        </div>
    )
}

export { Footer }