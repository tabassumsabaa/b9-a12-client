import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { TbReportSearch } from "react-icons/tb";
import { MdCoPresent } from "react-icons/md";
import { FaCommentDots, FaPoll, FaUserEdit, FaUserTie } from "react-icons/fa";
import { MdAddComment } from "react-icons/md";
import { RiContactsBook3Fill } from "react-icons/ri";
import { TbHelpOctagonFilled } from "react-icons/tb";
import useCart from '../Hooks/useCart';
import useReport from '../Hooks/useReport';
import { useEffect } from 'react';
import { BiBookContent, BiCategory } from 'react-icons/bi';
import useSurveyor from '../Hooks/useSurveyor';
import useAdmin from '../Hooks/useAdmin';


const Dashboard = () => {
    const [cart] = useCart();
    const [report] = useReport();
    const [isSurveyor] = useSurveyor();
    const [isAdmin] = useAdmin();
    const isUser = !isAdmin && !isSurveyor;
    const navigate = useNavigate();
    useEffect(() => {
        if (isAdmin) {
            navigate('/dashboard/adminHome'); // Redirect to Admin Dashboard
        } else if (isSurveyor) {
            navigate('/dashboard/surveyor'); // Redirect to Surveyor Dashboard
        }
        //  else if (isUser) {
        //     navigate('/dashboard/users'); // Redirect to User Dashboard )} 
        // }
    }, [isAdmin, isSurveyor, isUser, navigate]);
    return (
        <div className='flex'>
            {/* dashboard side bar */}
            <div className="w-64 h-screen bg-orange-400 text-black">
                <div>
                    <h2 className='text-center text-2xl p-2 font-bold border-2 border-black m-5'>Civic Survey</h2>
                </div>
                <ul className="category p-4 space-y-2">
                    {/* Surveyor Links */}
                    {isSurveyor && (
                        <>
                            <li>
                                <NavLink className='w-full m-auto flex items-center space-x-2 gap-2' to='surveyor'>
                                    <IoMdHome></IoMdHome>
                                    Surveyor Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className='w-full m-auto flex items-center space-x-2 gap-2' to='surveyor/create'>
                                    <BiCategory></BiCategory>
                                    Create Survey
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className='w-full m-auto flex items-center space-x-2 gap-2' to='surveyor/surveys'>
                                    <BiBookContent></BiBookContent>
                                    View Surveys
                                </NavLink>
                            </li>
                        </>
                    )}
                     {/* Admin Links */}
                    {isAdmin && ( 
                        <>
                            <li>
                                <NavLink className='w-full m-auto flex items-center space-x-2 gap-2' to='adminHome'>
                                    <IoMdHome></IoMdHome>
                                    Admin Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className='w-full m-auto flex items-center space-x-2 gap-2' to='admin/users'>
                                    <FaUserTie></FaUserTie>
                                    Manage Users
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
                    )}
                        
                    {/* User Links */}
                    {isUser && (
                        <>
                                <li>
                                    <NavLink className='w-full m-auto flex items-center space-x-2 gap-2' to='user/Home'>
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
                    )}    
                    
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