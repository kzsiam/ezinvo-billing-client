import { AuthContext } from '@/Contexts/AuthProvider';
import Footer from '@/SharedPages/Footer/Footer';
import Navbar from '@/SharedPages/Navbar/Navbar';
import { Outlet } from 'react-router';

const Main = () => {

  
    return (
        <div>
            <div className=''>
                <Navbar></Navbar>
            </div>
            <div className='container mx-auto'>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default Main;