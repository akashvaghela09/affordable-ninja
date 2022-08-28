import React, { useState} from 'react';
import { data } from "../data";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";

const FAQ = () => {
    const { faq } = data;

    const FAQRow = ({ el, index }) => {
        let [open, setOpen] = useState(false);
    
        return (
                <div className='w-full drop-shadow-md'>
                    <p 
                    onClick={() => setOpen(!open)} 
                    className={ open === true ?
                    "text-left font-bold bg-blue-500 text-slate-100 p-2 px-4 rounded-t-md select-none flex justify-between items-center cursor-pointer"
                    :
                    "text-left font-bold bg-blue-500 text-slate-100 p-2 px-4 rounded-md select-none flex justify-between items-center cursor-pointer"
                    }
                    >
                        {el.question} { open === true ? <BsCaretUpFill /> : <BsCaretDownFill />}
                    </p>
                    {
                        open === true && <p className='text-left p-2 px-4 bg-slate-100 rounded-b-md select-none'>{el.answer}</p>
                    }
                </div>
        )
    }

    return (
        <div className='bg-blue-100 p-14 flex flex-col'>
            <p className='border-l-4 border-red-500 px-4 my-2 text-left text-xl'>FAQ</p>
            <div className='flex flex-col m-6 gap-5'>
                {
                    faq.length > 0 &&
                    faq.map((el, index) => {
                        return <FAQRow key={index} el={el} index={index}/>
                    })
                }
            </div>
        </div>
    )
}

export { FAQ }