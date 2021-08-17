
const Product = (props) => {

    const {id, title, price, description, category, image} = props.obj

    return(
        <div>
            <h2>{id}</h2>
            <img src={image} alt={title} />
            <h1>{title}</h1>
            <p>{price}</p>
            <p>{description}</p>
        </div>
    )
}

export default Product