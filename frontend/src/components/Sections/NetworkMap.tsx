import React from 'react';
import { FiSearch, FiFilter, FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import Company from '../../assets/CompanyLogo.png';
const NetworkMap= () => {

     const navigate = useNavigate();

  const handleAddDeal = () => {
    navigate('/add-deal'); //  route
  };
  const CountBadge = ({ count = '99+', filled = false }) => (
  <div
    className={`px-[4px] py-[1px] text-[10px] rounded-[2px] leading-none ${
      filled ? 'bg-[#3262FF] text-white' : 'border border-[#303030] text-white'
    }`}
  >
    {count}
  </div>
);
const stats = [
    { label: "Total Connection", value: "23", gradient: 'from-[#0C0D17] via-[#0C0D17] to-[#102361]' },
    { label: "Investors", value: "18", gradient: 'from-[#0C0D17] via-[#0C0D17] to-[#102361]'},
    { label: "Candidates", value: "16", gradient: 'from-[#0C0D17] via-[#0C0D17] to-[#102361]' },
    { label: "Partners", value: "31", gradient: 'from-[#0C0D17] via-[#0C0D17] to-[#102361]' },
    
];

const Tab = ({ label, filled }) => (
  <div className="flex items-center px-2 py-1 space-x-[4px] bg-transparent border-none w-fit h-[40px] whitespace-nowrap text-white text-[12px]">
    <span>{label}</span>
    <CountBadge filled={filled} />
  </div>
);
return(
    <div className="flex flex-col items-start gap-10 absolute w-[1080px] h-[776px] left-[230px] top-[70px] p-0">
    <div className="flex flex-row justify-between items-center w-[1080px] h-[52px] gap-[200px] p-0">
  <div className="flex flex-col">
    <h3 className="font-semibold text-[20px] leading-[28px] tracking-[-0.002em] text-[#E6E6E6] font-neulis">
      Network Map
    </h3>
    <p className="text-[#A9ADB1] text-[12px] leading-[16px] tracking-[0.0025em] font-normal font-sans">
      Discover Warm intro paths and manage your professional network
    </p>
  </div>

  {/* Right Side: Buttons */}
  <div className="flex items-center gap-4">

    <button
      className="bg-[#3262FF] text-white text-sm font-medium px-5 py-2 rounded-[12px] flex items-center gap-2 whitespace-nowrap"
      onClick={handleAddDeal}
    >
      <FiPlus size={16} />
      Add Connection
    </button>
  </div>
</div>


{/* startup cards */}
<div className="w-full max-w-[1200px] mx-auto">
 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-0">
                {stats.map((stat, idx) => (
                    <div
                        key={idx}
                        className={`p-3 h-[100px] rounded-xl border border-gray-800 shadow-lg bg-gradient-to-br ${stat.gradient}`}
                    >
                        <p className="text-gray-300 text-sm">{stat.label}</p>
                        <p className="text-2xl font-semibold mt-2">{stat.value}</p>
                    </div>
                ))}
            </div>
            </div>
            {/* closed */}
  
<div className="flex flex-row justify-end items-center p-4 w-[1080px] h-[72px] border border-[#303030] rounded-2xl">
<div className="flex flex-row items-center space-x-3">
    <button aria-label="Filter" className="text-white hover:text-[#3262FF] cursor-pointer">
      <FiFilter size={20} />
    </button>
    <button aria-label="Search" className="text-white hover:text-[#3262FF] cursor-pointer">
      <FiSearch size={20} />
    </button>
  </div>
  </div>
<div className="flex flex-col items-start p-0 w-[1080px] h-[588px] order-1 self-stretch flex-none">
<div className='flex flex-row flex-start items-center  p-0 gap-2 w-[1080px] h-[280px] '>
    <div className="flex flex-col items-start p-0 w-[1080px] h-[588px] order-1 self-stretch flex-none"> 
               <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '0px',
      gap: '16px',
      width: '1080px',
      height: '280px',
      flex: 'none',
      order: 1,
      flexGrow: 0,
    }}
    > 
  {/* cards 1 */}
  <div className="flex flex-col items-start p-4 gap-4 w-[540px] h-[310px] rounded-xl bg-gradient-to-br from-[#0C0D17] via-[#0C0D17] to-[#102361]">
  {/* First Major Block */}
  <div className="flex flex-col items-start gap-3 w-[309px]">
    {/* Sub-section Top */}
    <div className="flex flex-row justify-between items-center w-[160%] h-[50px] gap-6">
      {/* Left Block */}
      <div className="flex flex-row items-center gap-2">
                    {/* Logo */}
  <img 
  src={Company} 
        alt="logo"
        className="w-[28px] h-[28px] rounded-full object-cover" 
 /> 
        <div className="font-semibold text-base text-white">Reid Hoffman</div>
        <div className="text-[10px] text-white bg-[#2F334D] px-2 py-[2px] rounded-full border border-[#303030]">
          Investor
        </div>
      </div>
      {/* Right Block */}
      <div className="flex flex-col justify-end items-start w-[70px] h-[50px] rounded-md">
        <div className="text-s font-bold text-[#4fbf26]">Available</div>
      </div>
      </div>
       <p className='text-xs'>Partner at Greylock Partners at Greylock Partners</p>
    
    {/* Pill Row */}
    <div className="flex flex-row items-start gap-2 w-[264px] h-[20px]">
      {['B2B', 'AI', 'Consumer'].map((pill, index) => (
        <div
          key={index}
          className="flex items-center justify-center px-2.5 py-[2px] h-[20px] text-white text-[10px] rounded-full border border-[#303030] bg-gradient-to-br from-[#0C0D17] via-[#0C0D17] to-[#102361]"
        >
          {pill}
        </div>
      ))}
    </div>
  </div>
  {/* Second Major Block */}
  <div className="flex flex-col items-start gap-3 w-[400px] h-[103px]">
    {/* Top Row */}
    <div className="flex flex-row justify-between items-start w-[400px] h-[37px] gap-[250px]">
      {/* Left & Right Items */}
      <div className="flex flex-row justify-between items-start gap-[100px] w-[250%] h-[37px]">
        {/* Left Content */}
        <div className="flex flex-col">
          <span className="text-sm text-[#E6E6E6]">Strong Connection</span>
           <span className="text-sm text-[#A9ADB1]">You <span className= "mx-1">→</span> Sarah Wilson <span className="mx-1">→</span> Reid Hoffman</span>
        </div>
        {/* Right Content */}
        <div className="flex flex-col justify-end items-end">
          {/* <span className="text-sm text-[#E6E6E6]">Next Action</span> */}
          <span className="text-sm text-[#A9ADB1]">8 Mutual</span>
        </div>
      </div>
    </div>
    {/* Description Text */}
    <div className="w-[500px] h-[54px] text-sm leading-[18px] tracking-[0.02em] text-[#A9ADB1] font-normal font-[Neulis Sans]">
      Worked together at LinkedIn for 4 years. Sarah can make warm intro.
    </div>
  </div>
  {/* buttons styling */}
  <div className="flex flex-row justify-between items-center w-[90%] h-10">
  {/* Left Side Buttons */}
  <div className="flex flex-row gap-2">
    {/* Primary Button - Schedule */}
    <button className="flex items-center justify-center px-6 py-3 w-[150px] h-10 bg-[#3262FF] text-white rounded-xl cursor-pointer">
      Request Intro
    </button>
    {/* Secondary Button - Notes */}
    <button className="flex items-center justify-center px-6 py-3 w-[100px] h-10 bg-[#2F334D] text-white rounded-xl cursor-pointer">
      Message
    </button>
  </div>
{/* Right Side Content */}
  <div className="text-[#E6E6E6] text-sm">
    2 days ago
  </div>
</div>
 </div>
{/* cards 2 */}
<div className="flex flex-col items-start p-4 gap-4 w-[540px] h-[310px] rounded-xl bg-gradient-to-br from-[#0C0D17] via-[#0C0D17] to-[#102361]">
  {/* First Major Block */}
  <div className="flex flex-col items-start gap-3 w-[309px]">
    {/* Sub-section Top */}
    <div className="flex flex-row justify-between items-center w-[160%] h-[50px] gap-6">
      {/* Left Block */}
      <div className="flex flex-row items-center gap-2">
         <img 
  src={Company} 
        alt="logo"
        className="w-[28px] h-[28px] rounded-full object-cover" 
 />
        <div className="font-semibold text-base text-white">Jessica Chen</div>
        <div className="text-[10px] text-white bg-[#2F334D] px-2 py-[2px] rounded-full border border-[#303030]">
          Partnership
        </div>
      </div>
      {/* Right Block */}
      <div className="flex flex-col justify-center items-start w-[70px] h-[50px] rounded-md">
         <div className="text-s font-bold text-[#4fbf26]">Available</div>
      </div>
    </div>
       <p className='text-xs'>Partner at Greylock Partners at Greylock Partners</p>
    
    {/* Pill Row */}
    <div className="flex flex-row items-start gap-2 w-[264px] h-[20px]">
      {['Fintech', 'Payments', 'B2B'].map((pill, index) => (
        <div
          key={index}
          className="flex items-center justify-center px-2.5 py-[2px] h-[20px] text-white text-[10px] rounded-full border border-[#303030] bg-gradient-to-br from-[#0C0D17] via-[#0C0D17] to-[#102361]"
        >
          {pill}
        </div>
      ))}
    </div>
  </div>
  {/* Second Major Block */}
  <div className="flex flex-col items-start gap-3 w-[400px] h-[103px]">
    {/* Top Row */}
    <div className="flex flex-row justify-between items-start w-[400px] h-[37px] gap-[200px]">
      {/* Left & Right Items */}
      <div className="flex flex-row justify-between items-start gap-[30px] w-[150%] h-[37px]">
        {/* Left Content */}
        <div className="flex flex-col">
          <span className="text-sm text-[#E6E6E6]">Strong Connection</span>
           <span className="text-sm text-[#A9ADB1]">you <span className="mx-1">→</span>Mike Chen <span className="mx-1">→</span> Jessica Chen</span>
        </div>
        {/* Right Content */}
        <div className="flex flex-col">
          {/* <span className="text-sm text-[#E6E6E6]">Next Action</span> */}
          <span className="text-sm text-[#A9ADB1]">3 Mutual</span>
        </div>
      </div>
    </div>
    {/* Description Text */}
    <div className="w-[500px] h-[54px] text-sm leading-[18px] tracking-[0.02em] text-[#A9ADB1] font-normal font-[Neulis Sans]">
  Mike mentioned Jessica is looking for payment startups.
    </div>
  </div>
  {/* buttons styling */}
  <div className="flex flex-row justify-between items-center w-[90%] h-10">
  {/* Left Side Buttons */}
  <div className="flex flex-row gap-2">
    {/* Primary Button - Schedule */}
    <button className="flex items-center justify-center px-6 py-3 w-[150px] h-10 bg-[#3262FF] text-white rounded-xl cursor-pointer">
      Request Intro
    </button>
    {/* Secondary Button - Notes */}
    <button className="flex items-center justify-center px-6 py-3 w-[100px] h-10 bg-[#2F334D] text-white rounded-xl cursor-pointer">
      Message
    </button>
  </div>
{/* Right Side Content */}
  <div className="text-[#E6E6E6] text-sm">
    2 days ago
  </div>
</div>
 </div> 
 {/* cards2 closing */}
</div>
</div>
</div>
{/* first row closed */}
{/* second Row*/} 
  <div className="my-6 flex justify-center">
    {/* cards container */}
      <div className="flex flex-row gap-4 w-[1080px] h-[280px]">
{/* Cards 3 */}
<div className="flex flex-col items-start p-4 gap-4 w-[540px] h-[310px] rounded-xl bg-gradient-to-br from-[#0C0D17] via-[#0C0D17] to-[#102361]">
  {/* First Major Block */}
  <div className="flex flex-col items-start gap-3 w-[309px]">
    {/* Sub-section Top */}
    <div className="flex flex-row justify-between items-center w-[160%] h-[50px] gap-6">
      {/* Left Block */}
      <div className="flex flex-row items-center gap-2">
         <img 
  src={Company} 
        alt="logo"
        className="w-[28px] h-[28px] rounded-full object-cover" 
 />
        <div className="font-semibold text-base text-white">Jessica Chen</div>
        <div className="text-[10px] text-white bg-[#2F334D] px-2 py-[2px] rounded-full border border-[#303030]">
          Partnership
        </div>
      </div>
      {/* Right Block */}
      <div className="flex flex-col justify-center items-start w-[70px] h-[50px] rounded-md">
         <div className="text-s font-bold text-[#4fbf26]">Available</div>
      </div>
    </div>
       <p className='text-xs'>Partner at Greylock Partners at Greylock Partners</p>
    
    {/* Pill Row */}
    <div className="flex flex-row items-start gap-2 w-[264px] h-[20px]">
      {['Fintech', 'Payments', 'B2B'].map((pill, index) => (
        <div
          key={index}
          className="flex items-center justify-center px-2.5 py-[2px] h-[20px] text-white text-[10px] rounded-full border border-[#303030] bg-gradient-to-br from-[#0C0D17] via-[#0C0D17] to-[#102361]"
        >
          {pill}
        </div>
      ))}
    </div>
  </div>
  {/* Second Major Block */}
  <div className="flex flex-col items-start gap-3 w-[400px] h-[103px]">
    {/* Top Row */}
    <div className="flex flex-row justify-between items-start w-[400px] h-[37px] gap-[200px]">
      {/* Left & Right Items */}
      <div className="flex flex-row justify-between items-start gap-[30px] w-[150%] h-[37px]">
        {/* Left Content */}
        <div className="flex flex-col">
          <span className="text-sm text-[#E6E6E6]">Strong Connection</span>
           <span className="text-sm text-[#A9ADB1]">you <span className="mx-1">→</span>Mike Chen <span className="mx-1">→</span> Jessica Chen</span>
        </div>
        {/* Right Content */}
        <div className="flex flex-col">
          {/* <span className="text-sm text-[#E6E6E6]">Next Action</span> */}
          <span className="text-sm text-[#A9ADB1]">3 Mutual</span>
        </div>
      </div>
    </div>
    {/* Description Text */}
    <div className="w-[500px] h-[54px] text-sm leading-[18px] tracking-[0.02em] text-[#A9ADB1] font-normal font-[Neulis Sans]">
  Mike mentioned Jessica is looking for payment startups.
    </div>
  </div>
  {/* buttons styling */}
  <div className="flex flex-row justify-between items-center w-[90%] h-10">
  {/* Left Side Buttons */}
  <div className="flex flex-row gap-2">
    {/* Primary Button - Schedule */}
    <button className="flex items-center justify-center px-6 py-3 w-[150px] h-10 bg-[#3262FF] text-white rounded-xl cursor-pointer">
      Request Intro
    </button>
    {/* Secondary Button - Notes */}
    <button className="flex items-center justify-center px-6 py-3 w-[100px] h-10 bg-[#2F334D] text-white rounded-xl cursor-pointer">
      Message
    </button>
  </div>
{/* Right Side Content */}
  <div className="text-[#E6E6E6] text-sm">
    2 days ago
  </div>
</div>
 </div> 
 {/* closing */}
 
      {/* cards 4 */}
      <div className="flex flex-col items-start p-4 gap-4 w-[540px] h-[310px] rounded-xl bg-gradient-to-br from-[#0C0D17] via-[#0C0D17] to-[#102361]">
  {/* First Major Block */}
  <div className="flex flex-col items-start gap-3 w-[309px]">
    {/* Sub-section Top */}
    <div className="flex flex-row justify-between items-center w-[160%] h-[50px] gap-6">
      {/* Left Block */}
      <div className="flex flex-row items-center gap-2">
         <img 
  src={Company} 
        alt="logo"
        className="w-[28px] h-[28px] rounded-full object-cover" 
 />
        <div className="font-semibold text-base text-white">Jessica Chen</div>
        <div className="text-[10px] text-white bg-[#2F334D] px-2 py-[2px] rounded-full border border-[#303030]">
          Partnership
        </div>
      </div>
      {/* Right Block */}
      <div className="flex flex-col justify-center items-start w-[70px] h-[50px] rounded-md">
         <div className="text-s font-bold text-[#4fbf26]">Available</div>
      </div>
    </div>
       <p className='text-xs'>Partner at Greylock Partners at Greylock Partners</p>
    
    {/* Pill Row */}
    <div className="flex flex-row items-start gap-2 w-[264px] h-[20px]">
      {['Fintech', 'Payments', 'B2B'].map((pill, index) => (
        <div
          key={index}
          className="flex items-center justify-center px-2.5 py-[2px] h-[20px] text-white text-[10px] rounded-full border border-[#303030] bg-gradient-to-br from-[#0C0D17] via-[#0C0D17] to-[#102361]"
        >
          {pill}
        </div>
      ))}
    </div>
  </div>
  {/* Second Major Block */}
  <div className="flex flex-col items-start gap-3 w-[400px] h-[103px]">
    {/* Top Row */}
    <div className="flex flex-row justify-between items-start w-[400px] h-[37px] gap-[200px]">
      {/* Left & Right Items */}
      <div className="flex flex-row justify-between items-start gap-[30px] w-[150%] h-[37px]">
        {/* Left Content */}
        <div className="flex flex-col">
          <span className="text-sm text-[#E6E6E6]">Strong Connection</span>
           <span className="text-sm text-[#A9ADB1]">you <span className="mx-1">→</span>Mike Chen <span className="mx-1">→</span> Jessica Chen</span>
        </div>
        {/* Right Content */}
        <div className="flex flex-col">
          {/* <span className="text-sm text-[#E6E6E6]">Next Action</span> */}
          <span className="text-sm text-[#A9ADB1]">3 Mutual</span>
        </div>
      </div>
    </div>
    {/* Description Text */}
    <div className="w-[500px] h-[54px] text-sm leading-[18px] tracking-[0.02em] text-[#A9ADB1] font-normal font-[Neulis Sans]">
  Mike mentioned Jessica is looking for payment startups.
    </div>
  </div>
  {/* buttons styling */}
  <div className="flex flex-row justify-between items-center w-[90%] h-10">
  {/* Left Side Buttons */}
  <div className="flex flex-row gap-2">
    {/* Primary Button - Schedule */}
    <button className="flex items-center justify-center px-6 py-3 w-[150px] h-10 bg-[#3262FF] text-white rounded-xl cursor-pointer">
      Request Intro
    </button>
    {/* Secondary Button - Notes */}
    <button className="flex items-center justify-center px-6 py-3 w-[100px] h-10 bg-[#2F334D] text-white rounded-xl cursor-pointer">
      Message
    </button>
  </div>
{/* Right Side Content */}
  <div className="text-[#E6E6E6] text-sm">
    2 days ago
  </div>
</div>
 </div> 

  {/*card 4 closed  */}


</div>

</div>

                
</div>

  
                </div>


);
};
export default NetworkMap;