import React, { useState } from 'react';
import useApps from '../../Hooks/useApps';
import AppsCard from '../AppsCard/AppsCard';

const Apps = () => {
    
    const { apps } = useApps();
    const [search, setSearch]= useState('');
    const term= search.trim().toLocaleLowerCase();
    const searchApps= term ? apps.filter(app=> app.title.toLocaleLowerCase().includes(term)):apps
    console.log(searchApps)
    return (
        <div>
            <div className='flex justify-between items-center pt-4'>
                <p><span>({searchApps.length})</span> Apps Found</p>
                <div>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input value={search} onChange={(e) => setSearch(e.target.value)} type="search" required placeholder="Search" />
                    </label>
                </div>

            </div>
            {
                          searchApps.length > 0 ? (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-4'>
                {
                    searchApps.map(apps => (
                        <AppsCard key={apps.id} apps={apps}></AppsCard>
                    ))
                }
            </div>
             ): (
        <div className='text-center py-10 text-gray-500 text-lg'>
          No apps here 😕
        </div>)
            }
  
            
        </div>
    );
};

export default Apps;