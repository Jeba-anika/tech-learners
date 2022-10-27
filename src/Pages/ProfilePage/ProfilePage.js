import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { FaUser } from 'react-icons/fa';

const ProfilePage = () => {
    const { user, updateUserProfile } = useContext(AuthContext)
    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value; 
        console.log(name, photoURL, email)
        handleUpdateUserProfile(name, photoURL)
    }


    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }



    return (
        <div className='lg:ml-48 md:ml-96 lg:mr-0 md:mr-0 sm:mr-5 sm:ml-5 mr-5 ml-5'>
            <div className='lg:ml-96 mt-10'>
                <div className='mt-5'>
                    {user?.photoURL ?
                        <><div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                        </> : <FaUser className='rounded-full w-24 text-6xl'></FaUser>}
                </div>
                <div className='mt-5'>
                    <p>Name:</p>
                    <p className='text-xl font-bold border rounded-xl shadow p-5 lg:w-96'>{user?.displayName ? user.displayName : 'User'}</p>
                </div>
                <div className='mt-5'>
                    <p>Email:</p>
                    <p className='text-xl font-bold border rounded-xl shadow p-5 lg:w-96'>{user?.email ? user.email : 'User Email'}</p>
                </div>
                <div className='mt-5'>
                    <p>Display picture photoURL</p>
                    <p className='text-xl font-bold border rounded-xl shadow p-5 lg:w-96'>{user?.photoURL ? user.photoURL : 'No PhotoURL to display'}</p>
                </div>
                <label htmlFor="my-modal-6" className="btn modal-button mt-5">Change Profile</label>

            </div>
            <div>
                <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input name='name' type="name" placeholder="Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your photoURL</span>
                                </label>
                                <input name='photoURL' type="text" placeholder="Your photoURL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input name='email' type="text" placeholder="Your Email" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-warning">Update Profile</button>
                            </div>
                        </form>
                        <div className="modal-action">
                            <label htmlFor="my-modal-6" className="btn">Close.</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;