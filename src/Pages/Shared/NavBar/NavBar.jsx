import { Link } from "react-router-dom";
import logo from "../../../assets/Image/logo2.jpg";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const NavBar = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleLogOut = () =>{
        logOut()
        .then(() =>{})
        .catch(error => console.log(error))
    }
    const navOption = <>
        <Link to="/"> <li><a>Home</a></li></Link>
        <Link to="/suurveys"><li><a>Surveys</a></li></Link>
        <Link ><li><a>Price</a></li></Link> 
        <Link ><li><a>FAQ's</a></li></Link>        
        <li>
            <details>
                <summary>DashBoard</summary>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
            </details>
        </li>        
    </>
    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-35 max-w-screen-xl  mx-auto bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navOption}
                        </ul>
                    </div>
                    <div className="w-[50%] m-auto ml-0">
                        <img src={logo} alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOption}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? 
                        <><button onClick={handleLogOut} className="btn">Log-Out</button></> : 
                        <><Link to="/login"><button className="btn">Login</button></Link></>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;