import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Create this CSS file for styling

const Home: React.FC = () => {
    return (
        <div className="home">
            <h2>Welcome to the Toy Store!</h2>
            <Link to="/products">Browse Products</Link>
        </div>
    );
};

export default Home;
