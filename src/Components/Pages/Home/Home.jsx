import React from 'react';
import { Link, useLoaderData } from 'react-router';
import AppsCard from '../AppsCard/AppsCard';
import useApps from '../../Hooks/useApps';
import Hero from '../../../assets/images/hero.png'
import G from '../../../assets/images/g.png'
import A from '../../../assets/images/a.png'

const Home = () => {

    const home= useLoaderData()
    const{apps, loading, error}=useApps();
    // console.log(apps)
    const homeApps=apps.slice(0,8)
    return (
        <div>
            <div>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-center font-bold text-2xl md:text-6xl mt-7 md:mt-12' >We Build <br /><span className='bg-gradient-to-tl from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent'>Productive</span> Apps</h1>
                    <p className='text-center text-[#627382] mt-4'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                    <div className='flex gap-8 my-4' >
                        <Link className='border rounded-sm py-1 px-4 flex gap-2' to='https://play.google.com/store/apps?hl=en'><img src={G} alt="" /> Google Play</Link>
                        <Link className='border rounded-sm py-1  px-4 flex gap-2' to='https://www.apple.com/app-store/'><img src={A} alt="" /> App Store</Link>
                    </div>
                    <div className='mt-5'>
                        <img src={Hero} alt="" />
                    </div>
                    <div className='text-center bg-gradient-to-tl from-[#9F62F2] to-[#632EE3] w-full m-auto flex flex-col text-white'>
                        <h1 className='md:text-4xl text-2xl font-bold my-5'>Trusted by Millions, Built for You</h1>
                        <div className='flex md:gap-25 items-center m-auto'>
                            <div className='my-5'>
                                <p className='text-[12px] my-3'>Total Downloads</p>
                                <span className='text-5xl font-extrabold'>25.5M</span>
                                <p className='text-[12px] my-3'>25% More then last Month</p>
                            </div>
                            <div className='my-5'>
                                <p className='text-[12px] my-3'>Total Downloads</p>
                                <span className='text-4xl font-extrabold'>25.5M</span>
                                <p className='text-[12px] my-3'>25% More then last Month</p>
                            </div>
                            <div className='my-5'>
                                <p className='text-[12px] my-3'>Total Downloads</p>
                                <span className='text-4xl font-extrabold'>25.5M</span>
                                <p className='text-[12px] my-3'>25% More then last Month</p>
                            </div>


                        </div>
                        
                    </div>
                    <div>
                        <h1 className='md:text-4xl text-2xl font-bold text-center mt-8 '>Trending Apps</h1>
                        <p className='mt-2 text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-8 mx-8 md:mx-15'>
                {
                    homeApps.map(apps => (
                        <AppsCard key={apps.id} apps={apps}></AppsCard>
                    ))
                }
            </div>
            <div className='text-center pb-8 my-4  '>
                <Link className='border px-3 py-1 rounded-sm bg-linear-to-tl from-[#9F62F2] to-[#632EE3]' to='/apps'>Show all</Link>
            </div>
        </div>
    );
};

export default Home;