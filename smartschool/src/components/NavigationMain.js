import React from 'react';
import { Link } from 'react-router-dom';
const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/page2">My Books</Link>
                </li>
                <li>
                    <Link to="/page3">Favorites</Link>
                </li>
            </ul>
        </nav>
    );
};
export default Navigation;