import React from 'react';

const Matching = (prop) => {
    let { a, b, c } = prop;
    return (
        <>
            <div className='slot_inner'>
                <h1>
                    {a} {b} {c}
                </h1>
                <h1> This is Matching. </h1>
                <hr />
            </div>
        </>
    );
};

export default Matching;