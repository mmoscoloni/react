import ItemList from "./ItemList"
import ItemDetailContainer from "./ItemDetailContainer"
import { useParams } from "react-router"

const ItemListContainer = (props) => {

    return (
        
        <div class="row">
            <h1>{props.titulo}</h1>
            <ItemList></ItemList>
        </div>
    )
}

export default ItemListContainer