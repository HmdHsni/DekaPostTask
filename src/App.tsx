import React from 'react'

import { Navbar } from './Components/Navbar';
import DashboardLayout from './Components/Layout/Dashboard/DashboardLayout';
import { Route, Routes } from 'react-router-dom';
import { Todos } from './Components/Todos';
import { Wheather } from './Components/Wheather';
import { Profile } from './Components/Profile';
import Dashboard from './Components/Dashboard';
import { ThemeProvider } from './Components/ThemeProvider ';
import ThemeToggle from './Components/ThemeToggle';



function App() {
  return (
  
 <div  className="flex flex-col justify-center max-w-[1440px] px-3 mx-auto">
     {/* <DashboardLayout> */}
    {/* <div className='grid grid-cols-12 justify-center items-center bg-gray-50 text-center my-auto py-[10%] '>
      <div className='col-span-12  '>9:45</div>
      <div className=' col-span-12  text-center'>خوش آمدید</div>
    </div> */}
{/* </DashboardLayout> */}
<ThemeProvider>
  <ThemeToggle/>
<DashboardLayout>
      <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/weather" element={<Wheather />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </DashboardLayout>
    </ThemeProvider>
 </div>
  );
}

export default App;
