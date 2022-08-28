import React, { useState} from 'react';
import { data } from "../data";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const FAQ = () => {
    const { faq } = data;

    const FAQRow = ({ el, index }) => {
        let [open, setOpen] = useState(false);
    
        return (
                <div className='w-full drop-shadow-md bg-slate-600'>
                    <p 
                    onClick={() => setOpen(!open)} 
                    // className={ open === true ?
                    //     "text-left font-bold bg-blue-500 text-slate-100 p-3 rounded-t-md select-none flex justify-start items-center cursor-pointer"
                    //     :
                    //     "text-left font-bold bg-blue-500 text-slate-100 p-3 rounded-md select-none flex justify-start items-center cursor-pointer"
                    // }
                    className="text-left font-bold text-slate-100 p-3 rounded-t-md select-none flex justify-start items-center cursor-pointer"
                    >
                        { open === true ? <AiOutlineMinus className='mx-5'/> : <AiOutlinePlus className='mx-5'/>}
                        {el.question} 
                    </p>
                        {
                            open === true && <p className='text-left p-3 px-4 pl-16 bg-slate-200 select-none'>{el.answer}</p>
                        }
                </div>
        )
    }

    return (
        <div className='w-full bg-gradient-to-b from-slate-500 p-14 flex flex-col'>
            <p className='border-l-4 border-red-500 text-slate-100 px-4 my-2 text-left text-xl'>FAQ</p>
            <div className='flex flex-col m-6'>
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