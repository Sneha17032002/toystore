import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Create this CSS file for styling

const Header: React.FC = () => {
    return (
        <header className="header">
            <h1>Toy Store</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/cart">Cart</Link>
            </nav>
        </header>
    );
};

export default Header;
