import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div>
            <div className='text-center mt-20'>
                <h1 className='text-5xl font-bold '>Oops!</h1>
                <p className='text-2xl font-bold text-red-500 mt-5'>Sorry, an unexpected error has occurred.</p>
                <p className='mt-5'>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
};

export default ErrorPage;