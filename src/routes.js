import { Navigate } from 'react-router-dom';
import DashboardLayout from './dashboardLayout/DashboardLayout';
import MainLayout from './mainLayout/MainLayout';
import Vista1 from '../src/pages/visualizacion1';
import Vista2 from '../src/pages/visualizacion2';
import Vista3 from '../src/pages/visualizacion3';
import NotFound from '../src/pages/NotFound';



const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: '*', element: <Navigate to="/404" /> },
  { path: 'dashboard', element: <Vista1 /> },
      { path: 'dashboard2', element: <Vista2/> },
      { path: 'dashboard3', element: <Vista3/> } 

    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> },


    ]
  }
];

export default routes;
