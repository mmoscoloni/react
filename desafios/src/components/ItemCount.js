import React,  { useState } from "react";
import { useEffect } from "react";

export default function ItemCount({ stock, initial, onAdd = () => {} }) {

    const [count, setCount] = useState(initial)

    const handleStock = {
        sumaStock:() =>{
            if(stock === 0) {
                alert('No hay mas stock')
            } else {
                setCount(count+1)
            }
        },

        restaStock:() => {
            if (count === 0) {
                alert('no podes comprar negativo')
            } else {
                setCount(count-1)
            }
        }
    }

    useEffect(() => {
        onAdd(count)
    }, [count])

    return (
        <>
            <div class="row  item-row">
                <button class="boton col-1" onClick={handleStock.restaStock}>-</button>
                    <div class="col-1 number">
                        {count}
                    </div>
                <button class="boton col-1" id="plus-boton" onClick={handleStock.sumaStock}>+</button>
            </div>
        </>
    )
}