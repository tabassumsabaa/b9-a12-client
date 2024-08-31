import { NavLink, Outlet } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { TbReportSearch } from "react-icons/tb";
import { MdCoPresent } from "react-icons/md";
import { FaCommentDots, FaPoll, FaUserEdit, FaUserTie } from "react-icons/fa";
import { MdAddComment } from "react-icons/md";
import { RiContactsBook3Fill } from "react-icons/ri";
import { TbHelpOctagonFilled } from "react-icons/tb";
import useCart from '../Hooks/useCart';
import useReport from '../Hooks/useReport';
import AdminUser from '../Pages/DashboardElements/AdminDash/AdminUser';

const Dashboard = () => {
    const [cart] = useCart();
    const [report] = useReport();
    const [users] = AdminUser();
    const isAdmin = true;
    return (
        <div className='flex'>
            {/* dashboard side bar */}
            <div className="w-64 h-screen bg-orange-400 text-black">
                <div>
                    <h2 className='text-center text-2xl p-2 font-bold border-2 border-black m-5'>Civic Survey</h2>
                </div>
                <ul className="category p-4 space-y-2">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink className='w-full m-auto flex items-center space-x-2 gap-2' to='adminHome'>
                                    <IoMdHome></IoMdHome>
                                    Admin Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className='w-full m-auto flex items-center space-x-2 gap-2' to='admin/users'>
                                    <FaUserTie></FaUserTie>
                                    Manage Users ({users.length})
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className='w-full m-auto flex items-center space-x-2 gap-2' to='admin/surveys'>
                                    <FaUserEdit></FaUserEdit>
                                    Manage Surveys
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className='w-full m-auto flex items-center space-x-2 gap-2' to='admin/payments'>
                                    <FaPoll></FaPoll>
                                    View Payments
                                </NavLink>
                            </li>
                        </>
                            : <>
                                <li>
                                    <NavLink className='w-full m-auto flex items-center space-x-2 gap-2' to='userHome'>
                                        <IoMdHome></IoMdHome>
                                        Home</NavLink>
                                </li>
                                <li>
                                    <NavLink className='w-full m-auto flex items-center space-x-2 gap-2' to='user/surveys'>
                                        <MdCoPresent></MdCoPresent>
                                        Participate ({cart.length})</NavLink>
                                </li>
                                <li>
                                    <NavLink className='w-full m-auto flex items-center space-x-2 gap-2' to='user/reports'>
                                        <TbReportSearch></TbReportSearch>
                                        Reports({report.length}) </NavLink>
                                </li>
                                <li>
                                    <NavLink className='w-full m-auto flex items-center space-x-2 gap-2' to='user/comments'>
                                        <FaCommentDots></FaCommentDots>
                                        Comments</NavLink>
                                </li>
                            </>
                    }
                    {/* shared */}
                    <div className="divider"></div>
                    <li>
                        <NavLink className='w-full m-auto flex items-center space-x-2 gap-2' to='/'>
                            <IoMdHome></IoMdHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink className='w-full m-auto flex items-center space-x-2 gap-2' to='/'>
                            <MdAddComment></MdAddComment>
                            About Us</NavLink>
                    </li>
                    <li>
                        <NavLink className='w-full m-auto flex items-center space-x-2 gap-2' to='/'>
                            <RiContactsBook3Fill></RiContactsBook3Fill>
                            Contact Us</NavLink>
                    </li>
                    <li>
                        <NavLink className='w-full m-auto flex items-center space-x-2 gap-2' to='/'>
                            <TbHelpOctagonFilled></TbHelpOctagonFilled>
                            HelpCente</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className='flex-1 p-10'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;