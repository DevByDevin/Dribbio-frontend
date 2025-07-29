import { Footer } from '../components/ui/Footer';
import { Navbar } from '../components/ui/Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => (
  <>
    <Navbar />
    <main className='pt-16'>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default MainLayout;
