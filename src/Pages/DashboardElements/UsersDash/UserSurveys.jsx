import useCart from "../../../Hooks/useCart";


const UserSurveys = () => {
    const [cart] = useCart();
    return (
        <div className="overflow-x-auto">
            <div className=" flex justify-center items-center">
                <h3 className="text-3xl  mx-auto my-5 relative z-10 text-gradient-to-r from-gray-800 via-transparent to-gray-800 
                 uppercase border-y-4 border-orange-400 lg:py-4">
                    Users Participate
                </h3>
            </div>
            <div>
                <table className="table">
                    {/* head */}
                    <thead className="bg-orange-400 py-6 rounded-xl">
                        <tr>
                            <th>#</th>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Email</th>
                            <th>Create At</th>
                        </tr>
                    </thead>
                    <tbody className="my-5">
                        {/* row 1 */}
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>{item.VoterId}</td>
                                <td>{item.title}</td>
                                <td>{item.email}</td>
                                <td>{item.createdAt}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserSurveys;