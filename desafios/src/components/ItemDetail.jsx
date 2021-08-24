import ItemCount from './ItemCount.js';
import { useState } from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const ItemDetail = ({  title, description, price, imagen, stock }) => {
    
    const [itemCountVisible, setItemCountVisible] = useState(true)
    const [finishBuyVisible, setFinisBuyVisible] = useState(true)
    const [itemsCount, setItemsCount] = useState(0)

    const onAdd = (count) => {
        setItemsCount(count)
        }
    
    const onAddToCart = () => {
        setItemCountVisible(false)
        setFinisBuyVisible(false)

    }

    const onBuy = () => {
        console.log('finalice mi compra')
    }
 
    return (
            <div class="card product-container">
                <img src={imagen} class="card-img-top" alt="" />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5> 
                    <p class="card-text">{description}</p>
                    <b className="product-price">${price}</b> 
                    
                    {itemCountVisible && <ItemCount stock={stock} onAdd={onAdd} initial={1}></ItemCount>}

                    {finishBuyVisible && 
                    <>
                        <button class="btn btn-primary boton-add" onClick={onAddToCart}>Agregar al carrito</button>    
                    </>}

                    {!finishBuyVisible && 
                    <Link to="/cart"><button class="btn btn-primary boton-add" onClick={onBuy}>Terminar Compra</button></Link>
                    }
                </div>
            </div>

        
    )
}

export default ItemDetail