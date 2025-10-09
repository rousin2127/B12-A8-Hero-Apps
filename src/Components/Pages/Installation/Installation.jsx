import React, { useEffect, useState } from 'react';

const Installation = () => {

    const [installation, setInstallation]= useState([]);
    const [sortOrder, setSortOrder]= useState('none')
    useEffect(() => {
            const savedApps= JSON.parse(localStorage.getItem('installation'))
        if(savedApps) setInstallation(savedApps)
    },[])



    const sortedItem = () => {
        if (sortOrder === 'size-asc'){
            return [...installation].sort((a,b) => a.size - b.size)
        }else if(sortOrder === 'size-desc'){
            return [...installation].sort((a,b) => b.size- a.size)
        }else{
          return  installation
        }
    }



    const handleRemove = id => {
            const existingApp= JSON.parse(localStorage.getItem('installation'))
            let updatedApp= existingApp.filter(a => a.id !==id)
            setInstallation(updatedApp)
            localStorage.setItem('installation', JSON.stringify(updatedApp))

    }

    return (
        <div className='space-y-6 pb-8'>
            <div className='flex justify-between py-5 items-center'>
                <p>
                    AppList: {installation.length}
                </p>
            <label className='form-control w-full max-w-40'>
                                <select className='select select-bordered'
                                value={sortOrder} 
                onChange={e=> setSortOrder(e.target.value)}>
                    <option value="none">Sort By Size</option>
                    <option value="size-asc">Low to High</option>
                    <option value="size-desc">High to Low </option>
                </select>
            </label>
            </div>
            <div className='space-y-3'>
                {
                    sortedItem().map(a=> 
                                  <div key={a.id} className='card card-side bg-base-100 shadow border'>
            <figure>
              <img
                className='w-40 h-28 object-cover'
                src={a.image}
                alt={a.title}
              />
            </figure>
            <div className='card-body'>
              <h3 className='card-title'>{a.title}</h3>
              <div className='flex gap-4 '>
              <span className=''>{a.downloads}</span>
              <span className=''>{a.ratingAvg}</span>
              <span className=''>{a.size}MB</span>
              </div>
            </div>
            <div className='pr-4 flex items-center gap-3'>
              <div className='font-semibold'></div>
              <button onClick={() => handleRemove(a.id) }
            
                className='btn btn-outline'
              >
                Uninstall
              </button>
            </div>
          </div>
                    )
                }
            </div>
        </div>
    );
};

export default Installation;