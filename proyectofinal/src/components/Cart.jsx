import React, {useEffect} from "react"
import {Link} from "react-router-dom";
import {useCart} from '../context/CartContext'
import OrderForm from './OrderForm'

function CartPrueba() {

    const {removeItem, products, clear, totalItems, totalPrice} = useCart()
    
    return (
        <div className="bloque-producto">
            {products.length > 0 ?
            <>
                {products.map(elem => 
                <>  
                    <div class="contenedor-productos">
                        <h1>Carrito de compras</h1>
                        <div class="row">
                            <h4 class="col carrito-title">{elem.title} - Cantidad: {elem.quantity} unidade(s)</h4>
                            <div class="col align-center">
                                <h4>${elem.price * elem.quantity}</h4>
                                <button class="btn btn-primary" onClick={() => removeItem(elem)}>Eliminar</button>
                            </div>
                        </div>
                    </div>
                </>)}
                <h4 class="carrito-title">Total: ${totalPrice()}</h4>
                <div className="contenedor-pagar-vaciar">
                    <button className="btn-carrito btn btn-primary">Avanzar con el pago</button>
                    <button className="btn-carrito btn btn-primary" onClick={() => clear(products.elem)}>Vaciar carrito</button>
                    <div className="contenedor-pagar-vaciar">
                    <OrderForm/>
                </div>
                </div>
            </> : 
                <>
                    <h3>No hay productos en tu carrito :(</h3>

                    <Link to="/">
                        <button className="btn btn-primary">Volver al catalogo</button>
                    </Link>
                </>
            }   
        </div>
    )
}


export default CartPrueba