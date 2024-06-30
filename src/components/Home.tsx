import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/home.scss';

const Home: React.FC = () => {
    return (
        <div className="home">
        <h1>Just Beat Hit</h1>
        <Link to="/karakaku">
            <button className="start-button">Karakaku</button>
        </Link>
        </div>
    );
};

export default Home;
