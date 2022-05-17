import React, { useEffect } from 'react';

const Page2 = () => {
    useEffect(() => {
        document.title = 'My Favorites';
    });
    return (
        <div>
            <p>These are my favorite books</p>
        </div>
    );
};
export default Page2;
