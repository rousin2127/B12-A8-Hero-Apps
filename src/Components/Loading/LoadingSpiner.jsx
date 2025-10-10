import React from 'react';
import L from '../../assets/images/logo.png'

const LoadingSpiner = () => {
    return (
        <div className='flex items-center justify-center'>
            <p className='flex justify-center items-center md:text-6xl text-3xl font-bold bg-gradient-to-tl from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent'>L<img className='md:w-20 w-10 animate-spin ' src={L} alt="" />ding</p>
        </div>
    );
};

export default LoadingSpiner;