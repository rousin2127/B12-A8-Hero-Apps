import React from 'react';
import { Link } from 'react-router';

const AppsCard = ({ apps }) => {

    const { image, title, ratingAvg, downloads,id } = apps


    return (
        <Link to={`/app/${id}`}>
        <div className="card bg-base-100 mx-auto shadow-sm border hover:scale-105 transition ease-in-out p-[16px]">
            <figure className='h-[200px] overflow-hidden rounded-[5px]'>
                <img className='w-full object-cover'
                    src={image}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
            </div>
            <div className="flex justify-between">
                <p>{downloads}</p>
                <p>{ratingAvg}</p>
            </div>

        </div>
        </Link>
    );
};

export default AppsCard;