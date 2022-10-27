import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { IoBagCheck } from "react-icons/io5";

const CheckOut = () => {
    const courseCheckout = useLoaderData();
    console.log(courseCheckout)
    const { title, image_url, details, instructor, others_info, rating, total_learners } = courseCheckout
    return (
        <div className='lg:mr-20 lg:ml-20 md:mr-20 md:ml-20 sm:mr-5 mr-5 sm:ml-5 ml-5 mt-10'>
            <div className="card lg:card-side w-full bg-base-100 shadow-xl">
                <figure><img className='lg:w-96' src={image_url} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-4xl "><IoBagCheck className='text-green-600'></IoBagCheck>Congratulations!</h2>
                    <p><span className='font-bold text-xl'>You have successfully got premium access of the course</span> <span className='font-bold text-3xl'>"{title}".</span></p>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;