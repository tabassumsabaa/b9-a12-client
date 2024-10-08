
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useReport from "../../../Hooks/useReport";
import { MdOutlineReportProblem } from "react-icons/md";


const Reports = () => {
    const [reports] = useReport();
    const axiosSecure = useAxiosSecure();


    return (
        <div className="overflow-x-auto">
            <div className=" flex justify-center items-center">
                <h3 className="text-3xl  mx-auto my-5 relative z-10 text-gradient-to-r from-gray-800 via-transparent to-gray-800 
                 uppercase border-y-4 border-orange-400 lg:py-4">
                    User Reports 
                </h3>
            </div>
            <div>
                <table className="table">
                    {/* head */}
                    <thead className="bg-orange-400 py-6 rounded-xl">
                        <tr>
                            <th>#</th>                            
                            <th>Title</th>
                            <th>Email</th>  
                            <th>Action</th>                         
                        </tr>
                    </thead>
                    <tbody className="my-5">
                        {/* row 1 */}
                        {
                            reports.map((item, index) => <tr key={item._id}>
                                <th>{index + 1}</th>                                
                                <td>{item.title}</td>
                                <td>{item.email}</td>
                                <td className=" text-orange-500 rounded-full font-bold text-2xl"> <MdOutlineReportProblem></MdOutlineReportProblem></td>                                
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Reports;