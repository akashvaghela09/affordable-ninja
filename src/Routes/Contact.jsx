import React from 'react';
import contactImg from "../Assets/contact.png";
import { BsWhatsapp } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";

const Contact = () => {
    return (
        <div className='bg-slate-50 p-10'>
            <p className='px-2 text-2xl font-bold mb-5 text-center'>Contact us at 👇</p>
            <div className='flex w-full'>
                <div className='w-2/5 flex justify-start items-center'>
                    <img className='h-fit' src={contactImg} alt="contact"/>
                </div>
                <div className='flex flex-col items-start gap-5 w-1/2 p-10'>
                    <label className='text-left m-2'>
                        <p className='text-left font-bold text-xl'>Mobile Number</p>
                        <p className='text-left flex items-center font-bold text-lg'>
                            9663450651 
                            <BiPhoneCall className='ml-2'/>
                            <BsWhatsapp className='ml-2'/>
                        </p>
                    </label>

                    <label className='text-left m-2'>
                        <p className='text-left font-bold text-xl'>Email</p>
                        <p className='text-left font-bold text-lg'>info@affordableninja.in</p>
                    </label>
                </div>
            </div>
        </div>
    )
}

export { Contact }