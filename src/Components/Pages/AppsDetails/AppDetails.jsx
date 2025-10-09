import React from 'react';
import { Link, useParams } from 'react-router';
import useApps from '../../Hooks/useApps';

const AppDetails = () => {
    const {id}= useParams();
    const {apps, loading, error}=useApps();
    console.log(apps)
    const app= apps.find(a=> String(a.id) == id)

    if (loading) return <p>Loading....</p>
    const {title,image, description, size}= app || {}

    return (
        <div>
            <div className="flex  shadow-sm gap-4">
  <figure className='left-0 w-[300px]'>
    <img
      src={image}
      alt="Movie" />
  </figure>
  <div className="flex flex-col">
    <div>
    <h2 className="card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
    </div>
    <div className=" justify-start">
      <Link to='/installation' className="btn btn-primary">Install Now ({size} MB)</Link >
    </div>
  </div>
</div>
      <div>
        <h2>Description</h2>
        <p>
          {description}
        </p>
      </div>
        </div>
    );
};

export default AppDetails;