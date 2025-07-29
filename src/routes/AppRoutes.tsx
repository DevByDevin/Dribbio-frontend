import { Route, Routes } from 'react-router';
import Home from '../pages/Home';
import MainLayout from '../layout/MainLayout';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

export const AppRoutes = () => (
  <Routes>
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<Signup />} />
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Home />} />
    </Route>
    {/* 
    <Route path='/activities' element={<ActivityList />} />
    <Route path='/activities/new' element={<ActivityCreate />} />
    <Route path='/activities/:id' element={<ActivityDetail />} />
    <Route path='/players/:id' element={<PlayerProfile />} />
    <Route path='/me' element={<MyProfile />} />
    <Route path='*' element={<NotFound />} /> */}
  </Routes>
);
