import { useState } from "react"

const Form = () => {

    const [formState, setFormState] = useState({})

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target.value)
    }
    
    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setFormState({
            [name]: value
        });
    }
    

    return(
        <div className="form">
            <h1>New Product</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Title</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Image URL</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Price</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Category</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Description</p>
                    <input type="textarea" />
                </label>
                

                <input type="submit" value="Submit" />
            </form>
      
        </div>
    )
}

export default Form