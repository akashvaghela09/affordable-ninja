import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { data } from "../data";
import { Spinner } from '../Components/Spinner';
import { ItemDetailsCard } from '../Components/ItemDetailsCard';
import { query, where, collection, getDocs, getFirestore } from "firebase/firestore";
const DetailsPage = () => {
    const { stock } = data;

    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(false)

    const { brand, id } = useParams();

    const getItem = async () => {
        setLoading(true)
        let tempList = []

        const db = getFirestore()
        const stockRef = collection(db, "stock")
       
        let stockSnapshot = await getDocs(stockRef)

        stockSnapshot.docs.forEach((doc) => {
            if(doc.id === id){
                setItem({ ...doc.data(), id: doc.id })
                return;
            }
        })

        setLoading(false)
    }

    useEffect(() => {
        getItem()
    }, []);

    return (
        <div className='bg-slate-100'>
            {
                loading === true ? <Spinner /> : <ItemDetailsCard data={item} />
            }
        </div>
    )
}

export { DetailsPage }