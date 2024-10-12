import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({project}) => {
    const{id, img, title, site, des}= project
    return (
        <div className="card bg-base-100 text-white shadow-xl">
        <figure>
            <img
            src={img}
            alt="website" />
        </figure>
        <div className="card-body space-y-3">
            <h2 className="card-title md:text-2xl">{title}</h2>
            <p>{des}</p>
            <div className="card-actions justify-end">
            <Link to={site} target='blank'><button className="btn bg-white text-black hover:text-white">View Now</button></Link>
            </div>
        </div>
        </div>
    );
};

export default Project;