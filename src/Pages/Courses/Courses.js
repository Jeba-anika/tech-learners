import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard/CourseCard';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses)
    const [courseCategory, setCourseCategory] = useState([]);

    useEffect(() => {
        fetch('https://tech-learners-server.vercel.app/course-category')
            .then(res => res.json())
            .then(data => setCourseCategory(data))
    }, [])




    return (
        <div className='lg:mr-20 lg:ml-20 mt-10 md:ml-14 sm:ml-5 sm:mr-5 ml-5 mr-5'>
            <h2 className='text-center font-mono font-extrabold text-5xl mb-6'>Featured Courses</h2>
            <div className='grid lg:grid-cols-6 md:grid-cols-6 gap-6'>
                <div className='col-span-2'>
                    <ul className="menu menu-compact lg:menu-normal bg-warning w-full  p-4 rounded-box">
                        {
                            courseCategory.map(course => <li className='border rounded-xl mb-3 font-bold' key={course.id}><Link to={`/course-category/${course.id}`}>{course.name}</Link></li>)
                        }
                    </ul>
                </div>
                <div className='col-span-4'>
                    <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-4'>
                    {
                        courses.map(course => <CourseCard key={course._id}
                        course={course}></CourseCard>)
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;