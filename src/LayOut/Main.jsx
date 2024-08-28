
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import NavBar from '../Pages/Shared/NavBar/NavBar';

const Main = () => {
    const location = useLocation();
    const noHeadFoot = location.pathname.includes('login') || location.pathname.includes('singup');
    return (
        <div >
            { noHeadFoot || <NavBar></NavBar> }
            <Outlet></Outlet>
            { noHeadFoot || <Footer></Footer> }
        </div>
    );
};

export default Main;