import { lazy } from 'react'
const Dashboard = lazy(() => import('../pages/protected/Dashboard'));
const AccountDetail = lazy(() => import('../pages/protected/AccountDetail'));
const WithDraw = lazy(() => import('../pages/protected/WithDraw'));
const DeleteAccount = lazy(() => import('../pages/protected/DeleteAccount'));
const AboutUs = lazy(() => import('../pages/protected/AboutUs'));
const ContactUs = lazy(() => import('../pages/protected/ContactUs'));
const SubmitedReview = lazy(() => import('../pages/protected/SubmitedReview'));
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
    path: '/withdraw', // the url
    component: WithDraw, // component
  },
  {
    path: '/delete-account', // the url
    component: DeleteAccount, // component
  },
  {
    path: '/about-us', 
    component: AboutUs, //page
  },
  {
    path: '/contact-us', 
    component: ContactUs, //page
  },
  {
    path: '/SubmitedReview', 
    component: SubmitedReview, //page
  },
];
export default routes
