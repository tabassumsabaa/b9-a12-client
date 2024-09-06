import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FiEdit } from 'react-icons/fi';
import { RxCrossCircled } from 'react-icons/rx';
import Swal from 'sweetalert2';

const SurveyorsSurveys = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const { data: surveyor = [], refetch } = useQuery({
        queryKey: ['surveyor'],
        queryFn: async () => {
            const res = await axiosSecure.get("/surveyors");
            return res.data;
        }
    });
    const handleUpdateSurveyor = surveyorr =>{

    }
    const handleDeleteSurveyor = surveyorr =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
             axiosSecure.delete(`surveyors/${surveyorr._id}`)
             .then(res =>{
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }
             })
            }
          });

    }

    return (
        <div>
            <div className=" flex justify-center items-center">
                <h3 className="text-3xl  mx-auto my-5 relative z-10 text-gradient-to-r from-gray-800 via-transparent to-gray-800 
                 uppercase border-y-4 border-orange-400 lg:py-4 text-center">
                    Surveyor view  {surveyor.length}
                </h3>
            </div>
            <div>
                <table className="table">
                    {/* head */}
                    <thead className="bg-orange-400 py-6 rounded-xl">
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Status</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody className="my-5">
                        {/* row 1 */}
                        {
                            surveyor.map((surveyorr, index) => <tr key={surveyorr._id}>
                                <th>{index + 1}</th>
                                <td>{surveyorr.title}</td>
                                <td>{surveyorr.description}</td>
                                <td>{surveyorr.category}</td>
                                <td>{surveyorr.status}</td>
                                <td>
                                    {
                                        <button onClick={() => handleUpdateSurveyor(surveyorr)}
                                            className='btn btn-circle bg-orange-500 text-white text-xl'>
                                            <FiEdit></FiEdit>
                                        </button>
                                    }
                                </td>
                                <td><button onClick={() => handleDeleteSurveyor(surveyorr)}
                                    className='btn btn-circle bg-red-600 text-white text-2xl'>
                                    <RxCrossCircled></RxCrossCircled>
                                </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SurveyorsSurveys;