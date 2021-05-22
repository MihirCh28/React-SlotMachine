import React from 'react';

const NotMatching = (prop) => {
    let { a, b, c } = prop;
    return (
        <>
            <div className='slot_inner'>
                <h1>
                    {a} {b} {c}
                </h1>
                <h1> This is Not Matching. </h1>
                <hr />
            </div>
        </>
    );
};

export default NotMatching;