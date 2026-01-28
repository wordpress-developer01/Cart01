import React from 'react'

const Cart = ({ cart, onRemove }) => {

    if(!cart || cart.length === 0) {
        return <p>Cart empty</p>;
    }

    const totalPrice = cart.reduce((sum, item) => {
        return sum + item.price;
    }, 0)

   

  return (
    <div className='cart'>
        <h2>Cart</h2>
        {cart.map((item, index) => (
          <div key={index} className='cart-item'>
            <span>{item.name}</span>
            <span>{item.price}$</span>
             <button onClick={() => onRemove(index)}>
            Remove
          </button>
            </div>
           
        ))}

         <strong>Total:</strong> {totalPrice.toFixed(2)}
         <button onClick={() => onRemove(cart.length - 1)}>
  Remove last
</button>

         
    </div>
  )
}

export default Cart