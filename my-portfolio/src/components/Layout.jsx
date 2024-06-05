import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {

    return (
        <div className='site'>
            <Header />
            <div className='grid-cell-content-layout'><main className='content'>
                {children}</main></div>
            <Footer />
        </div>
    );
}

export default Layout;