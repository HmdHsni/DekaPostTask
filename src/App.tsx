import React, { useEffect } from 'react'

import { Navbar } from './Components/Navbar';
import DashboardLayout from './Components/Layout/Dashboard/DashboardLayout';
import { Route, Routes } from 'react-router-dom';
import { Todos } from './Components/Todos';
import { Wheather } from './Components/Wheather';
import { Profile } from './Components/Profile';
import Dashboard from './Components/Dashboard';
import { ThemeProvider } from './Components/ThemeProvider ';
import ThemeToggle from './Components/ThemeToggle';
import { useTranslation } from 'react-i18next';
function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    document.documentElement.setAttribute('dir', i18n.language === 'fa' ? 'rtl' : 'ltr');
  }, [i18n.language]);
  return (
 <div  className="flex flex-col justify-center max-w-[1440px] px-3 mx-auto">
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
