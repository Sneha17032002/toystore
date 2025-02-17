import React from 'react';

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

const ProductCard: React.FC<{ product: Product; addToCart: (product: Product) => void; }> = ({ product, addToCart }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default ProductCard;
