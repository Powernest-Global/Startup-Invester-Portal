// Src/components/Dashboard.tsx
import React, { useState } from 'react';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/SidebarMenu';
import Sections from './Sections/index';
import Fundraising from './Sections/Fundraising';
import ScheduleMeeting from './Sections/ScheduleMeeting';
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
  userData: any; // replace 'any' with actual user data type
}

const Dashboard: React.FC<DashboardProps> = ({ userData }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeLink, setActiveLink] = useState('Dashboard');

  console.log('User data in Dashboard:', userData);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  // Pages that should hide the right sidebar
  const fullWidthPages = ['Network', 'Capital', 'Portfolio', 'Browse Startups'];

  const renderContent = () => {
    switch (activeLink) {
      case 'Dashboard':
        return <Sections />;
      case 'Fundraising':
        return <Fundraising />;
      case 'Schedule Meeting':
        return <ScheduleMeeting />;
      case 'Browse Startups':
        return <BrowseStartups />;
      case 'Deal Room':
        return <DealRoom />;
      case 'Capital':
        return <Capital />;
      case 'Network':
        return <Network />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Hiring':
        return <Hiring />;
      case 'Partnerships':
        return <Partnership />;
      case 'Network Map':
        return <NetworkMap />;
      case 'Updates':
        return <Updates />;
      default:
        return <Sections />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onToggleSidebar={handleToggleSidebar} />

      <div
        className={`grid grid-cols-1 ${
          fullWidthPages.includes(activeLink)
            ? 'lg:grid-cols-[16rem_1fr]' // Sidebar + Main (no right sidebar)
            : 'lg:grid-cols-[16rem_2fr_1fr]' // Sidebar + Main + Right sidebar
        } pt-16 p-2 min-h-screen`}
      >
        {/* Sidebar */}
        {isSidebarOpen && (
          <aside className="hidden lg:block">
            <Sidebar activeLink={activeLink} setActiveLink={setActiveLink} />
          </aside>
        )}

        {/* Main Section */}
        {renderContent()}

        {/* Right Sidebar (only visible if not in fullWidthPages) */}
        {!fullWidthPages.includes(activeLink) && (
          <aside className="hidden lg:block">{/* Right sidebar content */}</aside>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
