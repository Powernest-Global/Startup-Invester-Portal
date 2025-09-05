import React from 'react';
import Company from '../../assets/CompanyLogo.png';
const completed = 2;
const total = 5;
const percentage = (completed / total) * 100;
const AiAssistant= () => {

     return(
    <div className="flex flex-col items-start gap-10 absolute w-[800px] h-[1150px] left-[230px] top-[70px] p-0">
    <div className="flex flex-row justify-between items-center w-[800px] h-[52px] gap-[200px] p-0">
  <div className="flex flex-col">
    <h3 className="font-semibold text-[20px] leading-[28px] tracking-[-0.002em] text-[#E6E6E6] font-neulis">
      AI Assistant
    </h3>
    <p className="text-[#A9ADB1] text-[12px] leading-[16px] tracking-[0.0025em] font-normal font-sans">
      Smart Suggestions and automation for your founders wokflow.
    </p>
  </div>
</div>
<div className="flex flex-row gap-6 w-full mt-4">
{/* left side */}
<div className="flex flex-row justify-end items-center p-0 w-[780px] h-[1100px] border border-[#303030] rounded-xl">
 <div className="flex flex-row items-center  "> 
    <div className="flex flex-col items-start p-2 w-[730px] gap-3 order-1 self-stretch flex-none ">
    <div className="flex flex-row justify-between items-center w-[900px] h-[52px] gap-[200px] p-5">
    <div className="flex flex-col">
    <h3 className="font-semibold text-[20px]  tracking-[-0.002em] text-[#E6E6E6] font-neulis">
      Smart Insights & Suggestions
    </h3>
    <p className="text-[#A9ADB1] text-[12px] leading-[16px] tracking-[0.0025em] font-normal font-sans">
    Generate professional investor updates using CRM data.
    </p>
    </div>
  </div>
<div className='flex flex-col flex-start items-center  p-0 gap-2 w-[900px] h-[280px] '>
    <div className="flex flex-col items-start p-0 w-[900px] h-[588px] order-1 self-stretch flex-none"> 
               <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '0px',
      gap: '16px',
      width: '900px',
      height: '280px',
      flex: 'none',
      order: 1,
      flexGrow: 0,
    }}
    > 
  {/* cards 1 */}
  <div className="flex flex-col items-start p-4 gap-4 w-[700px] h-[310px] rounded-xl bg-gradient-to-br from-[#0C0D17] via-[#0C0D17] to-[#102361]">
  {/* First Major Block */}
<div className="flex flex-col items-start gap-3 w-[430px]">
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
      <div className="flex flex-col justify-center items-start w-[80px] h-[50px] rounded-md">
         <div className="text-s font-bold text-[#4fbf26]">High</div>
      </div>
    </div>
       <p className='text-sm'>Partner at Greylock Partners at Greylock Partners</p>
  
  </div>
  {/* Second Major Block */}
  <div className="flex flex-col items-start gap-3 w-[650px] h-[103px]">
    {/* Top Row */}
    <div className="flex flex-row justify-between items-start w-[650px] h-[37px] gap-[200px]">
      {/* Left & Right Items */}
      <div className="flex flex-row justify-between items-start gap-[30px] w-[150%] h-[37px]">
        {/* Left Content */}
        <div className="flex flex-col">
          <span className="text-sm text-[#E6E6E6]">Due</span>
           <span className="text-sm  text-[#A9ADB1]"> This week</span>
        </div>
        {/* Right Content */}
        <div className="flex flex-col">
          <span className="text-sm font-bold text-[#A9ADB1]">95% Confidence</span>
        </div>
      </div>
    </div>
    {/* Description Text */}
    <div className="w-[500px] h-[54px] text-sm  font-bold leading-[18px] tracking-[0.02em] text-[#A9ADB1] font-normal font-[Neulis Sans]">
  Send a brief check-in email mentioning the product demo you discussed.
    </div>
  </div>
  {/* buttons styling */}
  <div className="flex flex-row justify-between items-center w-[95%] h-10">
  {/* Left Side Buttons */}
  <div className="flex flex-row gap-2">
    {/* Primary Button - Schedule */}
    <button className="flex items-center justify-center px-6 py-3 w-[200px] h-10 bg-[#3262FF] text-white rounded-xl cursor-pointer">
      Generate Email
    </button>
      </div>
{/* Right Side Content */}
  <div className="text-[#E6E6E6] text-sm">
    5 days ago
  </div>
