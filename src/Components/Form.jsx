import React, { useState, useEffect } from 'react';
import { InputCollection } from './InputCollection';
import { collection, addDoc, getFirestore, getDoc, doc, updateDoc } from "firebase/firestore";
import { Spinner } from './Spinner';

const Form = (data) => {
    const {
        type,
        editId,
        closeEditMode
    } = data;

    const db = getFirestore();

    const [loading, setLoading] = useState(false)

    const [company, setCompany] = useState("");
    const [model, setModel] = useState("");
    const [modelNumber, setModelNumber] = useState("");
    const [price, setPrice] = useState("");
    const [launchPrice, setLaunchPrice] = useState("");
    const [infoUrl, setinfoUrl] = useState("");
    const [totalItems, setTotalItems] = useState("");
    const [backlight, setBacklight] = useState("");
    const [processor, setProcessor] = useState("");
    const [processorGen, setProcessorGen] = useState("");
    const [ram, setRam] = useState("");
    const [ramType, setRamType] = useState("");
    const [storageSize, setStorageSize] = useState("");
    const [storageType, setStorageType] = useState("");
    const [touchScreen, setTouchScreen] = useState("");
    const [chargerPrice, setChargerPrice] = useState("");
    const [cover, setCover] = useState("");
    const [imageList, setImageList] = useState([]);
    const [videoList, setVideoList] = useState([]);
    const [visible, setVisible] = useState(true);

    const handleFormSubmit = async () => {
        setLoading(true)

        let itemObj = {
            "company": company,
            "model": model,
            "modelNumber": modelNumber,
            "launchPrice": +launchPrice,
            "price": +price,
            "cover": "",
            "images": [],
            "videos": [],
            "infoUrl": infoUrl,
            "total": +totalItems,
            "chargerPrice": +chargerPrice,
            "visible": visible,
            "specs": {
                "backlight": backlight === "Yes" ? true : false,
                "processor": processor,
                "processorGen": processorGen,
                "ram": ram,
                "ramType": ramType,
                "storage": storageSize,
                "storageType": storageType,
                "touchscreen": touchScreen === "Yes" ? true : false
            }
        }

        

        if(type === "add"){
            const stockRef = collection(db, "stock")
            await addDoc(stockRef, itemObj)
        }
        
        if(type === "update"){
            console.log("Inside update ...");
            console.log(itemObj)
            const itemRef = doc(db, "stock", editId)
            await updateDoc(itemRef, itemObj)
            closeEditMode()
        }
        
        setLoading(false)
    }

    const fillForm = async () => {
        setLoading(true)
        const itemRef = doc(db, "stock", editId)

        let item = await getDoc(itemRef, editId)
        let editItem = item.data()

        setCompany(editItem.company)
        setModel(editItem.model)
        setModelNumber(editItem.modelNumber)
        setLaunchPrice(editItem.launchPrice)
        setPrice(editItem.price)
        setCover(editItem.cover)
        // setImageList([...editItem.images])
        // setVideoList([...editItem.videos])
        setinfoUrl(editItem.infoUrl)
        setTotalItems(editItem.total)
        setChargerPrice(editItem.chargerPrice)
        setVisible(editItem.visible)
        setBacklight(editItem.specs.backlight === true ? "Yes" : "No")
        setProcessor(editItem.specs.processor)
        setProcessorGen(editItem.specs.processorGen)
        setRam(editItem.specs.ram)
        setRamType(editItem.specs.ramType)
        setStorageSize(editItem.specs.storage)
        setStorageType(editItem.specs.storageType)
        setTouchScreen(editItem.specs.touchScreen === true ? "Yes" : "No")

        setLoading(false)
    }

    useEffect(() => {
        if (type === "update") {
            fillForm()
        }
    }, []);

    return (
        <div className='h-full w-full flex flex-col items-center'>
            <InputCollection
                formType={type}
                handleFormSubmit={handleFormSubmit}
                closeEditMode={closeEditMode}

                company={company}
                model={model}
                modelNumber={modelNumber}
                price={price}
                launchPrice={launchPrice}
                infoUrl={infoUrl}
                totalItems={totalItems}
                backlight={backlight}
                processor={processor}
                processorGen={processorGen}
                ram={ram}
                ramType={ramType}
                storageSize={storageSize}
                storageType={storageType}
                touchScreen={touchScreen}
                chargerPrice={chargerPrice}
                cover={cover}

                setCompany={setCompany}
                setModel={setModel}
                setModelNumber={setModelNumber}
                setPrice={setPrice}
                setLaunchPrice={setLaunchPrice}
                setinfoUrl={setinfoUrl}
                setTotalItems={setTotalItems}
                setBacklight={setBacklight}
                setProcessor={setProcessor}
                setProcessorGen={setProcessorGen}
                setRam={setRam}
                setRamType={setRamType}
                setStorageSize={setStorageSize}
                setStorageType={setStorageType}
                setTouchScreen={setTouchScreen}
                setChargerPrice={setChargerPrice}
                setCover={setCover}
            />
            {
                loading === true && <Spinner />
            }
        </div>
    )
}

export { Form }