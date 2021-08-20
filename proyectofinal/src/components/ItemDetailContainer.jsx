import data from "../data/data";
import ItemDetail from "./ItemDetail";
import React, {useEffect, useState} from 'react';
import { useParams } from "react-router"


const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const {id} = useParams()

    
    useEffect(() => {
        const products = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(data)
                }, 2000)
            })
        }
        
        products().then((items) => {
            const product = items.find((product => product.id === id))

            setProduct(product)
            setLoading(false)
        })

    }, [])
    
    return (
        <>
            {loading ? <h2>Cargando Productos...</h2> : 
            <div class="col-2">
                <ItemDetail
                stock={product.stock} 
                imagen={product.imagen} 
                title={product.title} 
                price={product.price} 
                description={product.description}></ItemDetail>
            </div>
            }
        </>
    )
}

export default ItemDetailContainer