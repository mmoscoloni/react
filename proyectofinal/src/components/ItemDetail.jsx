import ItemCount from './ItemCount.js';
import { useState } from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { useCart } from "../context/CartContext";


const ItemDetail = ({ objeto }) => {

    const {addItem} = useCart()
    
    const [itemCountVisible, setItemCountVisible] = useState(true)
    const [finishBuyVisible, setFinisBuyVisible] = useState(true)

    const [itemsCount, setItemsCount] = useState(0)

    const onAdd = (count) => {
        setItemsCount(count)
        }
    
    const onAddToCart = (item, quantity) => {
        addItem(item, quantity)
        setItemCountVisible(false)
        setFinisBuyVisible(false)

    }

    const onBuy = () => {
        console.log('finalice mi compra')
    }
 
    return (
            <div class="card product-container">
                <img src={objeto.imagen} class="card-img-top" alt="" />
                <div class="card-body">
                    <h5 class="card-title">{objeto.title}</h5> 
                    <p class="card-text">{objeto.description}</p>
                    <b className="product-price">${objeto.price}</b> 
                    
                    {itemCountVisible && <ItemCount stock={objeto.stock} onAdd={onAdd} initial={1}></ItemCount>}

                    {finishBuyVisible && 
                    <>
                        <button class="btn btn-primary boton-add" onClick={() => onAddToCart(objeto, itemsCount)}>Agregar al carrito</button>    
                    </>}

                    {!finishBuyVisible && 
                    <Link to="/cart"><button class="btn btn-primary boton-add" onClick={onBuy}>Terminar Compra</button></Link>
                    }
                </div>
            </div>

        
    )
}

export default ItemDetail