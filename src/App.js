import { useEffect, useState } from 'react';
import './App.css';
import Product from './components/Product';


function App() {

  const [productList, setProductList] = useState([])
  const [formState, setFormState] = useState({})

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(json=>{
        setProductList(json.map(p => p))
      })
    }, [productList])
    
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

  return (
    <div className="app">

      <div className="form">
        <h1>New Product</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Title</p>
            <input type="text" />

          </label>
          <input type="submit" value="Submit" />
        </form>
        
      </div>

      <div className="catalogue">
      <h1>Catalogue</h1>
        {productList.map(p=> {
          return( <Product productObj={p} /> )    
        })}
      </div>

    </div>
  );
}

export default App;
