import React from 'react';
import Header from '../components/HeaderMain';
import Navigation from '../components/NavigationNotFound';
const Layout = ({ children }) => {
    return (
    <React.Fragment>
        <Header />
        <div className="navigationWrapper">
            <Navigation />
            <h1>OOPS!</h1>
            <main>{children}</main>
        </div>
    </React.Fragment>
    );
};
export default Layout;