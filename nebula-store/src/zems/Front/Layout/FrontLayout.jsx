import { Outlet } from 'react-router-dom';
import Navbar from '../../../components/Section/Navbar';
import Footer from '../../../components/Section/Footer';

const FrontLayout = () => {
  return (
    <div className="front-layout min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default FrontLayout;
