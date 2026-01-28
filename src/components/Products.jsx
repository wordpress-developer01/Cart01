import React from 'react'

export const Products = ({ product, onAdd }) => {
  return (
    <div className='card'>
      <div className="intem">
        <span><img src={product.imageUrl} alt="li" width="100px" />
     <h3>{product.name}</h3></span>
      <p>{product.price}$</p>
       <button onClick={() => onAdd(product)}>Add to Cart</button>
       </div>
    </div>
  );
}
