import React, { useState, useEffect } from 'react';
import { IoMdAdd } from "react-icons/io";
import { GoPackage } from "react-icons/go";
import { FaEraser } from "react-icons/fa";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { Form } from "../Components/Form";
import { ManageStock } from "../Components/ManageStock";
import { Spinner } from '../Components/Spinner';
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { clearData, loadData, saveData } from '../Utils/localstorage';

const Admin = () => {
    const [auth, setAuth] = useState(false);

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)


    const [page, setPage] = useState("add");

    const checkAuth = async () => {
        setLoading(true)
        let savedUsername = loadData("username");
        let savedPassword = loadData("password");

        if (
            savedUsername === null ||
            savedPassword === null ||
            savedUsername === undefined ||
            savedPassword === undefined ||
            savedUsername === "" ||
            savedPassword === ""
        ) {
            saveData("username", "")
            saveData("password", "")

            setLoading(false)
            return;
        }

        const db = getFirestore()
        const userRef = collection(db, "users")

        let snapshot = await getDocs(userRef)
        let admin = snapshot.docs[0].data()

        if (savedUsername === admin.username && savedPassword === admin.password) {
            setAuth(true)
            setLoading(false)
        } else {
            setLoading(false)
            alert("Login Attempt Failed !!")
        }
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleLogin()
        }
    }

    const handleLogin = async () => {
        setLoading(true)

        const db = getFirestore()
        const userRef = collection(db, "users")

        let snapshot = await getDocs(userRef)
        let admin = snapshot.docs[0].data()

        if (username === admin.username && password === admin.password) {
            setAuth(true)
            saveData("username", username)
            saveData("password", password)
            setLoading(false)
        } else {
            setLoading(false)
            alert("Login Attempt Failed !!")
        }
    }

    const handleLogout = () => {
        setUsername("")
        setPassword("")
        setAuth(false)
        clearData()
    }

    useEffect(() => {
        checkAuth()
    }, []);

    return (
        <>
            {auth === true ?
                <div className='min-h-screen h-fit flex'>
                    <div className='w-1/5 bg-blue-400'>
                        <div className='sticky top-20 left-0'>
                            <label
                                className='flex items-center m-2 drop-shadow-md rounded-md bg-slate-200 hover:bg-slate-300 cursor-pointer'
                                onClick={() => setPage("add")}
                                style={{ border: page === "add" ? "3px solid black" : "3px solid transparent" }}
                            >
                                <IoMdAdd className='text-3xl m-2' />
                                <p className='mx-2 text-xl'>Add Item</p>
                            </label>
                            <label
                                className='flex items-center m-2 drop-shadow-md rounded-md bg-slate-200 hover:bg-slate-300 cursor-pointer'
                                onClick={() => setPage("manage")}
                                style={{ border: page === "manage" ? "3px solid black" : "3px solid transparent" }}
                            >
                                <GoPackage className='text-3xl m-2' />
                                <p className='mx-2 text-xl'>Manage Stock</p>
                            </label>
                            <a
                                href="https://www.remove.bg/" target="_blank"
                                rel="noreferrer"
                                className='flex items-center m-2 drop-shadow-md rounded-md bg-slate-200 hover:bg-slate-300 cursor-pointer'
                                style={{ border: "3px solid transparent" }}
                            >
                                <FaEraser className='text-3xl m-2' />
                                <p className='mx-2 text-xl'>Remove BG</p>
                            </a>
                            <a
                                href="https://imgbb.com/"
                                target="_blank"
                                rel="noreferrer"
                                className='flex items-center m-2 drop-shadow-md rounded-md bg-slate-200 hover:bg-slate-300 cursor-pointer'
                                style={{ border: "3px solid transparent" }}
                            >
                                <AiOutlineCloudUpload className='text-3xl m-2' />
                                <p className='mx-2 text-xl'>Upload Image</p>
                            </a>
                        </div>
                    </div>
                    <div className='grow'>
                        {
                            page === "add" && <Form type="add"/>
                        }
                        {
                            page === "manage" && <ManageStock />
                        }
                    </div>
                </div>
                :
                <div className='min-h-screen h-fit flex justify-center items-center'>
                    <div className='bg-slate-200 rounded-lg w-1/2 h-96 flex flex-col items-center justify-center'>
                        <div className='w-1/2 mb-8'>
                            <p className='text-3xl text-left'>Username</p>
                            <input
                                className='w-full text-2xl p-2'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className='w-1/2 mb-8'>
                            <p className='text-3xl text-left'>Password</p>
                            <input
                                className='w-full text-2xl p-2'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onKeyPress={(e) => handleKeyPress(e)}
                            />
                        </div>
                        <button onClick={() => handleLogin()} className='bg-blue-500 text-2xl w-1/2 p-3 mt-3 rounded-lg active:bg-blue-400 text-slate-100'>Login</button>
                    </div>
                </div>}
            {
                loading === true && <Spinner />
            }

            {
                auth === true && <p onClick={() => handleLogout()} className='absolute top-3 right-10 text-lg font-bold z-20 cursor-pointer hover:bg-slate-300 p-2 px-4 rounded-lg'>Logout</p>
            }
        </>
    )
}

export { Admin }