import bg from '../../../assets/Image/bg6.png';

const Work = () => {
    return (
        <div className="pt-32 pb-10 ">
            <div className="text-center  flex justify-center items-center mb-5">
                <h3 className="text-3xl flex items-center my-10 mx-auto absolute text-gradient-to-r from-gray-800 via-transparent to-gray-800 
                 uppercase border-y-4 py-4 border-orange-400">
                    How It Work
                </h3>
            </div>
            <div className='relative  my-12'>
                <img src={bg} alt="" className='w-full lg:h-[450px] ' />
                <div className=" w-full h-full flex flex-col justify-center items-center text-center px-4 py-20 lg:py-40 lg:-my-64 lg:mb-24">                                    
                    <p className="text-lg text-center text-black mb-8 lg:mb-40 lg:-my-80">Follow these simple steps to get started with our platform.</p>
                    <div className="lg:flex absolute inset-0 justify-center items-center space-x-8">
                        {/* Card 1: Sign Up */}
                        <div className="card w-80 bg-base-100 shadow-xl ">
                            <div className="card-body ">
                                <h1 className='text-lg font-bold'>Step-1</h1>
                                <h3 className="card-title text-center">Sign Up</h3>
                                <p className="text-center">Create an account to get started.</p>
                            </div>
                        </div>

                        {/* Card 2: Choose Survey */}
                        <div className="card w-80 bg-base-100 shadow-xl  ">
                            <div className="card-body">
                            <h1 className='text-lg font-bold'>Step-2</h1>
                                <h3 className="card-title text-center">Choose Survey</h3>
                                <p className="text-center">Select a survey that interests you.</p>
                            </div>
                        </div>

                        {/* Card 3: Complete and Submit */}
                        <div className="card w-80 bg-base-100 shadow-xl ">
                            <div className="card-body">
                            <h1 className='text-lg font-bold'>Step-3</h1>
                                <h3 className="card-title text-center">Complete and Submit</h3>
                                <p className="text-center">Answer the questions and submit your responses.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
