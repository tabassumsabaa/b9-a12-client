import React from 'react';

const AdminHome = () => {
    return (
        <div>
            <div className=" flex justify-center items-center">
                <h3 className="text-3xl  mx-auto my-5 relative z-10 text-gradient-to-r from-gray-800 via-transparent to-gray-800 
                 uppercase border-y-4 border-orange-400 lg:py-4">
                    Admin home
                </h3>
            </div>
            <div className="my-10">
                <h1 className='text-5xl text-center font-serif text-orange-500'>Welcome Admin! </h1>
            </div>
        </div>
    );
};

export default AdminHome;