import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import { jobAndAppliedJobsData } from './components/JobsData/JobsAndAppliedJobs';
import JobDetails from './components/JobDetails/JobDetails';
import AppliedJob from './components/AppliedJob/AppliedJob';
import ErrorPage from './components/ErrorPage/ErrorPage';


const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    loader:jobAndAppliedJobsData,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('/jobCategories.json')
      },
      {
        path:'job/:jobId',
        element:<JobDetails></JobDetails>
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/applied-job',
        element:<AppliedJob></AppliedJob>
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
