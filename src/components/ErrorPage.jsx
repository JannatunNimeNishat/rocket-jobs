import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className='flex flex-col h-[100vh] items-center justify-center'>
            <h1 className='text-5xl font-semibold text-red-700'>{error.status || 404}!</h1>
            <h3 className='text-4xl ml-3'>{error.error.message}</h3>
        </div>
    );
};

export default ErrorPage;