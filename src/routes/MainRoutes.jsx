import MainLayout from 'layout/MainLayout';
import { lazy } from 'react';
// Custom Components
import Loadable from 'ui-component/Loadable';

// utilities routing
const Dashboard = Loadable(lazy(() => import('views/Home')));

const mainRoutes = [
   {
      path: '/',
      element: <Dashboard />
   }
];

const MainRoutes = {
   path: '/',
   element: <MainLayout />,
   children: mainRoutes
};
export default MainRoutes;
