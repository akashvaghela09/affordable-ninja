import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className='bg-slate-100 p-2 drop-shadow flex justify-start sticky top-0 left-0 z-50'>
            <Link to="/" className='p-2 text-2xl font-bold text-blue-600'>AffordableNinja</Link>
        </div>
    )
}

export { Header }