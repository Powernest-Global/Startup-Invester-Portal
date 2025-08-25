// Src/components/Dashboard.tsx
import React, { useState } from 'react';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/SidebarMenu';
import Sections from './Sections/index';
import BrowseStartups from './Sections/BrowseStartups';
import DealRoom from './Sections/DealRoom';
import Capital from './Sections/Capital';
import Network from './Sections/Network';
import Portfolio from './Sections/Portfolio';


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
{activeLink === 'Browse Startups' && <BrowseStartups />}
{activeLink === 'Deal Room' &&  <DealRoom />}
{activeLink === 'Capital' &&  <Capital />}
{activeLink === 'Network' &&  <Network />}
{activeLink === 'Portfolio' &&  <Portfolio />}





</div>
 

    </div>
  )
}


export default Dashboard;
// import React, { useState } from 'react';

// const Dashboard = ({ theme = 'dark' }) => {
//   const [activeTab, setActiveTab] = useState('Founder');
//   const [selectedDate, setSelectedDate] = useState(15);

//   // Generate calendar days
//   const generateCalendarDays = () => {
//     const days = [];
//     const currentMonth = new Date().getMonth();
//     const currentYear = new Date().getFullYear();
//     const firstDay = new Date(currentYear, currentMonth, 1).getDay();
//     const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    
//     // Add empty cells for days before the first day of the month
//     for (let i = 0; i < firstDay; i++) {
//       days.push(null);
//     }
    
//     // Add days of the month
//     for (let day = 1; day <= daysInMonth; day++) {
//       days.push(day);
//     }
    
//     return days;
//   };

//   const calendarDays = generateCalendarDays();
//   const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

//   // Theme-based classes
//   const isDark = theme === 'dark';
//   const bgMain = isDark ? 'bg-[#05060F]' : 'bg-white';
//   const bgHeader = isDark ? 'bg-[#12131A]' : 'bg-white';
//   const bgSidebar = isDark ? 'bg-[#0A0B14]' : 'bg-gray-50';
//   const bgCard = isDark ? 'bg-[#1E1F26]' : 'bg-white';
//   const textPrimary = isDark ? 'text-white' : 'text-gray-900';
//   const textSecondary = isDark ? 'text-gray-400' : 'text-gray-600';
//   const border = isDark ? 'border-[#1E1F26]' : 'border-gray-200';
//   const inputBg = isDark ? 'bg-[#1E1F26]' : 'bg-gray-100';
//   const hoverBg = isDark ? 'hover:bg-[#1E1F26]' : 'hover:bg-gray-100';

