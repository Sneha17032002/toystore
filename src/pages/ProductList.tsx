import React from 'react';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';

const products = [
    { id: 1, name: 'Toy Car', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Doll', price: 15, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Puzzle', price: 20, image: 'https://via.placeholder.com/150' },
];

const ProductList: React.FC = () => {
    const { addToCart } = useCart();

    return (
        <div className="product-list">
            {products.map(product => (
                <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
        </div>
    );
};

export default ProductList;
