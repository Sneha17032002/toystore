import React from 'react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
    const { cart } = useCart();

    const totalPrice = cart.reduce((total, product) => total + product.price, 0);

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>No items in cart</p>
            ) : (
                cart.map((product, index) => (
                    <div key={index}>
                        <h4>{product.name}</h4>
                        <p>${product.price}</p>
                    </div>
                ))
            )}
            <h3>Total: ${totalPrice}</h3>
            <button>Checkout</button>
        </div>
    );
};

export default Cart;