//   return (
//     <div className={`min-h-screen ${bgMain} ${textPrimary}`}>
//       {/* Header */}
//       <div className={`${bgHeader} border-b ${border} px-6 py-4`}>
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-4">
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-8 bg-[#3262FF] rounded-lg flex items-center justify-center">
//                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
//                   <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </div>
//               <span className="font-semibold text-lg">Power Nest</span>
//             </div>
//             <span className={`${textSecondary} text-sm`}>{theme === 'dark' ? 'Dark' : 'Light'} Theme</span>
//           </div>
          
//           <div className="flex items-center gap-4">
//             <div className="relative">
//               <input 
//                 type="text" 
//                 placeholder="Search"
//                 className={`${inputBg} border ${border} rounded-lg px-4 py-2 pl-10 text-sm w-64 focus:outline-none focus:border-[#3262FF]`}
//               />
//               <svg className={`absolute left-3 top-2.5 w-4 h-4 ${textSecondary}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//               </svg>
//             </div>
            
//             <div className="flex items-center gap-3">
//               <div className="w-8 h-8 bg-[#3262FF] rounded-lg flex items-center justify-center relative">
//                 <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M18 8C18 6.17 17.25 4.47 15.93 3.18C14.61 1.88 12.89 1.17 11 1.17C9.11 1.17 7.39 1.88 6.07 3.18C4.75 4.47 4 6.17 4 8C4 15 1 17 1 17H23S20 15 18 8Z"/>
//                   <path d="M13.73 21C13.5 21.31 13.18 21.58 12.82 21.78C12.46 21.98 12.05 22.08 11.64 22.08C11.23 22.08 10.82 21.98 10.46 21.78C10.1 21.58 9.78 21.31 9.55 21"/>
//                 </svg>
//                 <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
//                   <span className="text-white text-xs">1</span>
//                 </div>
//               </div>
              
//               <div className={`w-8 h-8 ${isDark ? 'bg-[#2A2B32]' : 'bg-gray-200'} rounded-lg flex items-center justify-center`}>
//                 <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V19A2 2 0 0 0 5 21H19A2 2 0 0 0 21 19V9ZM20 19H4V3H14V9H20V19Z"/>
//                 </svg>
//               </div>
              
//               <div className="flex items-center gap-2">
//                 <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#3262FF] to-[#1E3A8A] flex items-center justify-center">
//                   <span className="text-white text-sm font-semibold">TM</span>
//                 </div>
//                 <div className="text-sm">
//                   <div className="font-medium">Tobi Mathew</div>
//                   <div className={`${textSecondary} text-xs`}>@tobi05</div>
//                 </div>
//                 <svg className={`w-4 h-4 ${textSecondary}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex">
//         {/* Sidebar */}
//         <div className={`w-64 ${bgSidebar} border-r ${border} min-h-screen p-6`}>
//           {/* User Type Tabs */}
//           <div className="flex gap-2 mb-8">
//             <button 
//               onClick={() => setActiveTab('Founder')}
//               className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
//                 activeTab === 'Founder' 
//                   ? 'bg-[#3262FF] text-white' 
//                   : `${isDark ? 'bg-[#1E1F26] text-gray-400' : 'bg-gray-200 text-gray-600'} hover:text-white`
//               }`}
//             >
//               Founder
//             </button>
//             <button 
//               onClick={() => setActiveTab('Investor')}
//               className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
//                 activeTab === 'Investor' 
//                   ? 'bg-[#3262FF] text-white' 
//                   : `${isDark ? 'bg-[#1E1F26] text-gray-400' : 'bg-gray-200 text-gray-600'} hover:text-white`
//               }`}
//             >
//               Investor
//             </button>
//           </div>

//           {/* Navigation Menu */}
//           <nav className="space-y-2">
//             {[
//               { icon: '📊', name: 'Dashboard', active: true },
//               { icon: '🤖', name: 'AI Agent' },
//               { icon: '👁️', name: 'My Matches' },
//               { icon: '📋', name: 'Manage Deck' },
//               { icon: '📅', name: 'Schedule Meeting' },
//               { icon: '💼', name: 'Job Hiring' },
//               { icon: '📈', name: 'Analytics' }
//             ].map((item, index) => (
//               <div 
//                 key={index}
//                 className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
//                   item.active 
//                     ? 'bg-[#3262FF] text-white' 
//                     : `${textSecondary} hover:text-white ${hoverBg}`
//                 }`}
//               >
//                 <span className="text-lg">{item.icon}</span>
//                 <span className="text-sm font-medium">{item.name}</span>
//               </div>
//             ))}
//           </nav>

//           {/* Bottom Profile Section */}
//           <div className="mt-auto pt-8">
//             <div className={`${bgCard} rounded-xl p-4 ${isDark ? '' : 'shadow-sm'}`}>
//               <div className="flex items-center gap-3 mb-3">
//                 <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3262FF] to-[#1E3A8A] flex items-center justify-center">
//                   <span className="text-white text-sm font-semibold">TM</span>
//                 </div>
//                 <div className="text-sm">
//                   <div className={`font-medium ${textPrimary}`}>Tobi Mathew</div>
//                   <div className={textSecondary}>Founder</div>
//                 </div>
//               </div>
//               <p className={`text-xs ${textSecondary} mb-3`}>
//                 Connect with our AI Agent to share about your startup
//               </p>
//               <button className="w-full bg-[#3262FF] text-white text-sm font-medium py-2 rounded-lg hover:bg-[#2952FF] transition-colors">
//                 Connect Now
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="flex-1 p-6">
//           {/* Fund Raised Progress and Stats Section */}
//           <div className="mb-8">
//             <div className="grid grid-cols-4 gap-6">
//               {/* Fund Raised Section */}
//               <div className="col-span-1">
//                 <div className="mb-4">
//                   <h2 className="text-lg font-semibold mb-2">Fund Raised</h2>
//                   <div className="text-xl font-bold mb-3">$25M / $100M</div>
//                   <div className={`w-full ${isDark ? 'bg-[#1E1F26]' : 'bg-gray-200'} rounded-full h-3`}>
//                     <div className="bg-gradient-to-r from-[#3262FF] to-[#1E3A8A] h-3 rounded-full" style={{ width: '25%' }}></div>
//                   </div>
//                 </div>
//               </div>

//               {/* Stats Cards */}
//               <div className={`${bgCard} rounded-xl p-4 ${isDark ? '' : 'shadow-sm'} h-24 flex items-center`}>
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
//                     <span className="text-white font-bold text-xl">💰</span>
//                   </div>
//                   <div>
//                     <div className="text-2xl font-bold">120</div>
//                     <div className={`${textSecondary} text-sm`}>Mentoring History</div>
//                   </div>
//                 </div>
//               </div>

//               <div className={`${bgCard} rounded-xl p-4 ${isDark ? '' : 'shadow-sm'} h-24 flex items-center`}>
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
//                     <span className="text-white font-bold text-xl">👁️</span>
//                   </div>
//                   <div>
//                     <div className="text-2xl font-bold">220</div>
//                     <div className={`${textSecondary} text-sm`}>Profile Viewed</div>
//                   </div>
//                 </div>
//               </div>

//               <div className={`${bgCard} rounded-xl p-4 ${isDark ? '' : 'shadow-sm'} h-24 flex items-center`}>
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
//                     <span className="text-white font-bold text-xl">💼</span>
//                   </div>
//                   <div>
//                     <div className="text-2xl font-bold">67</div>
//                     <div className={`${textSecondary} text-sm`}>Investor Engagement</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="grid grid-cols-3 gap-6">
//             {/* My Matches Section */}
//             <div className="col-span-2">
//               <div className="flex items-center justify-between mb-6">
//                 <h3 className="text-xl font-semibold">My Matches</h3>
//                 <div className="flex items-center gap-4">
//                   <div className="relative">
//                     <input 
//                       type="text" 
//                       placeholder="Search"
//                       className={`${inputBg} border ${border} rounded-lg px-4 py-2 pl-10 text-sm w-48 focus:outline-none focus:border-[#3262FF]`}
//                     />
//                     <svg className={`absolute left-3 top-2.5 w-4 h-4 ${textSecondary}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                     </svg>
//                   </div>
//                   <button className="text-[#3262FF] text-sm font-medium hover:underline">View all →</button>
//                 </div>
//               </div>

//               {/* Match Cards - 2x2 Grid Layout */}
//               <div className="grid grid-cols-2 gap-4">
//                 {[
//                   {
//                     name: 'BluePeak Ventures',
//                     stage: 'Sector Priority',
//                     match: '85%',
//                     status: 'Viewed',
//                     icon: '⚠️',
//                     color: 'bg-yellow-500'
//                   },
//                   {
//                     name: 'Nova Edge Capital',
//                     stage: 'Match Criteria',
//                     match: '85%',
//                     status: 'Viewed',
//                     icon: '🎯',
//                     color: 'bg-blue-500'
//                   },
//                   {
//                     name: 'Summit Bridge Partners',
//                     stage: 'Sector Priority',
//                     match: '85%',
//                     status: 'Viewed',
//                     icon: '🏔️',
//                     color: 'bg-gray-500'
//                   },
//                   {
//                     name: 'Vertex Spring Investments',
//                     stage: 'Match Criteria',
//                     match: '85%',
//                     status: 'Viewed',
//                     icon: '🌱',
//                     color: 'bg-green-500'
//                   }
//                 ].map((match, index) => (
//                   <div key={index} className={`${bgCard} rounded-xl p-4 ${isDark ? '' : 'shadow-sm'}`}>
//                     <div className="flex items-center gap-3 mb-4">
//                       <div className={`w-10 h-10 ${match.color} rounded-lg flex items-center justify-center`}>
//                         <span className="text-white text-lg">{match.icon}</span>
//                       </div>
//                       <div>
//                         <div className={`font-semibold ${textPrimary} text-sm`}>{match.name}</div>
//                         <div className={`${textSecondary} text-xs`}>{match.stage}</div>
//                       </div>
//                     </div>
//                     <div className="flex items-center justify-between mb-3">
//                       <div className="text-center">
//                         <div className={`text-xs ${textSecondary}`}>Match Score</div>
//                         <div className="font-semibold text-sm">{match.match}</div>
//                       </div>
//                       <div className="text-center">
//                         <div className={`text-xs ${textSecondary}`}>Match Status</div>
//                         <div className="font-semibold text-sm">{match.status}</div>
//                       </div>
//                     </div>
//                     <button className="w-full bg-[#3262FF] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#2952FF] transition-colors">
//                       Request Intro
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Right Sidebar */}
//             <div className="space-y-6">
//               {/* Task Calendar */}
//               <div className={`${bgCard} rounded-xl p-6 ${isDark ? '' : 'shadow-sm'}`}>
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="font-semibold">Task Calendar</h3>
//                   <span className={`text-sm ${textSecondary}`}>March</span>
//                 </div>
                
