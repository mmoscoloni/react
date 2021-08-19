import data from "../data/data";
import Item from "./Item";
import React, {useEffect, useState} from 'react'

const ItemList = () => {
    
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const products = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(data)
                }, 2000)
            })
        }
        
        products().then((items) => {
            setProducts(items)
            setLoading(false)
        })

    }, [])
    
    return (
        <>
            {loading ? <h2>Cargando Productos...</h2> : 
            products.map((product) => 
            <div class="col-2">
                <Item key={product.id} id={product.id} categoria={product.categoria} stock={product.stock} imagen={product.imagen} title={product.title} price={product.price} description={product.description}></Item>
            </div>
            )}
        </>
    )
}

export default ItemList