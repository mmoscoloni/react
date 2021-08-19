import ItemCount from './ItemCount.js'
import { Link } from 'react-router-dom'

const handleAdd = (count) => {
    console.log(count)
  }

const Item = ({  title, description, price, imagen, stock, categoria, id }) => {
    return (
            <Link to={`/${categoria}/${id}`}>
                <div class="card product-container">
                    <img src={imagen} class="card-img-top" alt="" />
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5> 
                        <p class="card-text">{description}</p>
                        <b className="product-price">${price}</b> 
                        <ItemCount stock={stock} initial={1} onAdd={handleAdd}></ItemCount>    
                    </div>
                </div>
            </Link>
        
    )
}

export default Item


