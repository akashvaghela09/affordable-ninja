import React from 'react';
import Laptop from "../Assets/laptop.png";

const ItemCard = ({ data }) => {
    const {
        company,
        model,
        modelNumber,
        price,
        launchPrice,
        total,
        specs
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
        let d = Math.floor((newPrice / oldPrice) * 100)
        return `${100 - d}% off`;
    }

    const formatAmount = (amount) => {
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
        <div className='pt-20 m-5'>
            <div className='w-80 h-fit mt-10 rounded-lg flex flex-col items-center drop-shadow-md bg-gradient-to-r from-blue-200 to-indigo-300 cursor-pointer'>
                <div className='w-full h-28 relative flex justify-center items-center'>
                    <img className='absolute top-[-100px] left-18 h-52' src={Laptop} alt="laptop" />
                </div>
                <p className='bg-blue-900 text-slate-100 font-bold text-lg p-1 m-1 w-4/5 rounded-full'>{company} {model} {modelNumber}</p>
                <div>
                    <p className='text-sm'>{processor} {processorGen} Processor</p>
                    <p className='text-sm'>{ram} Ram + {storage} {storageType} Storage</p>
                </div>
                <div className='p-2 bottom-0 left-0 flex flex-col items-center'>
                    <p className='text-2xl font-bold'>₹{formatAmount(price)}</p>
                    <label className='flex items-center justify-center'>
                        <p className='text-sm'>M.R.P. <span className='line-through mr-3'>₹{formatAmount(launchPrice)}</span></p>
                        <p className='text-sm text-green-700'>({discount(price, launchPrice)})</p>
                    </label>
                </div>
            </div>
        </div>
    )
}

export { ItemCard }