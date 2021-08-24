import ItemDetail from "./ItemDetail";
import { useEffect } from "react";

const getItems = () => {

    return fetch('https://api.mercadolibre.com/sites/MLA/search?q=pescado')
    .then(response => {
        return response.json()
    })
}


export default function ItemListContainer() {
    
    useEffect(() => {
        getItems().then(data => console.log(data))
    }, [])
    
    console.log(getItems())
    return (
        <div className="container">
            <ItemDetail
            title="Curso Matematica"
            description="Curso de Matematica description"
            price="123"
            ></ItemDetail>
        </div>
    )
} 