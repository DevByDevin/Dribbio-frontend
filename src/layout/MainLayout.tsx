import { Navbar } from '../components/ui/Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => (
  <>
    <Navbar />
    <main>
      <Outlet />
    </main>
  </>
);

export default MainLayout;
