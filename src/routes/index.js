import { lazy } from 'react'
const Dashboard = lazy(() => import('../pages/protected/Dashboard'));
const AboutUs = lazy(() => import('../pages/protected/AboutUs'));
const AccountDetail = lazy(() => import('../pages/protected/AccountDetail'));
let routes = [
  {
    path: '/dashboard', // the url
    component: Dashboard, // component
  },
  {
    path: '/account-detail', // the url
    component: AccountDetail, // component
  },
  {
    path: '/about-us', 
    component: AboutUs, //page
  },
  
];
export default routes
