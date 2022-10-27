import React from 'react';

const FAQ = () => {
    return (
        <div className='lg:mr-20 lg:ml-20 sm:mr-5 sm:ml-5 mr-5 ml-5 mt-20'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-5">
                <div className="collapse-title text-xl font-medium">
                    Who can take our courses?
                </div>
                <div className="collapse-content">
                    <p>We have several courses for several topics for every level ranging from beginner to advanced.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-5">
                <div className="collapse-title text-xl font-medium">
                    Is there any chance to get a job after completing these courses?
                </div>
                <div className="collapse-content">
                    <p>We provide guidelines to make you enter in your professional life.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-5">
                <div className="collapse-title text-xl font-medium">
                    Why Using Our Services?
                </div>
                <div className="collapse-content">
                    <p>We provide best services with cheaper price.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-5">
                <div className="collapse-title text-xl font-medium">
                    Do we provide live classes?
                </div>
                <div className="collapse-content">
                    <p>Currently we provide only video classes.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-5">
                <div className="collapse-title text-xl font-medium">
                    Do we provide one to one support session?
                </div>
                <div className="collapse-content">
                    <p>Yes we do.</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;