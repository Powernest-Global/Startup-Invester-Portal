// Src/components/Dashboard.tsx
import React, { useState } from 'react';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/SidebarMenu';
import Sections from './Sections/index';
import Fundraising from  './Sections/Fundraising';
import ScheduleMeeting from './Sections/ScheduleMeeting'
import BrowseStartups from './Sections/BrowseStartups';
import DealRoom from './Sections/DealRoom';
import Capital from './Sections/Capital';
import Network from './Sections/Network';
import Portfolio from './Sections/Portfolio';
import Hiring from './Sections/Hiring';
import Partnership from './Sections/Partnership';
import NetworkMap from './Sections/NetworkMap';
import Updates from './Sections/Updates';


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
      ? 'lg:grid-cols-[12rem_1fr]'
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
 {activeLink === 'Fundraising' && <Fundraising/>}
 {activeLink === 'Schedule Meeting'&& <ScheduleMeeting />}
{activeLink === 'Browse Startups' && <BrowseStartups />}
{activeLink === 'Deal Room' &&  <DealRoom />}
{activeLink === 'Capital' &&  <Capital />}
{activeLink === 'Network' &&  <Network />}
{activeLink === 'Portfolio' &&  <Portfolio />}
{activeLink === 'Hiring' && <Hiring />}
{activeLink === 'Partnerships' && <Partnership/>}
{activeLink === 'Network Map' && < NetworkMap />}
{activeLink === 'Updates'  && <Updates />}


</div>
 </div>
  )
}
export default Dashboard;
