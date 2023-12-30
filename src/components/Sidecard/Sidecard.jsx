import React from 'react';

const Sidecard = () => {
    return (
        <div className='w-3/4 me-20 m-10 border-black border-2 rounded'>
            <h1 className='font-bold text-3xl text-center m-5'>Total Bookmarked Contents: </h1>
            <h1 className='font-bold text-3xl text-center m-5'>Total Read Time: </h1>
            <h1 className='font-bold text-3xl text-center m-5'>My Bookmarked Contents: </h1>
        </div>
    );
};

export default Sidecard;