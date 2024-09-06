import bg from '../../../assets/Image/bg6.png';

const Work = () => {
    return (
        <div className="pt-20 lg:pt-32 pb-10">
            <div className="text-center  flex justify-center items-center mb-5">
                <h3 className="text-3xl flex items-center my-10 mx-auto absolute text-gradient-to-r from-gray-800 via-transparent to-gray-800 
                 uppercase border-y-4 py-4">
                    How It Work
                </h3>
            </div>
            <div className='my-12'>
                <img src={bg} alt="" className='w-full h-screen relative' />
                <div className="container absolute -my-80 -mx-28">
                    <div className="text-center mb-12">                
                        <p className="text-lg text-black bg-opacity-10">Follow these simple steps to get started with our platform.</p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                        {/* Card 1: Sign Up */}
                        <div className="card w-80 bg-base-100 shadow-xl">
                            <div className="card-body ">
                                <h1 className='text-lg font-bold'>Step-1</h1>
                                <h3 className="card-title text-center">Sign Up</h3>
                                <p className="text-center">Create an account to get started.</p>
                            </div>
                        </div>

                        {/* Card 2: Choose Survey */}
                        <div className="card w-80 bg-base-100 shadow-xl">
                            <div className="card-body">
                            <h1 className='text-lg font-bold'>Step-2</h1>
                                <h3 className="card-title text-center">Choose Survey</h3>
                                <p className="text-center">Select a survey that interests you.</p>
                            </div>
                        </div>

                        {/* Card 3: Complete and Submit */}
                        <div className="card w-80 bg-base-100 shadow-xl">
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
