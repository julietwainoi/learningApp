import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Test</Link></li>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/article">Article</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
