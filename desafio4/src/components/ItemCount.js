import { useState } from "react"

export default function ItemCount({ stock, initial, onAdd }) {

    const [count, setCount] = useState(initial)

    const handleStock = () => {
        if (stock > count) {
            console.log("mayor")
        }
    }

    return (
        <>
            <div class="row  item-row">
                <button class="boton col-1" onClick={() => setCount(count-1)}>-</button>
                    <div class="col-1 number">
                        {count}
                    </div>
                <button class="boton col-1" id="plus-boton" onClick={() => setCount(count+1)}>+</button>
                <div class="container-add">
                    <button class="boton-add" onClick={() => onAdd(count)}>Agregar al carrito</button>
                </div>
            </div>
        </>
    )
}