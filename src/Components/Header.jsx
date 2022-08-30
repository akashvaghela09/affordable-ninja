import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { BackButton } from './BackButton';
import Logo from "../Assets/logo.png"

const Header = () => {
    let location = useLocation();
    let page = location.pathname

    return (
        <div className='bg-slate-100 p-2 drop-shadow flex justify-start sticky top-0 left-0 z-50'>
            <Link to="/" className='p-2 text-2xl font-bold flex items-center'>
                AffordableNinja
                <img src={Logo} alt="logo" className='w-10 h-10 mx-2'/>
            </Link>
            {
                page !== "/" && page !== "/admin" &&
            <div className='relative w-full'>
                <BackButton />
            </div>
            }
        </div>
    )
}

export { Header }