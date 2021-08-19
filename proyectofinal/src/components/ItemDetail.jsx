import ItemCount from './ItemCount.js'

const handleAdd = (count) => {
    console.log(count)
  }

const ItemDetail = ({  title, description, price, imagen, stock }) => {
    return (
            <div class="card product-container">
                <img src={imagen} class="card-img-top" alt="" />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5> 
                    <p class="card-text">{description}</p>
                    <b className="product-price">${price}</b> 
                    <ItemCount stock={stock} initial={1} onAdd={handleAdd}></ItemCount>    
                </div>
            </div>

        
    )
}

export default ItemDetail