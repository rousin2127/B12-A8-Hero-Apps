import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import useApps from '../../Hooks/useApps';
import { toast } from 'react-toastify';
import D from '../../../assets/images/icon-downloads.png'
import RA from '../../../assets/images/icon-ratings.png'
import RE from '../../../assets/images/icon-review.png'
import Chart from '../../Chart';
// import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';





const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading, error } = useApps();
  const app = apps.find((a) => String(a.id) === id);

  const [isInstalled, setIsInstalled] = useState(false);




  useEffect(() => {
    const installedApps = JSON.parse(localStorage.getItem('installation')) || [];
    const alreadyInstalled = installedApps.some((a) => a.id === app?.id);
    setIsInstalled(alreadyInstalled);
  }, [app]);

  if (loading) return <p>Loading....</p>;
  const { title, image, description, size,companyName, reviews,ratingAvg,downloads, ratings } = app || {};
  



  
  const handleInstall = () => {
    const existingApp = JSON.parse(localStorage.getItem('installation')) || [];

    const isDuplicate = existingApp.some((a) => a.id === app.id);
    if (isDuplicate) {
      // alert('Already installed!');
      return;
    }

    const updatedApp = [...existingApp, app];
    localStorage.setItem('installation', JSON.stringify(updatedApp));
    setIsInstalled(true);
    toast('Installed successfully!');
  };

  return (
    <div className='mx-8 md:mx-15'>
      <div className='flex shadow-sm gap-4 mt-10'>
        <figure className='left-0 w-[300px]'>
          <img src={image} alt='Movie' />
        </figure>
        <div className='flex flex-col'>
          <div>
            <h2 className='card-title text-2xl'>{title}</h2>
            <p>Developed By {companyName}</p>
            <div className='flex gap-12'>
              <div className='space-y-1.5 mt-4 '>
                <img src={D} alt="" />
                <p>Downloads</p>
                <span className='font-bold text-2xl'>{downloads}</span>
              </div>
              <div className='space-y-1.5 mt-4 '>
                <img src={RA} alt="" />
                <p>Average Rating</p>
                <span className='font-bold text-2xl'>{ratingAvg}</span>
              </div>
              <div className='space-y-1.5 mt-4 '>
                <img src={RE} alt="" />
                <p>Reviews</p>
                <span className='font-bold text-2xl'>{reviews}</span>
              </div>
            </div>
          </div>
          <div className='justify-start mt-4'>
            <button
              onClick={handleInstall}
              className={`btn ${isInstalled ? 'bg-blue-500' : 'bg-[#00D390]'}`}
              disabled={isInstalled}
            >
              {isInstalled ? 'Installed' : `Install Now (${size} MB)`}
            </button>
          </div>
        </div>
      </div>

        <div className="my-10">
  <Chart ratings={ratings} />
</div>

      <div className='my-8'>
        <h2 className='font-bold'>Description</h2>
        <p className='text-[#627382]'>{description}</p>
      </div>

      

      {/* <div>
        <BarChart layout='vertical ' width={600} height={300} data={ratings}>
           <XAxis dataKey="name" stroke="#8884d8" />
    <YAxis />
    <Tooltip />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <Bar dataKey="count" fill="#8884d8" barSize={30} />

        </BarChart>
      </div> */}
      {/* <div>
        {
          <Chart></Chart>
        }
      </div> */}
    </div>
  );
};

export default AppDetails;
