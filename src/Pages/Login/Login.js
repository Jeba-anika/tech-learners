import React from 'react';
import { useContext } from 'react';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext)

    const handleLogin = (event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            form.reset();
        })
        .catch(error=>{
            console.error(error)
        })
    }


    return (
        <div className='lg:mr-20 lg:ml-20'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="pt-4">Don't have an account? Please Register ! <button className='btn btn-link text-red-400'><Link to='/register'>Register Now</Link></button></p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                        <form  onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input required name='email' type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input required name='password' type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-warning">Login</button>
                            </div>
                        </form>
                    </div>
                    <hr />
                    <div className='mt-4'>
                        <button className="btn btn-warning lg:mr-7 md:mr-7 md:ml-0 lg:ml-0 sm:ml-20 ml-20"><FaGoogle className='mr-2'></FaGoogle>Login Using Google</button>
                        <button className="btn btn-warning sm:mt-4 mt-4 sm:ml-20 ml-20"><FaGithub className='mr-2'></FaGithub>Login Using GitHub</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;