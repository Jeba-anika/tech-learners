import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import { FaArrowAltCircleRight } from "react-icons/fa";

const Home = () => {
    return (
        <div>
            <div className='lg:mr-20 lg:ml-20 mt-10 border-4 border-yellow-200 home-background rounded-xl'>
                 <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4'>
                    <div className='p-12'>
                        <h2 className='font-mono text-5xl font-bold text-left'>Learn Technologies from us and Become a Professional in the field...</h2>
                        <p className='text-3xl mt-6 font-semibold'>Tech Learners helps to gain skills on different technologies and prepare for job market.</p>
                        <button className="btn btn-warning mt-6"><Link className='font-bold text-xl mr-2' to='/courses'>Get Started</Link><FaArrowAltCircleRight className='text-xl'></FaArrowAltCircleRight></button>
                    </div>
                    <div>
                    <img className='home-img p-6' src="https://i.ibb.co/HxXT8bn/Untitled-design-1.png" alt="" />
                    </div>
                 </div>
            </div>
        </div>
    );
};

export default Home;