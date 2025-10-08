import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <div className='max-w-screen-2xl mx-auto w-full px-4 md:px-8  flex-1 bg-[#f8f9f5]  '><Outlet></Outlet></div>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;