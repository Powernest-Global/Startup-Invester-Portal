//Src/components/Dashboard.tsx
import React, { useState } from 'react';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/SidebarMenu';
import Sections from './Sections/index';
import BrowseStartups from './Sections/BrowseStartups';


interface DashboardProps {
  userData: any; //  replace 'any' with the actual shape of your user data
}

const Dashboard: React.FC<DashboardProps> = ({ userData }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // sidebar toggle state
    const [activeLink, setActiveLink] = useState('Dashboard'); 
  console.log('User data in Dashboard:', userData);
    const handleToggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };



  return (
     <div className="min-h-screen flex flex-col">
     {/* <div> */}
        <Navbar onToggleSidebar={handleToggleSidebar}/>
       
     
        {/* <div className="grid grid-cols-1 lg:grid-cols-[16rem_2fr_1fr] pt-16 p-2 min-h-screen"> */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-[16rem_1fr] pt-16 p-2 min-h-screen"> */}
          <div
  className={`grid grid-cols-1 ${
    activeLink === 'Browse Startups'
      ? 'lg:grid-cols-[16rem_1fr]'
      : 'lg:grid-cols-[16rem_2fr_1fr]'
  } pt-16 p-2 min-h-screen`}
>

  {/* Sidebar */}
  {isSidebarOpen && (
  <aside className="hidden lg:block">
    <Sidebar activeLink={activeLink} setActiveLink={setActiveLink} />

  </aside>
   )}
  {/* Profile Section */}
  
 {activeLink === 'Dashboard' && <Sections />}
{activeLink === 'Browse Startups' && <BrowseStartups />}


</div>
 

    </div>
  )
}


export default Dashboard;
