import React from 'react';
import { Link } from 'react-router';
import D from '../../../assets/images/icon-downloads.png'
import R from '../../../assets/images/icon-ratings.png'

const AppsCard = ({ apps }) => {

    const { image, title, ratingAvg, downloads,id } = apps


    return (
        <Link to={`/app/${id}`}>
        <div className="card bg-base-100 mx-auto shadow-sm border hover:scale-105 transition ease-in-out p-[16px]">
            <figure className=' overflow-hidden rounded-[5px]'>
                <img className='w-fit '
                    src={image}
                />
            </figure>
            <div className="my-4">
                <h2 className="card-title">{title}</h2>
            </div>
            <div className="flex justify-between">
                <p className='flex justify-center items-center  text-green-400 bg-amber-50 px-4 py-1 rounded-sm'><img className='w-4 h-4' src={D} alt="" /> {downloads}</p>
                <p className='flex justify-center items-center  text-orange-400 bg-amber-50 px-4 py-1 rounded-sm' ><img className='w-4 h-4' src={R} alt="" /> {ratingAvg}</p>
            </div>

        </div>
        </Link>
    );
};

export default AppsCard;