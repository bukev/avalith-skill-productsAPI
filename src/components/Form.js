import { useState } from "react"
import validate from "./validateInputs"

const Form = (props) => {

    const [errors, setErrors] = useState({})
    const [formState, setFormState] = useState({
        title: '',
        imageurl: '',
        price: '',
        category: '',
        description: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        
        setErrors(validate(formState))
        
        if (!errors) {
            props.newProduct(formState)
        }
    }
    
    const handleInputChange = (event) => {

        setFormState({
            ...formState,   
            [event.target.name]: event.target.value
        });
    }


    return(
        <div className="form">
            <h1>New Product</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Title</p>
                    <input onChange={handleInputChange} name="title" type="text" />
                    {errors.title && <h4>{errors.title}</h4>}
                </label>
                <label>
                    <p>Image URL</p>
                    <input onChange={handleInputChange} name="imageurl" type="text" />
                    {errors.imageurl && <h4>{errors.imageurl}</h4>}
                </label>
                <label>
                    <p>Price</p>
                    <input onChange={handleInputChange} name="price" type="number" min="0" max="999999" />
                    {errors.price && <h4>{errors.price}</h4>}
                </label>
                <label>
                    <p>Category</p>
                    <input onChange={handleInputChange} name ="category" type="text" />
                    {errors.category && <h4>{errors.category}</h4>}
                </label>
                <label>
                    <p>Description</p>
                    <input onChange={handleInputChange} name="description" type="textarea" />
                    {errors.description && <h4>{errors.description}</h4>}
                </label>
                
                {errors.allEmpty && <h4>{errors.allEmpty}</h4>}
                <input type="submit" value="Submit" />
            </form>
      
        </div>
    )
}

export default Form