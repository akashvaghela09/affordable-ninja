import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Spinner } from '../Components/Spinner';
import { ItemDetailsCard } from '../Components/ItemDetailsCard';
import { query, where, collection, getDocs, getFirestore } from "firebase/firestore";

const DetailsPage = () => {

    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(false)

    const { id } = useParams();

    const getItem = async () => {
        setLoading(true)

        const db = getFirestore()
        const stockRef = collection(db, "stock")

        const q = query(
            stockRef, 
            where("visible", "==", true), 
            where("uuid", "==", id)
        );

        const querySnapshot = await getDocs(q);
        let tempItem = querySnapshot.docs[0].data();
        setItem({ ...tempItem})

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