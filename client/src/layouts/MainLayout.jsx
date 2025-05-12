import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import EnrolledNavbar from '../components/EnrolledNavbar';

const MainLayout = () => {
  return (
    <>
      <EnrolledNavbar/>
      <div className="flex h-screen overflow-hidden">
        <div className="hidden lg:block">
        <Sidebar />          
        </div>
        <div className="flex-1 overflow-y-auto p-4 ml-0 md:ml-64">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
