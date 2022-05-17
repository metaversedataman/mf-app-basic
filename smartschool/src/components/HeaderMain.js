import React from 'react';
import logo from '../images/logo_emexrevolarter.png';
const Header = () => {
return (
    <header>
        <img src={logo} alt="emexrevolarter Logo" height="48" />
        <div>
            Emexrevolarter React Page
        </div>
    </header>
    );
};
export default Header;