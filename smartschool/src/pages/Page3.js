import React, { useEffect } from 'react';
const Page3 = () => {
    useEffect(() => {
        document.title = 'My Books';
    });
    return (
        <div>
            <p>These are my books...</p>
        </div>
    );
};
export default Page3;