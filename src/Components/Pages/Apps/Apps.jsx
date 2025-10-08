import React from 'react';
import useApps from '../../Hooks/useApps';
import AppsCard from '../AppsCard/AppsCard';

const Apps = () => {
    const { apps } = useApps();
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-8'>
                {
                    apps.map(apps => (
                        <AppsCard key={apps.id} apps={apps}></AppsCard>
                    ))
                }
            </div>
        </div>
    );
};

export default Apps;