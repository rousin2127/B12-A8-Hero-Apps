import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet, useNavigation } from 'react-router';
import { ToastContainer } from 'react-toastify';
import LoadingSpiner from '../Loading/LoadingSpiner';

const Root = () => {

    const navigation = useNavigation()
    // const isNavigating = Boolean(navigation.location);
    console.log(navigation.state)

    return (
        <>
            <div className='flex flex-col min-h-screen'>
                <Navbar></Navbar>
                {
                    navigation?.state === 'loading' ? <LoadingSpiner /> : <div className=' flex-1 bg-[#f8f9f5]  '>
                        <Outlet></Outlet>
                    </div>
                }
                <Footer></Footer>

            </div>
            <ToastContainer></ToastContainer>
        </>
    );
};

export default Root;