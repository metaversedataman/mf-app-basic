import React from 'react';
import Header from '../components/HeaderMain';
import Navigation from '../components/NavigationMain';
const Layout = ({ children }) => {
    return (
    <React.Fragment>
        <Header />
        <div className="navigationWrapper">
            <Navigation />
            <main>{children}</main>
        </div>
    </React.Fragment>
    );
};
export default Layout;