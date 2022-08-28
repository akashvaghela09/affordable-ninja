import React, { useState } from 'react';
import { GiProcessor } from "react-icons/gi";
import { MdSdStorage, MdTouchApp } from "react-icons/md";
import { CgSmartphoneRam } from "react-icons/cg";
import { FaRegKeyboard } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Laptop from "../Assets/laptop.png";



const ItemDetailsCard = ({ data }) => {
    const [chargerSelected, setChargerSelected] = useState(false)

    const {
        company,
        model,
        modelNumber,
        price,
        launchPrice,
        total,
        infoUrl,
        chargerPrice,
        specs = {}
    } = data;

    const {
        ram,
        ramType,
        processor,
        processorGen,
        storage,
        storageType,
        touchscreen,
        backlight
    } = specs;

    const discount = (newPrice, oldPrice) => {
        console.log(newPrice)
        console.log(oldPrice)
        let d = Math.floor((newPrice / oldPrice) * 100)
        return `${d}% off`;
    }

    const formatAmount = (amount = 0) => {
        let newAmount = [];
        let tempArr = amount.toString().split("").reverse()

        for (let i = 0; i < tempArr.length; i++) {
            newAmount.push(tempArr[i])
            if (i === 2) {
                newAmount.push(",")
            }
            if (i > 2 && i % 2 === 0) {
                newAmount.push(",")
            }
        }

        if (newAmount[newAmount.length - 1] === ",") {
            newAmount.pop()
        }

        let finalAmount = newAmount.reverse().join("");
        return finalAmount;
    }

    return (
        <div className='h-fit flex flex-col bg-slate-200'>
            <div className='flex bg-fuchsia-400 bg-gradient-to-l from-indigo-400 py-10'>
                <div className='w-1/2 h-fit flex justify-center'>
                    <img className='h-64 m-5' src={Laptop} alt="laptop" />
                </div>
                <div className='relative py-2 w-fit rounded-r-lg'>
                    <p className='text-4xl text-left p-4'>{company} {model} {modelNumber}</p>
                    <label className='flex items-center px-4 my-1'>
                        <GiProcessor className='' />
                        <p className='px-4 text-left '>{processor} {processorGen} Generation Processor</p>
                    </label>
                    <label className='flex items-center px-4 my-1'>
                        <MdSdStorage className='' />
                        <p className='px-4 text-left '>{storage} {storageType} Storage</p>
                    </label>
                    <label className='flex items-center px-4 my-1'>
                        <CgSmartphoneRam className='' />
                        <p className='px-4 text-left '>{ram} {ramType} Ram</p>
                    </label>
                    {
                        backlight === true &&
                        <label className='flex items-center px-4 my-1'>
                            <FaRegKeyboard className='' />
                            <p className='px-4 text-left '>Backlight Keyboard</p>
                        </label>
                    }
                    {
                        touchscreen === true &&
                        <label className='flex items-center px-4 my-1'>
                            <MdTouchApp />
                            <p className='px-4 text-left '>Touch Screen Display</p>
                        </label>
                    }
                    <a href={infoUrl} target="_blank" rel="noreferrer" className='flex items-center ml-4 px-4 py-2 rounded-md my-1 border-[1px] w-fit mt-8 bg-slate-100 hover:bg-slate-200'>
                        <FiExternalLink className='' />
                        <p className='px-4 text-left '>All Specs</p>
                    </a>
                </div>
            </div>
            <div className='flex flex-col items-center my-14 '>
                <div className='w-1/3 bg-slate-300 rounded-lg drop-shadow-lg'>
                    <div className='flex '>
                        <p 
                            onClick={() => setChargerSelected(!chargerSelected)}
                            className={chargerSelected ? 'w-1/2 p-3 cursor-pointer' : 'w-1/2 p-3 bg-slate-100 rounded-tl-lg cursor-pointer'}
                        >
                            Without Charger
                        </p>
                        <p 
                            onClick={() => setChargerSelected(!chargerSelected)}
                            className={chargerSelected ? 'w-1/2 p-3 bg-slate-100 rounded-tr-lg cursor-pointer' : 'w-1/2 p-3 cursor-pointer'}
                        >
                            With Charger
                        </p>
                    </div>
                    <div className='bg-slate-100 rounded-b-lg p-5'>
                        <p className='text-3xl font-bold'>₹{formatAmount(chargerSelected ? (chargerPrice + price) : price)}</p>
                        <label className='flex items-center justify-center'>
                            <p>M.R.P. <span className='line-through mr-3'>₹{formatAmount(launchPrice)}</span></p>
                            <p className='text-green-700'>({discount(chargerPrice + price, launchPrice)})</p>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { ItemDetailsCard }