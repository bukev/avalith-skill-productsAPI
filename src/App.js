import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import Product from './components/Product';


function App() {

  const [productList, setProductList] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(json=>{
        setProductList(json.map(p => p))
      })
    }, [productList])
    
  
  return (
    <div className="app">

      <Form />

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
