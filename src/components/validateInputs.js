const validate = (values) => {
    let errors = {}

    if(!values.title && !values.imageurl && !values.price && !values.category && !values.description){
        errors.allEmpty = "All fields must be completed"
    } else {
        if (!values.title) {
            errors.title = "Title is required"
        }

        if (!values.imageurl) {
            errors.imageurl = "Image URL is required"
        }

        if (!values.price) {
            errors.price = "Price is required"
        }
        
        if (!values.category) {
            errors.category = "Category is required"
        }

        if (!values.description) {
            errors.description = "Description is required"
        }

    }



    return errors
}

export default validate