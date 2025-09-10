import React from 'react';
import { FiSearch, FiFilter } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
 import Company from '../../assets/CompanyLogo.png';
 import { FiClock } from 'react-icons/fi';
 
const DealRoom = () => {

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

const Tab = ({ label, filled }) => (
  <div className="flex items-center px-2 py-1 space-x-[4px] bg-transparent border-none w-fit h-[40px] whitespace-nowrap text-white text-[12px]">
    <span>{label}</span>
    <CountBadge filled={filled} />
  </div>
);
    return(
      
        <div className="flex flex-col items-start gap-10 absolute w-[1080px] h-[776px] left-[230px] top-[70px] p-0">
  <div className="flex flex-row justify-between items-center w-[1080px] h-[52px] gap-[500px] p-0">
  
  <div>
    <h3 className="font-semibold text-[20px] leading-[28px] tracking-[-0.002em] text-[#E6E6E6] w-[418px] font-neulis">
  Deal Flow Management
</h3>

    <p className="text-[#A9ADB1] text-[12px] leading-[16px] tracking-[0.0025em] w-[418px] font-normal font-sans">
  Track and manage your investment pipeline from sourcing to execution
</p>

  </div>

   
  <button
  className="bg-[#3262FF] text-white text-sm font-medium px-6 py-3 rounded-[12px] flex items-center justify-center gap-2 w-[121px] h-[40px]"
  onClick={handleAddDeal}
>
  Add Deal
</button>

</div>

<div className="flex flex-row justify-between items-center p-4 w-[1080px] h-[72px] border border-[#303030] rounded-2xl">
  
  <div className="flex flex-row items-center space-x-6 w-full max-w-[900px]">
    <div className="flex items-center px-2 py-1 space-x-4 bg-[#2F334D] rounded text-white text-sm h-[36px] whitespace-nowrap">
      <span>All</span>
      <CountBadge filled />
    </div>
    <Tab label="Sourcing" />
    <Tab label="Screening" />
    <Tab label="Diligence" />
    <Tab label="Final Review" />
    <Tab label="Invested" />
    <Tab label="Rejected Deals" />
  </div>

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
  <div className="flex flex-col items-start px-4 pr-4 pl-[52px] py-4 gap-[10px] w-[1080px] h-[48px] bg-[#12131A] border-b border-[#303030] order-0 self-stretch flex-none">
  <div className="flex flex-row items-center p-0 gap-2 w-[990px] h-[16px] order-0 self-stretch flex-none">  
  
  


  <div className="flex flex-row items-center p-0 gap-1 w-[320px] h-[16px] order-0 flex-none">
  Company
</div>
<div className="flex flex-row items-center p-0 gap-[5px] w-[148px] h-[16px] order-1 flex-none">
  Sector
</div>
<div className="flex flex-row items-center p-0 gap-[10px] w-[100px] h-[16px] order-2 flex-none">
  Stage
</div>
<div className="flex flex-row items-center p-0 gap-[10px] w-[100px] h-[16px] order-2 flex-none">
  Owner
</div>
<div className="flex flex-row items-center p-0 gap-[10px] w-[100px] h-[16px] order-2 flex-none">
Status
</div>
<div className="flex flex-row items-center p-0 gap-[10px] w-[100px] h-[16px] order-2 flex-none">
  Last update
</div>
<div className="flex flex-row items-center p-0 gap-[10px] w-[100px] h-[16px] order-2 flex-none">
  Actions
</div>
</div>

</div>
{/* Second */}

<div className="flex flex-col items-start p-0 w-[1080px] h-[540px] order-1 self-stretch flex-none">
  
{/* First company*/}
<div className="flex flex-col items-start p-4 gap-[10px] w-[1080px] h-[60px] border-b border-[#303030] border-b-[0.5px] order-0 self-stretch flex-none">
  <div className="flex flex-row items-center p-0 gap-2 w-[1048px] h-[28px] order-0 self-stretch flex-none">
    <div className="flex flex-row items-center p-0 gap-1 w-[362px] h-[28px] order-0 flex-none">
      
      {/* Checkbox */}
     
      <label className="relative w-5 h-5 flex items-center justify-center cursor-pointer">
  <input
    type="checkbox"
    className="peer appearance-none w-5 h-5 rounded-sm bg-[#303030] border border-[#555] focus:outline-none cursor-pointer"
  />

  <span className="absolute text-[#3262FF] text-[12px] font-bold hidden peer-checked:block select-none">
    ✔
  </span>
</label>


      {/* Logo */}
  <img 
  src={Company} 
        alt="logo"
        className="w-[28px] h-[28px] rounded-full object-cover" 
 />  
      {/* Company Name */}
      <p
        className="w-[87px] h-[20px] font-normal text-[14px] leading-[20px] text-[#E6E6E6] flex-none"
        style={{ fontFamily: 'Neulis Sans, sans-serif' }}
      >
        Tech Start AI
      </p>
    </div>
    <div className="flex flex-row items-center p-0 gap-[5px] w-[148px] h-[20px] order-1 flex-none">
  Fintech
</div>
<div className="flex flex-row items-center p-0 gap-[10px] w-[100px] h-[20px] order-2 flex-none">
  Pre-seed
</div>
<div className="flex flex-row items-center p-0 gap-[10px] w-[144px] h-[20px] order-3 flex-none">
  Girish
</div>


<div className="flex flex-row items-center justify-start p-0 gap-1 w-[100px] h-[24px] order-4 flex-none ml-[-42px]">
  <div className="flex flex-row justify-start items-center px-[6px] py-[4px] gap-1 w-[75px] h-[24px] border border-[#77ED96] rounded-sm">

    <div className="text-[#77ED96] text-[14px] leading-none select-none">•</div>

    
    <div
      className="w-[50px] h-[16px] font-normal text-[12px] leading-[16px] tracking-[0.0025em] text-[#77ED96]"
      style={{ fontFamily: 'Neulis Sans, sans-serif' }}
    >
      Invested
    </div>
  </div>
</div>

<div className="flex flex-row items-center gap-[2px] w-[112px] h-[20px] flex-none order-5">
  <FiClock className="text-[#A9ADB1]" size={16} /> {/* Clock icon, adjust color and size */}
  <span className="text-[#A9ADB1] font-normal text-[12px] leading-[20px] tracking-[0.0025em]" style={{ fontFamily: 'Neulis Sans, sans-serif' }}>
    2 days ago
  </span>
</div>
  
  <div className="flex flex-row items-center justify-center w-[96px] h-[28px] flex-none order-6 ml-[-20px]">
  <button className="text-[#A9ADB1] text-[18px] hover:text-white leading-none">
    ⋮
  </button>
</div>

  </div>
</div>

{/* Second Company */}
  <div className="flex flex-col items-start p-4 gap-[10px] w-[1080px] h-[60px] border-b border-[#303030] border-b-[0.5px] order-0 self-stretch flex-none">
  <div className="flex flex-row items-center p-0 gap-2 w-[1048px] h-[28px] order-0 self-stretch flex-none">
    <div className="flex flex-row items-center p-0 gap-1 w-[362px] h-[28px] order-0 flex-none">
      
      {/* Checkbox */}
     
      <label className="relative w-5 h-5 flex items-center justify-center cursor-pointer">
  <input
    type="checkbox"
    className="peer appearance-none w-5 h-5 rounded-sm bg-[#303030] border border-[#555] focus:outline-none cursor-pointer"
  />

  <span className="absolute text-[#3262FF] text-[12px] font-bold hidden peer-checked:block select-none">
    ✔
  </span>
</label>


      {/* Logo */}
  <img 
  src={Company} 
        alt="logo"
        className="w-[28px] h-[28px] rounded-full object-cover" 
 />  
      {/* Company Name */}
      <p
        className="w-[87px] h-[20px] font-normal text-[14px] leading-[20px] text-[#E6E6E6] flex-none"
        style={{ fontFamily: 'Neulis Sans, sans-serif' }}
      >
        Tech Start AI
      </p>
    </div>
    <div className="flex flex-row items-center p-0 gap-[5px] w-[148px] h-[20px] order-1 flex-none">
  AI/ML
</div>
<div className="flex flex-row items-center p-0 gap-[10px] w-[100px] h-[20px] order-2 flex-none">
  Series A
</div>
<div className="flex flex-row items-center p-0 gap-[10px] w-[144px] h-[20px] order-3 flex-none">
  John Mathew
</div>



<div className="flex flex-row items-center justify-start p-0 gap-1 w-[100px] h-[24px] order-4 flex-none ml-[-42px]">
  <div className="flex items-center gap-1 px-[6px] py-[4px] border border-[##77EDD9] rounded-sm w-full">
    <span className="text-[##77EDD9] text-[14px] leading-none">•</span>
    <span
      className="text-[##77EDD9] text-[12px] leading-[16px] whitespace-nowrap"
      style={{ fontFamily: 'Neulis Sans, sans-serif' }}
    >
      Final Review
    </span>
  </div>
</div>


<div className="flex flex-row items-center gap-[2px] w-[112px] h-[20px] flex-none order-5">
  <FiClock className="text-[#A9ADB1]" size={16} /> {/* Clock icon, adjust color and size */}
  <span className="text-[#A9ADB1] font-normal text-[12px] leading-[20px] tracking-[0.0025em]" style={{ fontFamily: 'Neulis Sans, sans-serif' }}>
    2 days ago
  </span>
</div>
  
  <div className="flex flex-row items-center justify-center w-[96px] h-[28px] flex-none order-6 ml-[-20px]">
  <button className="text-[#A9ADB1] text-[18px] hover:text-white leading-none">
    ⋮
  </button>
</div>

  </div>

</div>
{/* Third company */}
  <div className="flex flex-col items-start p-4 gap-[10px] w-[1080px] h-[60px] border-b border-[#303030] border-b-[0.5px] order-0 self-stretch flex-none">
  <div className="flex flex-row items-center p-0 gap-2 w-[1048px] h-[28px] order-0 self-stretch flex-none">
    <div className="flex flex-row items-center p-0 gap-1 w-[362px] h-[28px] order-0 flex-none">
      
      {/* Checkbox */}
     
      <label className="relative w-5 h-5 flex items-center justify-center cursor-pointer">
  <input
    type="checkbox"
    className="peer appearance-none w-5 h-5 rounded-sm bg-[#303030] border border-[#555] focus:outline-none cursor-pointer"
  />

  <span className="absolute text-[#3262FF] text-[12px] font-bold hidden peer-checked:block select-none">
    ✔
  </span>
</label>


      {/* Logo */}
  <img 
  src={Company} 
        alt="logo"
        className="w-[28px] h-[28px] rounded-full object-cover" 
 />  
      {/* Company Name */}
      <p
        className="w-[87px] h-[20px] font-normal text-[14px] leading-[20px] text-[#E6E6E6] flex-none"
        style={{ fontFamily: 'Neulis Sans, sans-serif' }}
      >
        Ups.AI
      </p>
    </div>
    <div className="flex flex-row items-center p-0 gap-[5px] w-[148px] h-[20px] order-1 flex-none">
  AI/ML
</div>
<div className="flex flex-row items-center p-0 gap-[10px] w-[100px] h-[20px] order-2 flex-none">
  Series A
</div>
<div className="flex flex-row items-center p-0 gap-[10px] w-[144px] h-[20px] order-3 flex-none">
  Andrej
</div>


<div className="flex flex-row items-center justify-start p-0 gap-1 w-[100px] h-[24px] order-4 flex-none ml-[-42px]">
  <div className="flex flex-row justify-start items-center px-[6px] py-[4px] gap-1 w-[75px] h-[24px] border border-[#EDA177] rounded-sm">

    <div className="text-[#EDA177] text-[14px] leading-none select-none">•</div>

    
    <div
      className="w-[50px] h-[16px] font-normal text-[12px] leading-[16px] tracking-[0.0025em] text-[#EDA177]"
      style={{ fontFamily: 'Neulis Sans, sans-serif' }}
    >
      Screening
    </div>
  </div>
</div>

<div className="flex flex-row items-center gap-[2px] w-[112px] h-[20px] flex-none order-5">
  <FiClock className="text-[#A9ADB1]" size={16} /> {/* Clock icon, adjust color and size */}
  <span className="text-[#A9ADB1] font-normal text-[12px] leading-[20px] tracking-[0.0025em]" style={{ fontFamily: 'Neulis Sans, sans-serif' }}>
    Today
  </span>
</div>
  
  <div className="flex flex-row items-center justify-center w-[96px] h-[28px] flex-none order-6 ml-[-20px]">
  <button className="text-[#A9ADB1] text-[18px] hover:text-white leading-none">
    ⋮
  </button>
</div>

  </div>

</div>
{/* Fourth Company */}
<div className="flex flex-col items-start p-4 gap-[10px] w-[1080px] h-[60px] border-b border-[#303030] border-b-[0.5px] order-0 self-stretch flex-none">
  <div className="flex flex-row items-center p-0 gap-2 w-[1048px] h-[28px] order-0 self-stretch flex-none">
    <div className="flex flex-row items-center p-0 gap-1 w-[362px] h-[28px] order-0 flex-none">
      
      {/* Checkbox */}
     
      <label className="relative w-5 h-5 flex items-center justify-center cursor-pointer">
  <input
    type="checkbox"
    className="peer appearance-none w-5 h-5 rounded-sm bg-[#303030] border border-[#555] focus:outline-none cursor-pointer"
  />

  <span className="absolute text-[#3262FF] text-[12px] font-bold hidden peer-checked:block select-none">
    ✔
  </span>
</label>


      {/* Logo */}
  <img 
  src={Company} 
        alt="logo"
        className="w-[28px] h-[28px] rounded-full object-cover" 
 />  
      {/* Company Name */}
      <p
        className="w-[87px] h-[20px] font-normal text-[14px] leading-[20px] text-[#E6E6E6] flex-none"
        style={{ fontFamily: 'Neulis Sans, sans-serif' }}
      >
        Tech Start AI
      </p>
    </div>
    <div className="flex flex-row items-center p-0 gap-[5px] w-[148px] h-[20px] order-1 flex-none">
  Fintech
</div>
<div className="flex flex-row items-center p-0 gap-[10px] w-[100px] h-[20px] order-2 flex-none">
  Pre-seed
</div>
<div className="flex flex-row items-center p-0 gap-[10px] w-[144px] h-[20px] order-3 flex-none">
  Girish
</div>


<div className="flex flex-row items-center justify-start p-0 gap-1 w-[100px] h-[24px] order-4 flex-none ml-[-42px]">
  <div className="flex flex-row justify-start items-center px-[6px] py-[4px] gap-1 w-[75px] h-[24px] border border-[#EDD777] rounded-sm">

    <div className="text-[#EDD777] text-[14px] leading-none select-none">•</div>

    
    <div
      className="w-[50px] h-[16px] font-normal text-[12px] leading-[16px] tracking-[0.0025em] text-[#EDD777]"
      style={{ fontFamily: 'Neulis Sans, sans-serif' }}
    >
      Diligence
    </div>
  </div>
</div>

<div className="flex flex-row items-center gap-[2px] w-[112px] h-[20px] flex-none order-5">
  <FiClock className="text-[#A9ADB1]" size={16} /> {/* Clock icon, adjust color and size */}
  <span className="text-[#A9ADB1] font-normal text-[12px] leading-[20px] tracking-[0.0025em]" style={{ fontFamily: 'Neulis Sans, sans-serif' }}>
    1 Week ago
  </span>
</div>
  
  <div className="flex flex-row items-center justify-center w-[96px] h-[28px] flex-none order-6 ml-[-20px]">
  <button className="text-[#A9ADB1] text-[18px] hover:text-white leading-none">
    ⋮
  </button>
</div>

  </div>

</div>
{/* fifth */}
<div className="flex flex-col items-start p-4 gap-[10px] w-[1080px] h-[60px] border-b border-[#303030] border-b-[0.5px] order-0 self-stretch flex-none">
  <div className="flex flex-row items-center p-0 gap-2 w-[1048px] h-[28px] order-0 self-stretch flex-none">
    <div className="flex flex-row items-center p-0 gap-1 w-[362px] h-[28px] order-0 flex-none">
      
      {/* Checkbox */}
     
      <label className="relative w-5 h-5 flex items-center justify-center cursor-pointer">
  <input
    type="checkbox"
    className="peer appearance-none w-5 h-5 rounded-sm bg-[#303030] border border-[#555] focus:outline-none cursor-pointer"
  />

  <span className="absolute text-[#3262FF] text-[12px] font-bold hidden peer-checked:block select-none">
    ✔
  </span>
</label>


      {/* Logo */}
  <img 
  src={Company} 
        alt="logo"
        className="w-[28px] h-[28px] rounded-full object-cover" 
 />  
      {/* Company Name */}
      <p
        className="w-[87px] h-[20px] font-normal text-[14px] leading-[20px] text-[#E6E6E6] flex-none"
        style={{ fontFamily: 'Neulis Sans, sans-serif' }}
      >
        Tech Start AI
      </p>
    </div>
    <div className="flex flex-row items-center p-0 gap-[5px] w-[148px] h-[20px] order-1 flex-none">
  Fintech
</div>
<div className="flex flex-row items-center p-0 gap-[10px] w-[100px] h-[20px] order-2 flex-none">
  Pre-seed
</div>
<div className="flex flex-row items-center p-0 gap-[10px] w-[144px] h-[20px] order-3 flex-none">
  Girish
</div>


<div className="flex flex-row items-center justify-start p-0 gap-1 w-[100px] h-[24px] order-4 flex-none ml-[-42px]">
  <div className="flex flex-row justify-start items-center px-[6px] py-[4px] gap-1 w-[75px] h-[24px] border border-[#ED7777] rounded-sm">

    <div className="text-[#ED7777] text-[14px] leading-none select-none">•</div>

    
    <div
      className="w-[50px] h-[16px] font-normal text-[12px] leading-[16px] tracking-[0.0025em] text-[#ED7777]"
      style={{ fontFamily: 'Neulis Sans, sans-serif' }}
    >
      Rejected
    </div>
  </div>
</div>

<div className="flex flex-row items-center gap-[2px] w-[112px] h-[20px] flex-none order-5">
  <FiClock className="text-[#A9ADB1]" size={16} /> {/* Clock icon, adjust color and size */}
  <span className="text-[#A9ADB1] font-normal text-[12px] leading-[20px] tracking-[0.0025em]" style={{ fontFamily: 'Neulis Sans, sans-serif' }}>
    2 days ago
  </span>
</div>
  
  <div className="flex flex-row items-center justify-center w-[96px] h-[28px] flex-none order-6 ml-[-20px]">
  <button className="text-[#A9ADB1] text-[18px] hover:text-white leading-none">
    ⋮
  </button>
</div>

  </div>

</div>
{/* SIXTH */}
<div className="flex flex-col items-start p-4 gap-[10px] w-[1080px] h-[60px] border-b border-[#303030] border-b-[0.5px] order-0 self-stretch flex-none">
  <div className="flex flex-row items-center p-0 gap-2 w-[1048px] h-[28px] order-0 self-stretch flex-none">
    <div className="flex flex-row items-center p-0 gap-1 w-[362px] h-[28px] order-0 flex-none">
      
      {/* Checkbox */}
     
      <label className="relative w-5 h-5 flex items-center justify-center cursor-pointer">
  <input
    type="checkbox"
    className="peer appearance-none w-5 h-5 rounded-sm bg-[#303030] border border-[#555] focus:outline-none cursor-pointer"
  />

  <span className="absolute text-[#3262FF] text-[12px] font-bold hidden peer-checked:block select-none">
    ✔
  </span>
</label>


      {/* Logo */}
  <img 
  src={Company} 
        alt="logo"
        className="w-[28px] h-[28px] rounded-full object-cover" 
 />  
      {/* Company Name */}
      <p
        className="w-[87px] h-[20px] font-normal text-[14px] leading-[20px] text-[#E6E6E6] flex-none"
        style={{ fontFamily: 'Neulis Sans, sans-serif' }}
      >
        Prepcorn
      </p>
    </div>
    <div className="flex flex-row items-center p-0 gap-[5px] w-[148px] h-[20px] order-1 flex-none">
  Agriculture
</div>
<div className="flex flex-row items-center p-0 gap-[10px] w-[100px] h-[20px] order-2 flex-none">
  Pre-seed
</div>
<div className="flex flex-row items-center p-0 gap-[10px] w-[144px] h-[20px] order-3 flex-none">
  Ant Wilson
</div>


<div className="flex flex-row items-center justify-start p-0 gap-1 w-[100px] h-[24px] order-4 flex-none ml-[-42px]">
  <div className="flex flex-row justify-start items-center px-[6px] py-[4px] gap-1 w-[75px] h-[24px] border border-[#7796EE] rounded-sm">

    <div className="text-[#7796EE] text-[14px] leading-none select-none">•</div>

    
    <div
      className="w-[50px] h-[16px] font-normal text-[12px] leading-[16px] tracking-[0.0025em] text-[#7796EE]"
      style={{ fontFamily: 'Neulis Sans, sans-serif' }}
    >
      Sourcing
    </div>
  </div>
</div>

<div className="flex flex-row items-center gap-[2px] w-[112px] h-[20px] flex-none order-5">
  <FiClock className="text-[#A9ADB1]" size={16} /> {/* Clock icon, adjust color and size */}
  <span className="text-[#A9ADB1] font-normal text-[12px] leading-[20px] tracking-[0.0025em]" style={{ fontFamily: 'Neulis Sans, sans-serif' }}>
    2 days ago
  </span>
</div>
  
  <div className="flex flex-row items-center justify-center w-[96px] h-[28px] flex-none order-6 ml-[-20px]">
  <button className="text-[#A9ADB1] text-[18px] hover:text-white leading-none">
    ⋮
  </button>
</div>

  </div>

</div>
{/* SEVENTH COMPANY */}
<div className="flex flex-col items-start p-4 gap-[10px] w-[1080px] h-[60px] border-b border-[#303030] border-b-[0.5px] order-0 self-stretch flex-none">
  <div className="flex flex-row items-center p-0 gap-2 w-[1048px] h-[28px] order-0 self-stretch flex-none">
    <div className="flex flex-row items-center p-0 gap-1 w-[362px] h-[28px] order-0 flex-none">
      
      {/* Checkbox */}
     
      <label className="relative w-5 h-5 flex items-center justify-center cursor-pointer">
  <input
    type="checkbox"
    className="peer appearance-none w-5 h-5 rounded-sm bg-[#303030] border border-[#555] focus:outline-none cursor-pointer"
  />

  <span className="absolute text-[#3262FF] text-[12px] font-bold hidden peer-checked:block select-none">
    ✔
  </span>
</label>


      {/* Logo */}
  <img 
  src={Company} 
        alt="logo"
        className="w-[28px] h-[28px] rounded-full object-cover" 
 />  
      {/* Company Name */}
      <p
        className="w-[87px] h-[20px] font-normal text-[14px] leading-[20px] text-[#E6E6E6] flex-none"
        style={{ fontFamily: 'Neulis Sans, sans-serif' }}
      >
        Crux
      </p>
    </div>
    <div className="flex flex-row items-center p-0 gap-[5px] w-[148px] h-[20px] order-1 flex-none">
  Agriculture
</div>
<div className="flex flex-row items-center p-0 gap-[10px] w-[100px] h-[20px] order-2 flex-none">
  Pre-seed
</div>
<div className="flex flex-row items-center p-0 gap-[10px] w-[144px] h-[20px] order-3 flex-none">
  Ant Wilson
</div>


<div className="flex flex-row items-center justify-start p-0 gap-1 w-[100px] h-[24px] order-4 flex-none ml-[-42px]">
  <div className="flex flex-row justify-start items-center px-[6px] py-[4px] gap-1 w-[75px] h-[24px] border border-[#7796EE] rounded-sm">

    <div className="text-[#7796EE] text-[14px] leading-none select-none">•</div>

    
    <div
      className="w-[50px] h-[16px] font-normal text-[12px] leading-[16px] tracking-[0.0025em] text-[#7796EE]"
      style={{ fontFamily: 'Neulis Sans, sans-serif' }}
    >
      Sourcing
    </div>
  </div>
</div>

<div className="flex flex-row items-center gap-[2px] w-[112px] h-[20px] flex-none order-5">
  <FiClock className="text-[#A9ADB1]" size={16} /> {/* Clock icon, adjust color and size */}
  <span className="text-[#A9ADB1] font-normal text-[12px] leading-[20px] tracking-[0.0025em]" style={{ fontFamily: 'Neulis Sans, sans-serif' }}>
    2 days ago
  </span>
</div>
  
  <div className="flex flex-row items-center justify-center w-[96px] h-[28px] flex-none order-6 ml-[-20px]">
  <button className="text-[#A9ADB1] text-[18px] hover:text-white leading-none">
    ⋮
  </button>
</div>

  </div>

</div>
{/* EIGHTH COMPANY */}
<div className="flex flex-col items-start p-4 gap-[10px] w-[1080px] h-[60px] border-b border-[#303030] border-b-[0.5px] order-0 self-stretch flex-none">
  <div className="flex flex-row items-center p-0 gap-2 w-[1048px] h-[28px] order-0 self-stretch flex-none">
    <div className="flex flex-row items-center p-0 gap-1 w-[362px] h-[28px] order-0 flex-none">
      
      {/* Checkbox */}
     
      <label className="relative w-5 h-5 flex items-center justify-center cursor-pointer">
  <input
    type="checkbox"
    className="peer appearance-none w-5 h-5 rounded-sm bg-[#303030] border border-[#555] focus:outline-none cursor-pointer"
  />

  <span className="absolute text-[#3262FF] text-[12px] font-bold hidden peer-checked:block select-none">
    ✔
  </span>
</label>


      {/* Logo */}
  <img 
  src={Company} 
        alt="logo"
        className="w-[28px] h-[28px] rounded-full object-cover" 
 />  
      {/* Company Name */}
      <p
        className="w-[87px] h-[20px] font-normal text-[14px] leading-[20px] text-[#E6E6E6] flex-none"
        style={{ fontFamily: 'Neulis Sans, sans-serif' }}
      >
        Scannia
      </p>
    </div>
    <div className="flex flex-row items-center p-0 gap-[5px] w-[148px] h-[20px] order-1 flex-none">
  Agriculture
</div>
<div className="flex flex-row items-center p-0 gap-[10px] w-[100px] h-[20px] order-2 flex-none">
  Pre-seed
</div>
<div className="flex flex-row items-center p-0 gap-[10px] w-[144px] h-[20px] order-3 flex-none">
  Ant Wilson
</div>


<div className="flex flex-row items-center justify-start p-0 gap-1 w-[100px] h-[24px] order-4 flex-none ml-[-42px]">
  <div className="flex flex-row justify-start items-center px-[6px] py-[4px] gap-1 w-[75px] h-[24px] border border-[#7796EE] rounded-sm">

    <div className="text-[#7796EE] text-[14px] leading-none select-none">•</div>

    
    <div
      className="w-[50px] h-[16px] font-normal text-[12px] leading-[16px] tracking-[0.0025em] text-[#7796EE]"
      style={{ fontFamily: 'Neulis Sans, sans-serif' }}
    >
      Sourcing
    </div>
  </div>
</div>

<div className="flex flex-row items-center gap-[2px] w-[112px] h-[20px] flex-none order-5">
  <FiClock className="text-[#A9ADB1]" size={16} /> {/* Clock icon, adjust color and size */}
  <span className="text-[#A9ADB1] font-normal text-[12px] leading-[20px] tracking-[0.0025em]" style={{ fontFamily: 'Neulis Sans, sans-serif' }}>
    2 days ago
  </span>
</div>
  
  <div className="flex flex-row items-center justify-center w-[96px] h-[28px] flex-none order-6 ml-[-20px]">
  <button className="text-[#A9ADB1] text-[18px] hover:text-white leading-none">
    ⋮
  </button>
</div>

  </div>

</div>
{/* NINTH COMPANY */}
<div className="flex flex-col items-start p-4 gap-[10px] w-[1080px] h-[60px] border-b border-[#303030] border-b-[0.5px] order-0 self-stretch flex-none">
  <div className="flex flex-row items-center p-0 gap-2 w-[1048px] h-[28px] order-0 self-stretch flex-none">
    <div className="flex flex-row items-center p-0 gap-1 w-[362px] h-[28px] order-0 flex-none">
      
      {/* Checkbox */}
     
      <label className="relative w-5 h-5 flex items-center justify-center cursor-pointer">
  <input
    type="checkbox"
    className="peer appearance-none w-5 h-5 rounded-sm bg-[#303030] border border-[#555] focus:outline-none cursor-pointer"
  />

  <span className="absolute text-[#3262FF] text-[12px] font-bold hidden peer-checked:block select-none">
    ✔
  </span>
</label>


      {/* Logo */}
  <img 
  src={Company} 
        alt="logo"
        className="w-[28px] h-[28px] rounded-full object-cover" 
 />  
      {/* Company Name */}
      <p
        className="w-[87px] h-[20px] font-normal text-[14px] leading-[20px] text-[#E6E6E6] flex-none"
        style={{ fontFamily: 'Neulis Sans, sans-serif' }}
      >
        Scannia
      </p>
    </div>
    <div className="flex flex-row items-center p-0 gap-[5px] w-[148px] h-[20px] order-1 flex-none">
  Agriculture
</div>
<div className="flex flex-row items-center p-0 gap-[10px] w-[100px] h-[20px] order-2 flex-none">
  Pre-seed
</div>
<div className="flex flex-row items-center p-0 gap-[10px] w-[144px] h-[20px] order-3 flex-none">
  Ant Wilson
</div>


<div className="flex flex-row items-center justify-start p-0 gap-1 w-[100px] h-[24px] order-4 flex-none ml-[-42px]">
  <div className="flex flex-row justify-start items-center px-[6px] py-[4px] gap-1 w-[75px] h-[24px] border border-[#7796EE] rounded-sm">

    <div className="text-[#7796EE] text-[14px] leading-none select-none">•</div>

    
    <div
      className="w-[50px] h-[16px] font-normal text-[12px] leading-[16px] tracking-[0.0025em] text-[#7796EE]"
      style={{ fontFamily: 'Neulis Sans, sans-serif' }}
    >
      Sourcing
    </div>
  </div>
</div>

<div className="flex flex-row items-center gap-[2px] w-[112px] h-[20px] flex-none order-5">
  <FiClock className="text-[#A9ADB1]" size={16} /> {/* Clock icon, adjust color and size */}
  <span className="text-[#A9ADB1] font-normal text-[12px] leading-[20px] tracking-[0.0025em]" style={{ fontFamily: 'Neulis Sans, sans-serif' }}>
    2 days ago
  </span>
</div>
  
  <div className="flex flex-row items-center justify-center w-[96px] h-[28px] flex-none order-6 ml-[-20px]">
  <button className="text-[#A9ADB1] text-[18px] hover:text-white leading-none">
    ⋮
  </button>
</div>

  </div>

</div>
  {/* Pagination */}
  <div className="w-full">
                <div className="flex justify-between items-center p-5 text-sm text-gray-400 bg-[#0d0d10]">
                    <p>1-8 of 100</p>
                    <div className="flex items-center space-x-2">
                        <button className="px-3 py-1 rounded-md bg-gray-800 hover:bg-gray-700">
                            Prev
                        </button>
                        <button className="px-3 py-1 rounded-md bg-indigo-600 text-white">
                            1
                        </button>
                        <button className="px-3 py-1 rounded-md bg-gray-800 hover:bg-gray-700">
                            2
                        </button>
                        <button className="px-3 py-1 rounded-md bg-gray-800 hover:bg-gray-700">
                            3
                        </button>
                        <button className="px-3 py-1 rounded-md bg-gray-800 hover:bg-gray-700">
                            Next
                        </button>
                    </div>
                </div>
                </div>

</div>

</div>

</div>


                





    );
};
export default DealRoom;