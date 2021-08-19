import React,  { useState } from "react"

const ItemCount = (props) => {
      
    const onAdd = props.onAdd
    const [stock, setStock] = useState(props.stock)
    const [count, setCount] = useState(props.initial)

    const handleStock = {
        sumaStock:() =>{
            if(stock === 0) {
                alert('No hay mas stock')
            } else {
                setCount(count+1)
                setStock(stock-1)
            }
        },

        restaStock:() => {
            if (count === 0) {
                alert('no podes comprar negativo')
            } else {
                setCount(count-1)
                setStock(stock+1)
            }
        }
    }

    return (
        <>
            <div class="row  item-row">
                <button class="boton col-1" onClick={handleStock.restaStock} disabled={stock === '0'}>-</button>
                    <div class="col-1 number">
                        {count}
                    </div>
                <button class="boton col-1" id="plus-boton" disabled={stock === '0'} onClick={handleStock.sumaStock}>+</button>
            </div>
            <div className="container-add">
                    <p>¡Apurate! Solo quedan {stock} restantes!</p>
                    <button class="btn btn-primary boton-add" disabled={stock === '0'} onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
            
        </>
    )
}

export default ItemCount