import { useContext, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const SurveyorMake = () => {
    const [city, setCity] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [deadline, setDeadline] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);
        const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get("/users");
            return res.data;
        }
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newSurvey = {
            title,
            description,
            options: { yes: selectedOption === 'yes', no: selectedOption === 'no' },
            category,
            deadline,
            createdBy: user?._id, // Add this line to associate the survey with the current user
            status: 'publish',
            timestamp: new Date().toISOString(),
        };
        const response = await axiosSecure.post('/surveyors', newSurvey);
        if (response.data.insertedId) {
            console.log('Survey created successfully:', response.data);
            refetch(); // Trigger a refetch of surveys in SurveyorsSurveys component
        }
        return; 
    } 

        // axiosSecure.patch(`/users/suveyor/${_id}`)
        //     .then(res => {
        //         console.log(res.data);
        //         console.log({
        //             title,
        //             description,
        //             options: { yes: selectedOption === 'yes', no: selectedOption === 'no' },
        //             category,
        //             deadline,
        //             status: 'publish',
        //             timestamp: new Date().toISOString(),
        //         });
        //         refetch();

        //     });
            
    ;

    return (
        <div>
            <div className=" flex justify-center items-center">
                <h3 className="text-3xl  mx-auto my-5 relative z-10 text-gradient-to-r from-gray-800 via-transparent to-gray-800 
                 uppercase border-y-4 border-orange-400 lg:py-4 text-center">
                    Surveyor Create  {users.length}
                </h3>
            </div>
            <div>
                <form onSubmit={handleSubmit} className='card-body space-y-4 border-2 border-orange-500 p-5'>
                    <h2 className='text-xl font-bold text-center'>Create New Survey</h2>
                    <div className='form-control'>
                        <label className="label">
                            <span className="label-text">City:</span>
                        </label>
                        <input className='input input-bordered' type='text' placeholder='Survey City' value={city} onChange={(e) => setCity(e.target.value)} required />
                    </div>
                    <div className='form-control'>
                        <label className="label">
                            <span className="label-text">Title:</span>
                        </label>
                        <input className='input input-bordered' type='text' placeholder='Survey Title' value={title} onChange={(e) => setTitle(e.target.value)} required />
                    </div>
                    <div className='form-control'>
                        <label className="label">
                            <span className="label-text">Description:</span>
                        </label>
                        <textarea className='input input-bordered' value={description} onChange={(e) => setDescription(e.target.value)} required />
                    </div>
                    <div className='form-control'>
                        <label className="label">
                            <span className="label-text">Category:</span>
                        </label>
                        <select value={category} className='input input-bordered' onChange={(e) => setCategory(e.target.value)} required>
                            <option value='all'>Select Category</option>
                            <option value="affectedPeople">Affected People</option>
                            <option value="homelessPeople">Homeless People</option>
                            <option value="donationsReceived">Donations Received</option>
                            <option value="aidDistributed">Aid Distributed</option>
                            <option value="totalVotes">Total Votes</option>
                        </select>
                    </div>
                    <div className='form-control'>
                        <label className="label">
                            <span className="label-text">Options:</span>
                        </label>
                        <div className="flex items-center space-x-4">
                            <label>
                                <input
                                    type='radio'
                                    value='yes'
                                    checked={selectedOption === 'yes'}
                                    onChange={(e) => setSelectedOption(e.target.value)}
                                    required
                                />
                                Yes
                            </label>
                            <label>
                                <input
                                    type='radio'
                                    value='no'
                                    checked={selectedOption === 'no'}
                                    onChange={(e) => setSelectedOption(e.target.value)}
                                    required
                                />
                                No
                            </label>
                        </div>
                    </div>
                    <div className='form-control'>
                        <label className="label">
                            <span className="label-text">Deadline:</span>
                        </label>
                        <input type='date' className='input input-bordered' value={deadline} onChange={(e) => setDeadline(e.target.value)} required />
                    </div>
                    <div>
                        <button type='submit' className='bg-orange-500 text-white p-2'>Create Survey</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SurveyorMake;