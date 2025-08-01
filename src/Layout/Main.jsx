import Footer from '@/SharedPages/Footer/Footer';
import Navbar from '@/SharedPages/Navbar/Navbar';
import { Outlet } from 'react-router';

const Main = () => {


    return (
        // <div>
        //     <div >
        //         <Navbar></Navbar>
        //     </div>
        //     <div className='container mx-auto flex-grow'>
        //         <Outlet></Outlet>
        //     </div>

        //     <Footer></Footer>

        // </div>
        <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <div>
                <Navbar />
            </div>

            {/* Main Content */}
            <div className="container mx-auto flex-grow">
                <Outlet />
            </div>

            {/* Footer fixed at bottom */}
            <Footer />
        </div>
    );
};

export default Main;