</div>
 </div>
</div>
</div>
</div>
{/* first row closed */}
{/* second Row*/} 
  <div className="my-6 flex justify-center">
    {/* cards container */}
      <div className="flex flex-row gap-4 w-[900px] h-[280px]">
{/* Cards 3 */}
<div className="flex flex-col items-start p-4 gap-4 w-[700px] h-[310px] rounded-xl bg-gradient-to-br from-[#0C0D17] via-[#0C0D17] to-[#102361]">
  {/* First Major Block */}
  <div className="flex flex-col items-start gap-3 w-[430px]">
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
      <div className="flex flex-col justify-center items-start w-[80px] h-[50px] rounded-md">
         <div className="text-s font-bold text-[#4fbf26]">High</div>
      </div>
    </div>
       <p className='text-sm'>Partner at Greylock Partners at Greylock Partners</p>
  
  </div>
  {/* Second Major Block */}
  <div className="flex flex-col items-start gap-3 w-[650px] h-[103px]">
    {/* Top Row */}
    <div className="flex flex-row justify-between items-start w-[650px] h-[37px] gap-[200px]">
      {/* Left & Right Items */}
      <div className="flex flex-row justify-between items-start gap-[30px] w-[150%] h-[37px]">
        {/* Left Content */}
        <div className="flex flex-col">
          <span className="text-sm text-[#E6E6E6]">Due</span>
           <span className="text-sm  text-[#A9ADB1]"> This week</span>
        </div>
        {/* Right Content */}
        <div className="flex flex-col">
          <span className="text-sm font-bold text-[#A9ADB1]">95% Confidence</span>
        </div>
      </div>
    </div>
    {/* Description Text */}
    <div className="w-[500px] h-[54px] text-sm  font-bold leading-[18px] tracking-[0.02em] text-[#A9ADB1] font-normal font-[Neulis Sans]">
  Send a brief check-in email mentioning the product demo you discussed.
    </div>
  </div>
  {/* buttons styling */}
  <div className="flex flex-row justify-between items-center w-[95%] h-10">
  {/* Left Side Buttons */}
  <div className="flex flex-row gap-2">
    {/* Primary Button - Schedule */}
    <button className="flex items-center justify-center px-6 py-3 w-[200px] h-10 bg-[#3262FF] text-white rounded-xl cursor-pointer">
      Generate Email
    </button>
    
  </div>
{/* Right Side Content */}
  <div className="text-[#E6E6E6] text-sm">
    5 days ago
  </div>
</div>
 </div> 
 {/* cards closing */}
 </div>
</div>
{/* second row closing */}
{/* third Row*/} 
  <div className="my-6 flex justify-center">
    {/* cards container */}
      <div className="flex flex-row gap-4 w-[900px] h-[280px]">
{/* Cards 3 */}
<div className="flex flex-col items-start p-4 gap-4 w-[700px] h-[310px] rounded-xl bg-gradient-to-br from-[#0C0D17] via-[#0C0D17] to-[#102361]">
  {/* First Major Block */}
  <div className="flex flex-col items-start gap-3 w-[430px]">
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
      <div className="flex flex-col justify-center items-start w-[80px] h-[50px] rounded-md">
         <div className="text-s font-bold text-[#4fbf26]">High</div>
      </div>
    </div>
       <p className='text-sm'>Partner at Greylock Partners at Greylock Partners</p>
  </div>
  {/* Second Major Block */}
  <div className="flex flex-col items-start gap-3 w-[650px] h-[103px]">
    {/* Top Row */}
    <div className="flex flex-row justify-between items-start w-[650px] h-[37px] gap-[200px]">
      {/* Left & Right Items */}
      <div className="flex flex-row justify-between items-start gap-[30px] w-[150%] h-[37px]">
        {/* Left Content */}
        <div className="flex flex-col">
          <span className="text-sm text-[#E6E6E6]">Due</span>
           <span className="text-sm  text-[#A9ADB1]"> This week</span>
        </div>
        {/* Right Content */}
        <div className="flex flex-col">
          <span className="text-sm font-bold text-[#A9ADB1]">95% Confidence</span>
        </div>
      </div>
    </div>
    {/* Description Text */}
    <div className="w-[500px] h-[54px] text-sm  font-bold leading-[18px] tracking-[0.02em] text-[#A9ADB1] font-normal font-[Neulis Sans]">
  Send a brief check-in email mentioning the product demo you discussed.
    </div>
  </div>
  {/* buttons styling */}
  <div className="flex flex-row justify-between items-center w-[95%] h-10">
  {/* Left Side Buttons */}
  <div className="flex flex-row gap-2">
    {/* Primary Button - Schedule */}
    <button className="flex items-center justify-center px-6 py-3 w-[200px] h-10 bg-[#3262FF] text-white rounded-xl cursor-pointer">
      Generate Email
    </button>
    </div>
{/* Right Side Content */}
  <div className="text-[#E6E6E6] text-sm">
    5 days ago
  </div>
