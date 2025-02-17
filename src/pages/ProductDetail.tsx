import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { addToCart } = useCart();

    // For demonstration purposes, using static data
    const product = {
        id: parseInt(id!),
        name: 'Toy Car',
        description: 'A fast and fun toy car for kids.',
        price: 10,
        image: 'https://via.placeholder.com/150'
    };

    return (
        <div className="product-detail">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default ProductDetail;
