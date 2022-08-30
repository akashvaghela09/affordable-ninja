import React from 'react';
import contactImg from "../Assets/contact.png";
import { FaWhatsapp } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { GoMail } from "react-icons/go";

const Contact = () => {
    return (
        <div className='bg-slate-50 p-4 md:p-10 min-h-screen md:h-fit'>
            <p className='px-2 text-2xl font-bold mb-5 text-center'>Contact us at 👇</p>
            <div className='flex flex-col md:flex-row w-full'>
                <div className='w-full md:w-2/5 flex justify-center md:justify-start items-center'>
                    <img className='h-fit' src={contactImg} alt="contact" />
                </div>
                <div className='flex flex-col items-start gap-5 w-full md:w-1/2 p-10'>
                    <div className='w-full md:w-fit text-left m-2'>
                        <p className='text-left font-bold text-xl'>Mobile Number</p>
                        <p className='text-left flex items-center font-semibold text-lg'>
                            9663450651
                        </p>
                        <div className='flex gap-3 my-2 justify-between'>
                            <a href="tel:+91-9663450651" className='bg-blue-600 flex justify-center items-center w-1/2 md:w-28 py-2 rounded-lg drop-shadow-md hover:bg-blue-700 transition ease-in duration-300'>
                                <div className='flex justify-evenly items-center gap-2'>
                                <BiPhoneCall className='text-slate-50 text-xl' />
                                <p className='text-slate-50 text-xl'>
                                Call
                                </p>
                                </div>
                            </a>
                            <a href="https://api.whatsapp.com/send?phone=9663450651" className='bg-green-600 flex justify-center items-center w-1/2 md:w-28 py-2 rounded-lg drop-shadow-md hover:bg-green-700 transition ease-in duration-300'>
                                <div className='flex justify-evenly items-center gap-2'>
                                <FaWhatsapp className='text-slate-50 text-xl' />
                                <p className='text-slate-50 text-xl'>
                                Chat
                                </p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <label className='text-left m-2 w-full'>
                        <p className='text-left font-bold text-xl'>Email</p>
                        <p className='text-left font-bold text-lg'>info@affordableninja.in</p>
                        <div className='w-full flex gap-3'>

                        <a href="mailto:demo@demo.com" className='mt-3 bg-blue-600 flex justify-center items-center w-1/2 md:w-28 py-2 rounded-lg drop-shadow-md hover:bg-blue-700 transition ease-in duration-300'>
                                <div className='flex justify-evenly items-center gap-2'>
                                <GoMail className='text-slate-50 text-xl' />
                                <p className='text-slate-50 text-xl'>
                                Mail
                                </p>
                                </div>
                            </a>
                            <div className='w-1/2'/>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    )
}

export { Contact }