import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { RxCrossCircled } from "react-icons/rx";
import { FiEdit } from "react-icons/fi";
import Swal from 'sweetalert2';


const AdminUser = () => {
    const axiosSecure = useAxiosSecure();
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
            const res = await axiosSecure.get("/users");
            return res.data;
        }
    })

    const handleMakeAdmin = user =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then( res =>{
            console.log(res.data);
            if (res.data.modifiedCount > 0) {
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an Admin now.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }

    const handleDeleteUser = user =>{
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
             axiosSecure.delete(`/users/${user._id}`)
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
        <div className=''>
            <div className=" flex justify-center items-center">
                <h3 className="text-3xl  mx-auto my-5 relative z-10 text-gradient-to-r from-gray-800 via-transparent to-gray-800 
                 uppercase border-y-4 border-orange-400 lg:py-4">
                    Admin Manage Users {users.length}
                </h3>
            </div>
            <div>
                <table className="table">
                    {/* head */}
                    <thead className="bg-orange-400 py-6 rounded-xl">
                        <tr>
                            <th>#</th>                            
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="my-5">
                        {/* row 1 */}
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>                                
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user.role === "admin" ? 'Admin' : <button onClick={ () => handleMakeAdmin(user)}
                                        className='btn btn-circle bg-orange-500 text-white text-xl'>
                                          <FiEdit></FiEdit>
                                       </button>
                                    }
                                </td>
                                <td><button onClick={ () => handleDeleteUser(user)}
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

export default AdminUser;