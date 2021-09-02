import data from "../data/data";
import Item from "./Item";
import React, {useEffect, useState} from 'react'
import { Firebase } from "../firebase/index";
import { useParams } from "react-router"


const ItemList = () => {
    
    const [items, setItems] = useState([]);



    useEffect(() => {
        Firebase.getAll('items').then(docs => {
            const arr = [];
            docs.forEach(item => {
            const data = item.data();
            arr.push(
                <Item
                key={item.id}
                id={item.id}
                title={data.title}
                price={data.price}
                imagen={data.imagen}
                />
            );
        });
    

    setItems(arr);
});
}, []
);
    
    return (
        <>
        {items}
        </>
    )
}

export default ItemList