</div>
 </div> 
 {/* cards closing */}
</div>
</div>
{/* third row closing */}
</div>
</div>
</div>
{/* left side closed */}
            {/* Right div */}
            
<div className='flex flex-col flex-start items-center  p-0 gap-2 w-[310px] h-[280px] '>
    <div className="flex flex-col items-start p-0 w-[310px] h-[480px] order-1 self-stretch flex-none"> 
   <div className="flex-1 h-auto bg-gradient-to-br from-[#0C0D17] via-[#0C0D17] to-[#102361] rounded-xl p-5 shadow-lg">
    {/* Title */}
    <h2 className="text-[#e5e5e5] text-lg font-semibold mb-4">Weekly Progress</h2>

    {/* Header Row */}
    <div className="flex flex-row justify-between items-center w-[300px] mb-3">
      <span className="text-[#a9adb1] text-xs">Total Completion</span>
      <span className="text-xs text-[#A9ADB1]">{completed}/{total}</span>
    </div>

    {/* Progress Bar */}
    <div className="w-full h-2 rounded-full bg-[#e5e5e5] overflow-hidden mb-1">
      <div
        className="h-full bg-blue-500"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>

    {/* Completion Text Below the Bar */}
    <div className="text-center mt-1">
      <span className="text-[40px] text-[#e5e5e5] font-medium">
         {percentage}%
      </span>
      </div>
      <div  className='text-center'>
      <span className="text-[20px] text-[#e5e5e5] font-medium">
        Weekly Completion Rate
      </span>
    </div>
  </div>
  {/* first closed */}
  {/* second */}
  
  <div className="my-6 flex justify-center">
  <div className="flex-1 h-auto w-[350px] bg-gradient-to-br from-[#0C0D17] via-[#0C0D17] to-[#102361] rounded-xl p-5 shadow-lg">
    <h2 className="text-[#e5e5e5] text-lg font-semibold mb-4">Weekly Tasks</h2>

    {/* Task 1 - Completed */}
    <div className="flex items-center gap-2 mb-3">
      <span className="text-green-500">✔️</span>
      <p className="text-sm text-[#a9adb1] line-through">Follow up with three investors</p>
    </div>

    {/* Task 2 - Completed */}
    <div className="flex items-center gap-2 mb-3">
      <span className="text-green-500">✔️</span>
      <p className="text-sm text-[#a9adb1] line-through">Scheduled three candidate interview.</p>
    </div>

    {/* Task 3 - Pending */}
    <div className="flex items-center gap-2 mb-3">
      <span className="text-yellow-400">🕒</span>
      <p className="text-sm text-[#a9adb1]">Draft Partnership proposal for stripe.</p>
    </div>

    {/* Task 4 - Pending */}
    <div className="flex items-center gap-2 mb-3">
      <span className="text-yellow-400">🕒</span>
      <p className="text-sm text-[#a9adb1]">Send Investor Update to 12 investors</p>
    </div>

    {/* Task 5 - Pending */}
    <div className="flex items-center gap-2">
      <span className="text-yellow-400">🕒</span>
      <p className="text-sm text-[#a9adb1]">Request Intro to Reid Hoffman</p>
    </div>
  </div>
</div>
</div>
  </div>
  </div>
 </div>         


);
};
export default AiAssistant;