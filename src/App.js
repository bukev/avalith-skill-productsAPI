import { useEffect, useState } from 'react';
import './App.css';
import Product from './components/Product';


function App() {

  const [productList, setProductList] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=4')
      .then(res=>res.json())
      .then(json=>{
        setProductList(json.map(p => p))
      })
    }, [productList])
    
  
  return (
    <div className="catalogue">
      {productList.map(p=> {
        return( <Product obj={p} /> )    
      })}
    </div>
  );
}

export default App;
