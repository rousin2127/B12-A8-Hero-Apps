import React from 'react';
import Ae from '../../../assets/images/App-Error.png'
import { Link } from 'react-router';

const ErrorA = () => {
    return (
        <div className=' flex flex-col items-center justify-center h-screen space-y-3'>
            <div className='flex justify-center items-center content-center w-50  '>
                <img className='' src={Ae} alt="" />
            </div>
                <h2 className='text-4xl font-bold'>OPPS!! APP NOT FOUND</h2>
                <p>The App you are requesting is not found on our system.  please try another apps</p>
                <Link className='btn bg-gradient-to-tl from-[#9F62F2] to-[#632EE3] text-white' to='/'>Go Back!</Link>
        </div>
    );
};

export default ErrorA;