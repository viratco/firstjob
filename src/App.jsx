import { useState } from 'react';
import viteLogo from '/vite.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import AppLayout from './layout/app-layout';
import LandingPage from './pages/LandingPage';
import OnBoarding from './pages/OnBoarding';
import JobListing from './pages/JobListing';
import Job from './pages/Job';
import MyJobs from './pages/MyJobs';
import PostJobs from './pages/PostJobs';
import SavedJobs from './pages/SavedJobs';
import { ThemeProvider } from './components/ui/theme-provider';
import Login from './pages/Login';
import Signup from './pages/Signup';


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/OnBoarding',
        element: <OnBoarding />,
      },
      {
        path: '/JobListing',
        element: <JobListing />,
      },
      {
        path: '/Job',
        element: <Job />,
      },
      {
        path: '/MyJobs',
        element: <MyJobs />,
      },
      {
        path: '/PostJobs',
        element: <PostJobs />,
      },
      {
        path: '/SavedJobs',
        element: <SavedJobs />,
      },
      {
        path: '/Login',
        element: <Login />,
      },
      {
        path: '/Signup',
        element: <Signup />,
      }
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>


  )
}

export default App;
