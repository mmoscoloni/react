export default function Item({ title, description, price }) {
    
    return(
    <div className="card">
        <div className="title">{title}</div>
        <div className='description'>{description}</div>
        <div className='price'>{price}</div>
    </div>
    );
}