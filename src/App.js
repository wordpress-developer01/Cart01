import logo from './logo.svg';
import './App.css';
import { products } from './data/data';
import { useState } from 'react';
import ProductsGrid from './components/ProductsGrid';
import Cart from './components/Cart';

function App() {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
       setCart((prev) => [...prev, product]);
    }

    const Remove = (remove) => {
      setCart((prev) => 
      prev.filter((a, index) => index !== remove)
      );
    }

  return (
    <div className='container'>
      <div className='flex'>
       <ProductsGrid  products={products} onAdd={addToCart}/>
      
       <Cart cart={cart} onRemove={Remove}/>
       </div>

       <h2>Корзина: {cart.length} товаров</h2>
    </div>
  );
}

export default App;
