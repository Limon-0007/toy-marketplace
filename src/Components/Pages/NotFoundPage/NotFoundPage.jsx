import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?size=626&ext=jpg&uid=R101288307&ga=GA1.1.311772693.1668666155&semt=ais" alt="404 Error" className="max-w-full h-auto" />
      <h1 className="text-4xl font-bold mt-8">Oops! Page not found.</h1>
      <p className="text-lg text-gray-500 mt-2">The page you are looking for does not exist.</p>
        <Link className='p-2 bg-slate-800 text-white font-semibold rounded mt-6 hover:bg-slate-600 duration-200' to="/">Go Back Home</Link>
    </div>
  );
};

export default NotFoundPage;
