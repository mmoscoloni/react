import data from "../data/data";
import ItemDetail from "./ItemDetail";
import React, {useEffect, useState} from 'react';
import { Firebase } from '../firebase/index';
import { useParams } from "react-router"


const ItemDetailContainer = () => {
    const [itemDom, setItemDom] = useState();
    const { itemId } = useParams();


    useEffect(() => {
        Firebase.get(`items/${itemId}`).then(res => {
            const item = res.data();
        setItemDom(
        <ItemDetail
            id={res.id}
            objeto={item}
        />
        );
        });
    }, []);

    return (
        <>
            {itemDom}
        </>
    )
}

export default ItemDetailContainer