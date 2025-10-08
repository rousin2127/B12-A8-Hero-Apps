import React from 'react';
import { Link, useLoaderData } from 'react-router';
import AppsCard from '../AppsCard/AppsCard';
import useApps from '../../Hooks/useApps';


const Home = () => {
    const{apps, loading, error}=useApps();
    // console.log(apps)
    const homeApps=apps.slice(0,8)
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-8'>
                {
                    homeApps.map(apps => (
                        <AppsCard key={apps.id} apps={apps}></AppsCard>
                    ))
                }
            </div>
            <div className='text-center pb-8 my-4  '>
                <Link className='border p-3' to='/apps'>Show all</Link>
            </div>
        </div>
    );
};

export default Home;