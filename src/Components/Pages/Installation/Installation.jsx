import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import D from '../../../assets/images/icon-downloads.png'
import R from '../../../assets/images/icon-ratings.png'

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
            toast('Uninstalled successfully!')
            localStorage.setItem('installation', JSON.stringify(updatedApp))

    }

    return (
        <div className='mx-auto space-y-6 pb-8  md:mx-15'>
          <div className='text-center mt-10'>
            <h1 className='font-bold text-4xl'>Your Installed Apps</h1>
            <p className='pt-2 text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
          </div>
            <div className='flex justify-between my-4 items-center'>
                <p className='font-bold'>
                  {installation.length} Apps Found
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
            <div className='space-y-3 p-2'>
                {
                    sortedItem().map(a=> 
                                  <div key={a.id} className='card card-side bg-base-100 shadow border'>
            <figure>
              <img
                className=' rounded-sm w-30 h-28 object-cover'
                src={a.image}
                alt={a.title}
              />
            </figure>
            <div className='card-body'>
              <h3 className='card-title'>{a.title}</h3>
              <div className='flex gap-4 '>
              <span className='flex justify-center items-center  text-green-400'><img className='w-4 h-4' src={D} alt="" /> {a.downloads}</span>
              <span className='flex items-center justify-center'><img className='w-4 h-4' src={R} alt="" /> {a.ratingAvg}</span>
              <span className=''>{a.size}MB</span>
              </div>
            </div>
            <div className='pr-4 flex items-center gap-3'>
              <div className='font-semibold'></div>
              <button onClick={() => handleRemove(a.id) }
            
                className='btn btn-outline bg-[#00D390]'
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