//                 <div className="mb-4">
//                   <div className="grid grid-cols-3 gap-4 text-center mb-4">
//                     <div>
//                       <div className="text-lg font-bold">40%</div>
//                       <div className={`text-xs ${textSecondary}`}>Investors</div>
//                     </div>
//                     <div>
//                       <div className="text-lg font-bold">24%</div>
//                       <div className={`text-xs ${textSecondary}`}>Advisor</div>
//                     </div>
//                     <div>
//                       <div className="text-lg font-bold">47%</div>
//                       <div className={`text-xs ${textSecondary}`}>Job</div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Calendar Grid */}
//                 <div className="mb-4">
//                   <div className={`grid grid-cols-7 gap-1 text-center text-xs ${textSecondary} mb-2`}>
//                     {weekdays.map((day, index) => (
//                       <div key={index} className="py-1">{day}</div>
//                     ))}
//                   </div>
//                   <div className="grid grid-cols-7 gap-1">
//                     {calendarDays.map((day, index) => (
//                       <div
//                         key={index}
//                         className={`h-8 flex items-center justify-center text-sm cursor-pointer rounded-full transition-colors ${
//                           day === selectedDate
//                             ? 'bg-[#3262FF] text-white'
//                             : day && [16, 17, 18, 20, 21, 24, 25, 30, 31].includes(day)
//                             ? 'bg-[#3262FF] bg-opacity-20 text-[#3262FF]'
//                             : day
//                             ? `${isDark ? 'text-gray-300 hover:bg-[#2A2B32]' : 'text-gray-700 hover:bg-gray-100'}`
//                             : ''
//                         }`}
//                         onClick={() => day && setSelectedDate(day)}
//                       >
//                         {day}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Job Hiring */}
//               <div className={`${bgCard} rounded-xl p-6 ${isDark ? '' : 'shadow-sm'}`}>
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="font-semibold">Job Hiring</h3>
//                   <button className="bg-[#3262FF] text-white px-3 py-1 rounded-lg text-sm font-medium">
//                     Post a job
//                   </button>
//                 </div>
                
//                 <div className="space-y-3">
//                   {[
//                     { name: 'Alex Morgan', role: 'UX/UX Designer', date: '02 Jan 2025' },
//                     { name: 'Jordan Lee', role: 'Web Developer', date: '02 Jan 2025' },
//                     { name: 'Tim Smith', role: 'JavaScript Engineer', date: '03 Jan 2025' },
//                     { name: 'Casey Jordan', role: 'React Developer', date: '05 Jan 2025' }
//                   ].map((person, index) => (
//                     <div key={index} className="flex items-center gap-3">
//                       <div className="w-8 h-8 bg-gradient-to-br from-[#3262FF] to-[#1E3A8A] rounded-full flex items-center justify-center">
//                         <span className="text-white text-xs font-semibold">
//                           {person.name.split(' ').map(n => n[0]).join('')}
//                         </span>
//                       </div>
//                       <div className="flex-1">
//                         <div className={`text-sm font-medium ${textPrimary}`}>{person.name}</div>
//                         <div className={`text-xs ${textSecondary}`}>{person.role}</div>
//                       </div>
//                       <div className={`text-xs ${textSecondary}`}>{person.date}</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;