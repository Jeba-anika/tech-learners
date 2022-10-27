import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaFileDownload, } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { TbCertificate } from "react-icons/tb";
import Pdf from "react-to-pdf";


const ref = React.createRef()

const EachCourseDetail = () => {
    const options = {
        orientation: 'landscape',  
    };
    const courseDetails = useLoaderData();
    const { title, image_url, details, instructor, others_info, rating, total_learners } = courseDetails
    console.log(courseDetails)
    return (
        <div  className='lg:mr-20 lg:ml-20 mt-5 md:mr-20 md:ml-20 sm:mr-5 mr-5 sm:ml-5 ml-5'>
            <div className='grid lg:grid-cols-6 gap-4 w-full'>
                <div ref={ref} className="lg:col-span-4 card w-full h-full bg-base-100 shadow-xl">
                    <figure><img src={image_url} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p>{details}</p>
                        <div className="card-actions justify-end">
                            <h2>Only at: <span className='font-bold text-5xl text-end'>${others_info.price}</span></h2>
                            <button className="btn btn-warning"><Link to={`/checkout/${courseDetails._id}`}>Get Premium Access</Link></button>
                        </div>
                    </div>
                </div>
                <div className='lg:col-span-2'>
                    <div className='border rounded-2xl lg:w-96 p-10'>
                        <Pdf targetRef={ref} filename="course-details.pdf" options={options} >
                            {({ toPdf }) => <button onClick={toPdf} className='btn btn-warning mt-5 w-full'><FaFileDownload className='mr-2'></FaFileDownload>Get Page PDF</button>}
                        </Pdf>
                        
                        <p className='text-2xl font-bold mt-5'>Instructor:</p>
                        <div className='flex mb-4'>
                            <div>
                                <img className='rounded-full w-14 h-14' src={instructor.img}></img>
                            </div>
                            <div>
                                <p className='font-semibold text-xl'>{instructor.name}</p>
                                <p>{instructor.occupation}</p>
                            </div>
                        </div>
                        <hr />
                        <p className='mt-5 mb-2'><span className='text-xl font-semibold'><BsFillPeopleFill className='inline mr-4'></BsFillPeopleFill>Totall Enrolled:</span> <span className='font-bold text-2xl'>{total_learners}</span></p>
                        <hr />
                        <p className='mt-2'><span className='text-xl font-semibold'><TbCertificate className='inline mr-4'></TbCertificate>Certificate:</span> <span className='font-bold text-2xl'>{others_info.certification ? <p className='inline'>Available</p> : <p className='inline'>Not Available</p>}</span></p>
                    </div>
                    <div >
                        <div className="stats stats-vertical lg:stats-horizontal shadow mt-5 lg:ml-0 md:ml-0 sm:ml-20 ml-20">

                            <div className="stat">
                                <div className="stat-title">Duration</div>
                                <div className="stat-value">{others_info.duration}</div>
                                <div className="stat-desc">Hours</div>
                            </div>

                            <div className="stat">
                                <div className="stat-title">Level</div>
                                <div className="stat-value">{others_info.level}</div>

                            </div>

                            <div className="stat">
                                <div className="stat-title">Ratings</div>
                                <div className="stat-value">{rating.number}</div>
                                <div className="stat-desc">{rating.badge}</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EachCourseDetail;