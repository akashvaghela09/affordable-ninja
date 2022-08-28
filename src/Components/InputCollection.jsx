import React, { useState } from 'react';
import { MdClose } from "react-icons/md";

const InputCollection = (data) => {

    const {
        // for handling add and update
        formType,
        handleFormSubmit,
        closeEditMode,

        // for handling state value
        company,
        model,
        modelNumber,
        price,
        launchPrice,
        infoUrl,
        totalItems,
        backlight,
        processor,
        processorGen,
        ram,
        ramType,
        storageSize,
        storageType,
        touchScreen,
        chargerPrice,
        cover,

        // for setting up state
        setCompany,
        setModel,
        setModelNumber,
        setPrice,
        setLaunchPrice,
        setinfoUrl,
        setTotalItems,
        setBacklight,
        setProcessor,
        setProcessorGen,
        setRam,
        setRamType,
        setStorageSize,
        setStorageType,
        setTouchScreen,
        setChargerPrice,
        setCover
    } = data;

    const [confirmPopup, setConfirmPopup] = useState(false)

    const handleSubmit = () => {

        setConfirmPopup(false)
        handleFormSubmit()

        setCompany("")
        setModel("")
        setModelNumber("")
        setPrice("")
        setLaunchPrice("")
        setinfoUrl("")
        setTotalItems("")
        setBacklight("")
        setProcessor("")
        setProcessorGen("")
        setRam("")
        setRamType("")
        setStorageSize("")
        setStorageType("")
        setTouchScreen("")
        setChargerPrice("")
        setCover("")
    }
    return (
        <div className='h-full w-full flex flex-col items-center'>
            <p className='w-full p-5 text-3xl bg-blue-300'>
                {formType === "add" ? "Add " : "Update"} item in stock
            </p>
            <div className='relative m-5 bg-slate-100 drop-shadow-md w-4/5 rounded-lg p-5 my-12'>
                {
                    formType === "update" && <MdClose className='absolute top-3 right-3 text-2xl cursor-pointer text-slate-400 hover:text-slate-900' onClick={() => closeEditMode()} />
                }
                <div className='flex gap-5 m-4'>
                    <p className='w-1/3 text-right p-1 m-1 ml-12'>
                        Company Name :
                    </p>
                    <select value={company} className='w-1/3' onChange={(e) => setCompany(e.target.value)}>
                        <option value="">Select Company</option>
                        <option value="Dell">Dell</option>
                        <option value="HP">HP</option>
                        <option value="Lenovo">Lenovo</option>
                    </select>
                </div>
                <div className='flex gap-5 m-4'>
                    <p className='w-1/3 text-right p-1 m-1 ml-12'>
                        Model Name :
                    </p>
                    <input
                        className='w-1/3 p-2'
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                    />
                </div>
                <div className='flex gap-5 m-4'>
                    <p className='w-1/3 text-right p-1 m-1 ml-12'>
                        Model Number :
                    </p>
                    <input
                        className='w-1/3 p-2'
                        value={modelNumber}
                        onChange={(e) => setModelNumber(e.target.value)}
                    />
                </div>
                <div className='flex gap-5 m-4'>
                    <p className='w-1/3 text-right p-1 m-1 ml-12'>
                        Processor Name :
                    </p>
                    <select value={processor} className='w-1/3' onChange={(e) => setProcessor(e.target.value)}>
                        <option value="">Select Processor</option>
                        <option value="Core i3">Core i3</option>
                        <option value="Core i5">Core i5</option>
                        <option value="Core i7">Core i7</option>
                        <option value="Core i9">Core i9</option>
                    </select>
                </div>
                <div className='flex gap-5 m-4'>
                    <p className='w-1/3 text-right p-1 m-1 ml-12'>
                        Processor Generation :
                    </p>
                    <select value={processorGen} className='w-1/3' onChange={(e) => setProcessorGen(e.target.value)}>
                        <option value="">Select Generation</option>
                        <option value="1st">1st</option>
                        <option value="2nd">2nd</option>
                        <option value="3rd">3rd</option>
                        <option value="4th">4th</option>
                        <option value="5th">5th</option>
                        <option value="6th">6th</option>
                        <option value="7th">7th</option>
                        <option value="8th">8th</option>
                        <option value="9th">9th</option>
                        <option value="10th">10th</option>
                        <option value="11th">11th</option>
                        <option value="12th">12th</option>
                    </select>
                </div>
                <div className='flex gap-5 m-4'>
                    <p className='w-1/3 text-right p-1 m-1 ml-12'>
                        Ram Size :
                    </p>
                    <select value={ram} className='w-1/3' onChange={(e) => setRam(e.target.value)}>
                        <option value="">Select Ram Size</option>
                        <option value="2 GB">2 GB</option>
                        <option value="4 GB">4 GB</option>
                        <option value="8 GB">8 GB</option>
                        <option value="12 GB">12 GB</option>
                        <option value="16 GB">16 GB</option>
                    </select>
                </div>
                <div className='flex gap-5 m-4'>
                    <p className='w-1/3 text-right p-1 m-1 ml-12'>
                        Ram Type :
                    </p>
                    <select value={ramType} className='w-1/3' onChange={(e) => setRamType(e.target.value)}>
                        <option value="">Select Ram Type</option>
                        <option value="DDR2">DDR2</option>
                        <option value="DDR3">DDR3</option>
                        <option value="DDR4">DDR4</option>
                    </select>
                </div>
                <div className='flex gap-5 m-4'>
                    <p className='w-1/3 text-right p-1 m-1 ml-12'>
                        Storage Size :
                    </p>
                    <select value={storageSize} className='w-1/3' onChange={(e) => setStorageSize(e.target.value)}>
                        <option value="">Select Storage Size</option>
                        <option value="120 GB">120 GB</option>
                        <option value="256 GB">256 GB</option>
                        <option value="500 GB">500 GB</option>
                    </select>
                </div>
                <div className='flex gap-5 m-4'>
                    <p className='w-1/3 text-right p-1 m-1 ml-12'>
                        Storage Type :
                    </p>
                    <select value={storageType} className='w-1/3' onChange={(e) => setStorageType(e.target.value)}>
                        <option value="">Select Storage Type</option>
                        <option value="SSD">SSD</option>
                        <option value="HDD">HDD</option>
                    </select>
                </div>
                <div className='flex gap-5 m-4'>
                    <p className='w-1/3 text-right p-1 m-1 ml-12'>
                        Backlight Keyboard :
                    </p>
                    <select value={backlight} className='w-1/3' onChange={(e) => setBacklight(e.target.value)}>
                        <option value="">Select Keyboard Type</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div className='flex gap-5 m-4'>
                    <p className='w-1/3 text-right p-1 m-1 ml-12'>
                        Touch Screen Display :
                    </p>
                    <select value={touchScreen} className='w-1/3' onChange={(e) => setTouchScreen(e.target.value)}>
                        <option value="">Select Display Type</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div className='flex gap-5 m-4'>
                    <p className='w-1/3 text-right p-1 m-1 ml-12'>
                        Selling Price :
                    </p>
                    <input
                        className='w-1/3 p-2'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className='flex gap-5 m-4'>
                    <p className='w-1/3 text-right p-1 m-1 ml-12'>
                        Launch Price :
                    </p>
                    <input
                        className='w-1/3 p-2'
                        value={launchPrice}
                        onChange={(e) => setLaunchPrice(e.target.value)}
                    />
                </div>
                <div className='flex gap-5 m-4'>
                    <p className='w-1/3 text-right p-1 m-1 ml-12'>
                        Charger Price :
                    </p>
                    <input
                        className='w-1/3 p-2'
                        value={chargerPrice}
                        onChange={(e) => setChargerPrice(e.target.value)}
                    />
                </div>
                <div className='flex gap-5 m-4'>
                    <p className='w-1/3 text-right p-1 m-1 ml-12'>
                        Total Items :
                    </p>
                    <input
                        className='w-1/3 p-2'
                        value={totalItems}
                        onChange={(e) => setTotalItems(e.target.value)}
                    />
                </div>
                <div className='flex gap-5 m-4'>
                    <p className='w-1/3 text-right p-1 m-1 ml-12'>
                        More Info URL :
                    </p>
                    <input
                        className='w-1/3 p-2'
                        value={infoUrl}
                        onChange={(e) => setinfoUrl(e.target.value)}
                    />
                </div>
                <div className='flex gap-5 m-4'>
                    <p className='w-1/3 text-right p-1 m-1 ml-12'>
                        Laptop Image :
                    </p>
                    <input
                        className='w-1/3 p-2'
                        value={cover}
                        onChange={(e) => setCover(e.target.value)}
                    />
                </div>
                {
                    formType === "update" &&
                    <button className='bg-red-500 text-slate-100 px-5 py-2 mr-5 text-xl active:bg-red-400 rounded-lg mt-5' onClick={() => closeEditMode()}>Discard</button>
                }
                <button className='bg-blue-500 text-slate-100 px-5 py-2 text-xl active:bg-blue-400 rounded-lg mt-5' onClick={() => setConfirmPopup(true)}>Preview</button>
            </div>

            {
                confirmPopup === true &&
                <div className='fixed top-0 left-0 backdrop-blur-sm bg-slate-900/20 w-screen h-screen flex justify-center items-center drop-shadow-lg z-20'>
                    <div className='bg-slate-100 rounded-lg w-72 h-fit'>
                        <p className='bg-slate-200 p-2 px-5 rounded-t-lg'> This Item will be added</p>
                        <p className='text-left m-1 ml-5'><b>Company :</b> {company}</p>
                        <p className='text-left m-1 ml-5'><b>Model Name :</b> {model}</p>
                        <p className='text-left m-1 ml-5'><b>Model Number :</b> {modelNumber}</p>
                        <p className='text-left m-1 ml-5'><b>Processor :</b> {processor}</p>
                        <p className='text-left m-1 ml-5'><b>Processor Gen :</b> {processorGen}</p>
                        <p className='text-left m-1 ml-5'><b>Ram Size :</b> {ram}</p>
                        <p className='text-left m-1 ml-5'><b>Ram Type:</b> {ramType}</p>
                        <p className='text-left m-1 ml-5'><b>Storage Size :</b> {storageSize}</p>
                        <p className='text-left m-1 ml-5'><b>Storage Type :</b> {storageType}</p>
                        <p className='text-left m-1 ml-5'><b>Selling Price :</b> {price}</p>
                        <p className='text-left m-1 ml-5'><b>Actual Price :</b> {launchPrice}</p>
                        <p className='text-left m-1 ml-5'><b>Charger Price :</b> {chargerPrice}</p>
                        <p className='text-left m-1 ml-5'><b>Total Items :</b> {totalItems}</p>
                        {
                            backlight === "Yes" && <p className='text-left m-1 ml-5'>Backlight Keyboard</p>
                        }
                        {
                            touchScreen === "Yes" && <p className='text-left m-1 ml-5'>TouchScreen Display</p>
                        }
                        <div className='w-full'>
                            <button onClick={() => setConfirmPopup(false)} className='bg-red-200 hover:bg-red-400 w-1/2 p-2 rounded-bl-lg'>Cancel</button>
                            <button onClick={() => handleSubmit()} className='bg-blue-200 hover:bg-blue-400 w-1/2 p-2 rounded-br-lg'>{formType === "add" ? "Submit" : "Update"}</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export { InputCollection }