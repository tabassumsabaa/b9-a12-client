import { Link } from 'react-router-dom';
import pro from '../../../assets/Image/bglog.jpeg';

const Pricing = () => {
    return (
        <div className="pt-20 lg:pt-32 pb-10">
            <div className=" flex justify-center items-center">
                <h3 className="text-3xl  mx-auto relative z-10 text-gradient-to-r from-gray-800 via-transparent to-gray-800 
                 uppercase border-y-4 border-orange-400 lg:py-4">
                    Become a Pro-USER
                </h3>
            </div>
            <div className='container my-10 flex justify-center items-center gap-5'>
                <div >
                    <img src={pro} alt="" />
                </div>
                <div className='card justify-start'>
                    <h1 className='font-bold text-3xl '> Pro-USER Membership </h1>
                    <p className='text-2xl'>Unlock exclusive features!</p>
                    <h2 className='font-extrabold text-orange-500 text-xl mb-5'>Price: $ 5/ Month </h2>
                    <Link to="/pay"><button className='btn btn-xs sm:btn-sm md:btn-md border-b-4 border-orange-400'>Purches Now</button></Link>
                </div>
            </div>

        </div>
    );
};

export default Pricing;