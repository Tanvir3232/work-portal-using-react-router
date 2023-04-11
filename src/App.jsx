import { createContext, useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import { Outlet, useLoaderData } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
export const JobContext = createContext([]);
function App() {
  const jobs = useLoaderData();
  
  return (
    <JobContext.Provider value={jobs}>
       <Header></Header>
       <Outlet></Outlet>
       <Toaster />
    </JobContext.Provider>
  )
}

export default App
