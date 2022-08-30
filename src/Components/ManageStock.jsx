import React, { useEffect, useState } from 'react'
import { collection, getDocs, updateDoc, deleteDoc, doc, getFirestore } from "firebase/firestore";
import { Spinner } from './Spinner';
import { MdDelete, MdVisibility, MdVisibilityOff } from "react-icons/md";
import { IoAdd, IoRemove } from "react-icons/io5";
import { BsFillPencilFill } from "react-icons/bs";
import { Form } from './Form';

const ManageStock = () => {

    const [stockList, setStockList] = useState([])
    const [loading, setLoading] = useState(false)
    const [editMode, setEditMode] = useState(false)
    const [editId, setEditId] = useState("");

    const db = getFirestore()
    const stockRef = collection(db, "stock")

    const getStockList = async () => {
        setLoading(true)
        let tempList = []


        let stockQuery = await getDocs(stockRef)

        stockQuery.forEach(doc => {
            tempList.push({ ...doc.data(), id: doc.id })
        })

        setStockList([...tempList])
        setLoading(false)
    }

    const updateUnitCount = (id, total, arg) => {
        setLoading(true)

        if(arg <= 0){
            setLoading(false)
            return;
        }
        const itemRef = doc(db, "stock", id)

        updateDoc(itemRef, { total: total + arg })
            .then(() => {
                getStockList()
                setLoading(false)
            })
            .catch((err) => {
                console.log(err);
                setLoading(false)
            })
    }

    const deleteItem = (id) => {
        setLoading(true)
        const itemRef = doc(db, "stock", id)

        deleteDoc(itemRef)
            .then(() => {
                getStockList()
                setLoading(false)
            })
            .catch((err) => {
                console.log(err);
                setLoading(false)
            })
    }

    const updateItem = (id) => {
        setEditId(id)
        setEditMode(true)
    }

    const closeEditMode = () => {
        setEditMode(false)
        setEditId("")
        getStockList()
    }

    const toggleVisibility = (id, para) => {
        setLoading(true)
        const itemRef = doc(db, "stock", id)

        updateDoc(itemRef, { visible: para })
            .then(() => {
                getStockList()
                setLoading(false)
            })
            .catch((err) => {
                console.log(err);
                setLoading(false)
            })
    }

    useEffect(() => {
        getStockList()
    }, []);

    return (
        <div className='h-full w-full flex flex-col items-center'>
            {
                editMode === false &&
                <p className='w-full p-5 text-3xl bg-blue-300'>
                    Manage your stock
                </p>
            }

            {
                editMode === true ?
                    <Form
                        type="update"
                        editId={editId}
                        closeEditMode={closeEditMode}
                    />
                    :
                    <div className='w-full p-4 flex flex-col items-center mt-10 mb-20'>
                        <div className='w-4/5 border-b-[1px] border-slate-500 flex p-2 rounded-t-lg bg-slate-200'>
                            <div className='flex w-1/3 items-center'>
                                <p className='text-xl font-bold mx-2'>Item</p>
                            </div>
                            <div className='w-1/3 flex justify-center'>
                                <p className='text-xl font-bold'>Available Units</p>
                            </div>
                        </div>
                        {
                            stockList.length > 0 &&
                            stockList.map((el, index) => {
                                return (
                                    <div
                                        className={index === stockList.length - 1 ?
                                            'w-4/5 flex p-2 bg-slate-100 rounded-b-lg' :
                                            'w-4/5 flex p-2 bg-slate-100 border-b-[1px] border-slate-400'
                                        } key={index} >
                                        <div className='flex flex-col w-1/3 items-center'>
                                            <p className='ml-3 w-full text-left font-bold'>{el.company} {el.model} {el.modelNumber}</p>
                                            <p className='ml-3 w-full text-left'>{el.specs.processor} {el.specs.processorGen} Gen</p>
                                            <p className='ml-3 w-full text-left'>{el.specs.ram} {el.specs.ramType}  + {el.specs.storage} {el.specs.storageType}</p>
                                        </div>
                                        <div className='w-1/3 flex justify-center items-start'>
                                            <button className='p-1 px-3 mx-1 rounded-md bg-slate-200 active:bg-slate-300'>
                                                <IoAdd onClick={() => updateUnitCount(el.id, el.total, 1)} className='text-xl' />
                                            </button>
                                            <p className='font-bold text-xl w-20'>{el.total}</p>
                                            <button className='p-1 px-3 mx-1 rounded-md bg-slate-200 active:bg-slate-300'>
                                                <IoRemove onClick={() => updateUnitCount(el.id, el.total, -1)} className='text-xl' />
                                            </button>
                                        </div>
                                        <div className='w-1/3 flex items-start justify-end'>
                                            <BsFillPencilFill onClick={() => updateItem(el.id)} className='text-2xl mx-3 text-blue-400 hover:text-blue-700 cursor-pointer' />
                                            {
                                                el.visible === true ?
                                                    <MdVisibility onClick={() => toggleVisibility(el.id, false)} className='text-2xl mx-3 text-slate-400 hover:text-slate-700 cursor-pointer' />
                                                    :
                                                    <MdVisibilityOff onClick={() => toggleVisibility(el.id, true)} className='text-2xl mx-3 text-slate-400 hover:text-slate-700 cursor-pointer' />
                                            }
                                            <MdDelete onClick={() => deleteItem(el.id)} className='text-2xl mx-3 text-red-400 hover:text-red-700 cursor-pointer' />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>}
            {
                loading === true && <Spinner />
            }
        </div>
    )
}

export { ManageStock }