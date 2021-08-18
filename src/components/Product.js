import './product.css'

const Product = (props) => {

    const {id, title, price, description, category, image} = props.obj

    return(
        <div className="product">
            <img className="product-image" src={image} alt={title} />
            <div className="product-info">
                <p className="category">{category}</p>
                <p className="product-title">{title}</p>
                <hr />
                <p className="price">${price}</p>
                <p className="description">{description}</p>
            </div>
        </div>
    )
}

export default Product