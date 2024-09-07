import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const AdminPayments = () => {
    const [payments, setPayments] = useState([]);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        // Fetch all payments from the backend
        axiosSecure.get('/payments')
            .then(res => {
                setPayments(res.data);
            })
            .catch(err => console.error('Error fetching payments:', err));
    }, [axiosSecure]);
    return (
        <div>
            <div className=" flex justify-center items-center">
                <h3 className="text-3xl  mx-auto my-5 relative z-10 text-gradient-to-r from-gray-800 via-transparent to-gray-800 
                 uppercase border-y-4 border-orange-400 lg:py-4">
                    Admin Payments
                </h3>
            </div>
            {/* Display payments in a table */}
            <div className="overflow-x-auto p-4">
                <table className="table-auto w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="border p-2">#</th>
                            <th className="border p-2">Email</th>
                            <th className="border p-2">Price</th>
                            <th className="border p-2">Transaction ID</th>
                            <th className="border p-2">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment, index) => (
                            <tr key={payment._id}>
                                <th className="border p-2">{index + 1}</th>
                                <td className="border p-2">{payment.email}</td>
                                <td className="border p-2">${payment.price}</td>
                                <td className="border p-2">{payment.transactionId}</td>
                                <td className="border p-2">{new Date(payment.date).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminPayments;