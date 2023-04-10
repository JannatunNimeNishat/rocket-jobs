import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './components/ErrorPage'
import Home from './components/Home'
import Statistics from './components/Statistics'
import AppliedJobs from './components/AppliedJobs'
import Blog from './components/Blog'
import JobDetails from './components/JobDetails'
import singleJobDetail from './utils/JobDetailLoader'
import { appliedJobs } from './utils/fakedb'
const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    // errorElement:<ErrorPage/>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'applied-jobs',
        element:<AppliedJobs></AppliedJobs>,
        loader:appliedJobs
      },
      {
        path:'blog',
        element:<Blog></Blog>
      },
      {
        path:'jobDetails/:id',
        element:<JobDetails></JobDetails>,
        loader:({params})=> singleJobDetail(params.id)
        
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
