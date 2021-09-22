import React from "react";
import {Link} from "react-router-dom"
import {useCart} from "../context/CartContext"

function Payment() {

    const {orderState, clear} = useCart()

    return(
        <div className="payment">
            <div className="contenedor-payment">
                <h1 className="pago-realizado">Pago realizado con éxito. ¡Gracias por su compra!</h1>
                <div className="id-fecha">ID de la orden: {orderState.IDOrder}</div>
                <div>Fecha: {orderState.date}</div>
                <div className="detalle">Detalle de la orden</div>
                <div>
                    {orderState.items[0].map(elem => 
                        <>
                            <div className="hijos-detalle-orden">
                            {elem.title} - ${elem.price} | {elem.quantity} Unidades
                            </div>
                        </>
                    )}
                </div>
                <div className="hijos-detalle-orden subtotal">Total: ${orderState.totalPrice} | {orderState.totalItems} Unidades</div>

                <div className="detalle">Información del comprador</div>
                <div className="comprador">{orderState.name}</div>
                <div className="comprador">{orderState.phone}</div>
                <div className="comprador">{orderState.email}</div>  
            </div>
            <Link to="/">
                        <button onClick={clear} className="btn-carrito btn btn-primary">Volver a la tienda</button>
            </Link>
        </div>
    )
}

export default Payment