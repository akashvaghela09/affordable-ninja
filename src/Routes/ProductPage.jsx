import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from "react-router-dom";
import { ItemCard } from '../Components/ItemCard';
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { Spinner } from '../Components/Spinner';
import { StillCantFind } from '../Components/StillCantFind';
import { data } from "./../data";

const ProductPage = () => {
    const navigate = useNavigate();
    const { brand } = useParams();
    const { brandList } = data;
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
    }, [brand]);

    return (
        <div className='relative min-h-screen h-fit flex flex-col items-center bg-slate-200'>

            <div className='p-5 w-full  bg-blue-200 text-slate-900'>
                {
                    brand === "all" ?
                        <p className='text-2xl w-full'>Browse and buy Laptops at <b>Most Affordable</b> price</p>
                        :
                        <p className='text-2xl w-full'>Buy <b>{brand.toUpperCase()}</b> Laptop at most affordable price</p>
                }
            </div>
            <div className='w-full flex justify-start'>
                <div className='w-1/5 bg-slate-100 border-b-[1px] border-slate-300'>
                    {
                        brandList.length > 0 &&
                        brandList.map((el, index) => {
                            return <div key={index} onClick={() => navigate(el.to)} className="cursor-pointer flex justify-between items-center bg-slate-100 hover:bg-slate-200 border-b-[1px] border-r-[1px] border-slate-300">
                                <p className='p-2 text-xl font-semibold'>{el.name}</p>
                            </div>

                        })
                    }
                </div>
                <div className='w-[70%] mb-14 grid grid-cols-2 justify-items-center'>
                    {
                        laptopList.length > 0 &&
                        laptopList.map((el, index) => {
                            return <Link to={`/${brand}/${el.id}`} key={index}><ItemCard data={el} key={index} /></Link>
                        })
                    }
                </div>
            </div>
            {
                loading === true && <Spinner />
            }
            <StillCantFind />
        </div>
    )
}

export { ProductPage }