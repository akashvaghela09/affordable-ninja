import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from "react-router-dom";
import { ItemCard } from '../Components/ItemCard';
import { BiArrowBack } from "react-icons/bi";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { Spinner } from '../Components/Spinner';

const ProductPage = () => {
    const navigate = useNavigate();
    const { brand } = useParams();
    const [laptopList, setLaptopList] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleFilterBrand = async () => {
        setLoading(true)
        let tempList = []

        const db = getFirestore()
        const stockRef = collection(db, "stock")
        let stockSnapshot = await getDocs(stockRef)

        stockSnapshot.docs.forEach((doc) => {
            tempList.push({ ...doc.data(), id: doc.id })
        })

        if (brand === "all") {
            setLaptopList([...tempList]);
            setLoading(false);
            return;
        }

        let newFilterList = [];
        for (let i = 0; i < tempList.length; i++) {
            if (brand.toUpperCase() === tempList[i].company.toUpperCase()) {
                newFilterList.push(tempList[i])
            }
        }

        setLaptopList([...newFilterList])
        setLoading(false)
    }

    useEffect(() => {
        handleFilterBrand()
    }, []);
    return (
        <div className='relative min-h-screen h-fit flex flex-col items-center bg-slate-200 pb-10'>
            <div className='fixed top-20 left-3 p-1 rounded-md cursor-pointer drop-shadow-md bg-slate-50 flex justify-center items-center' onClick={() => navigate("/")}>
                <BiArrowBack className='mr-2' /> Go Back
            </div>
            <div className='p-5 w-full  bg-blue-200 text-slate-900'>
                {
                    brand === "all" ?
                        <p className='text-2xl w-full'>Browse and buy Laptops at <b>Most Affordable</b> price</p>
                        :
                        <p className='text-2xl w-full'>Buy <b>{brand.toUpperCase()}</b> Laptop at most affordable price</p>
                }
            </div>
            <div className='w-4/6 grid grid-cols-2 justify-items-center'>
                {
                    laptopList.length > 0 &&
                    laptopList.map((el, index) => {
                        return <Link to={`/${brand}/${el.id}`} key={index}><ItemCard data={el} key={index} /></Link>
                    })
                }
            </div>
            {
                loading === true && <Spinner />
            }
        </div>
    )
}

export { ProductPage }