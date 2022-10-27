import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const { title, image_url } = course;


    return (
        <div>
            <div className="card card-compact lg:w-96 lg:h-96 md:w-96 md:h-96 w-auto bg-base-100 shadow-xl">
                <figure><img src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-warning"><Link to={`/all-courses/${course._id}`}>See Details</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;