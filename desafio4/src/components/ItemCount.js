import { useState } from "react"

export default function ItemCount({ stock, initial, onAdd }) {

    const [count, setCount] = useState(1)

    return (
        <>
            <div class="row  item-row">
                <button class="boton col-1" onClick={() => setCount(count-1)}>-</button>
                    <div class="col-1 number">
                        {count}
                    </div>
                <button class="boton col-1" onClick={() => setCount(count+1)}>+</button>
            </div>
        </>
    )
}