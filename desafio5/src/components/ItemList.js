import Item from './Item'

export default function ItemList() {
    
    const items = [
        {
            id: 1,
            title: 'Curso Matematica',
            description: 'Lorem Ipsum',
            price: 10,
            pictureUrl: 'https://ichef.bbci.co.uk/news/800/cpsprodpb/164EE/production/_109347319_gettyimages-611195980.jpg',
        }        
    ]

    const task = new Promise((resolve, reject) => {
        setTimeout(() => {
        return(items)    
        }, 2000)
        resolve(true)
      })
      
      task.then( result => {
        console.log(result)
      } )
    
    const ItemList = items.map(item => <Item title={item.title} description={item.description} price={item.price}></Item>)
    
    return (
    <>
        <div className="container">
            {ItemList}
        </div>
    </>
    // vista utilizando array de items y un map
    )
}