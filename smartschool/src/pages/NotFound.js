import React, { useEffect } from 'react';
const Page3 = () => {
    useEffect(() => {
        document.title = 'Page Not Found!';
    });
    return (
        <div>
            <p>This Page is Not Found</p>
        </div>
    );
};
export default Page3;