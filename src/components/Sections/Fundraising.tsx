import React from 'react';
import { FiSearch, FiFilter } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Fundraising = () => {

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
  Fundraising Pipeline
</h3>

    <p className="text-[#A9ADB1] text-[12px] leading-[16px] tracking-[0.0025em] w-[418px] font-normal font-sans">
  Track your investor conversations and fundraising progress
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
    <Tab label="Research" />
    <Tab label="Warm Intro" />
    <Tab label="Meeting" />
    <Tab label="Diligence" />
    <Tab label="Term Sheet" />
    <Tab label="Closed" />
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
  <div className="flex flex-col items-start p-4 gap-4 w-[540px] h-[280px] rounded-xl bg-gradient-to-br from-[#0C0D17] via-[#0C0D17] to-[#102361]">
  {/* First Major Block */}
  <div className="flex flex-col items-start gap-3 w-[309px]">
    {/* Sub-section Top */}
    <div className="flex flex-row justify-between items-center w-[160%] h-[50px] gap-6">
      {/* Left Block */}
      <div className="flex flex-row items-center gap-2">
        <div className="font-semibold text-base text-white">Sequioa Capital</div>
        <div className="text-[10px] text-white bg-[#2F334D] px-2 py-[2px] rounded-full border border-[#303030]">
          Diligence
        </div>
      </div>

      {/* Right Block */}
      <div className="flex flex-col justify-center items-start w-[70px] h-[50px] rounded-md">
        <div className="text-s font-bold text-[#4fbf26]">High</div>
      </div>
    </div>

    {/* Pill Row */}
    <div className="flex flex-row items-start gap-2 w-[264px] h-[20px]">
      {['B2B SaaS', 'Seed'].map((pill, index) => (
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
      <div className="flex flex-row justify-between items-start gap-[50px] w-[250%] h-[37px]">
        {/* Left Content */}
        <div className="flex flex-col">
          <span className="text-sm text-[#E6E6E6]">Intro Path</span>
           <span className="text-sm text-[#A9ADB1]">Sarah Wilson <span className="mx-1">→</span> Mike Chen</span>

        </div>

        {/* Right Content */}
        <div className="flex flex-col">
          <span className="text-sm text-[#E6E6E6]">Next Action</span>
          <span className="text-sm text-[#A9ADB1]">Send Product demo</span>
        </div>
      </div>
    </div>

    {/* Description Text */}
    <div className="w-[500px] h-[54px] text-sm leading-[18px] tracking-[0.02em] text-[#A9ADB1] font-normal font-[Neulis Sans]">
      Automated vertical farming systems for small-scale farmers.Automated vertical farming systems for small-scale farmers.
    </div>
  </div>

  {/* buttons styling */}
  <div className="flex flex-row justify-between items-center w-[90%] h-10">
  {/* Left Side Buttons */}
  <div className="flex flex-row gap-2">
    {/* Primary Button - Schedule */}
    <button className="flex items-center justify-center px-6 py-3 w-[100px] h-10 bg-[#3262FF] text-white rounded-xl cursor-pointer">
      Schedule
    </button>

    {/* Secondary Button - Notes */}
    <button className="flex items-center justify-center px-6 py-3 w-[100px] h-10 bg-[#2F334D] text-white rounded-xl cursor-pointer">
      Notes
    </button>

    {/* Globe/Search Button */}
    <button className="flex items-center justify-center px-3 py-2 w-10 h-10 bg-[#2F334D] text-white rounded-xl cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2v20"
        />
      </svg>
    </button>
  </div>

  {/* Right Side Content */}
  <div className="text-[#E6E6E6] text-sm">
    2 days ago
  </div>
</div>
{/* buttons  closed */}
 </div> 
 {/* cards 1 closing */}


    
{/* cards 2 */}
<div className="flex flex-col items-start p-4 gap-4 w-[540px] h-[280px] rounded-xl bg-gradient-to-br from-[#0C0D17] via-[#0C0D17] to-[#102361]">
  {/* First Major Block */}
  <div className="flex flex-col items-start gap-3 w-[309px]">
    {/* Sub-section Top */}
    <div className="flex flex-row justify-between items-center w-[160%] h-[50px] gap-6">
      {/* Left Block */}
      <div className="flex flex-row items-center gap-2">
        <div className="font-semibold text-base text-white">First Round Capital</div>
        <div className="text-[10px] text-white bg-[#2F334D] px-2 py-[2px] rounded-full border border-[#303030]">
          Warm Intro
        </div>
      </div>

      {/* Right Block */}
      <div className="flex flex-col justify-center items-start w-[70px] h-[50px] rounded-md">
        <div className="text-s font-bold text-[#c0a426]">Medium</div>
      </div>
    </div>

    {/* Pill Row */}
    <div className="flex flex-row items-start gap-2 w-[264px] h-[20px]">
      {['B2B SaaS', 'Seed'].map((pill, index) => (
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
          <span className="text-sm text-[#E6E6E6]">Intro Path</span>
           <span className="text-sm text-[#A9ADB1]">John Smith <span className="mx-1">→</span> Partner</span>

        </div>

        {/* Right Content */}
        <div className="flex flex-col">
          <span className="text-sm text-[#E6E6E6]">Next Action</span>
          <span className="text-sm text-[#A9ADB1]">Request Introduction</span>
        </div>
      </div>
    </div>

    {/* Description Text */}
    <div className="w-[500px] h-[54px] text-sm leading-[18px] tracking-[0.02em] text-[#A9ADB1] font-normal font-[Neulis Sans]">
      Automated vertical farming systems for small-scale farmers.Automated vertical farming systems for small-scale farmers.
    </div>
  </div>

  {/* buttons styling */}
  <div className="flex flex-row justify-between items-center w-[90%] h-10">
  {/* Left Side Buttons */}
  <div className="flex flex-row gap-2">
    {/* Primary Button - Schedule */}
    <button className="flex items-center justify-center px-6 py-3 w-[100px] h-10 bg-[#3262FF] text-white rounded-xl cursor-pointer">
      Schedule
    </button>

    {/* Secondary Button - Notes */}
    <button className="flex items-center justify-center px-6 py-3 w-[100px] h-10 bg-[#2F334D] text-white rounded-xl cursor-pointer">
      Notes
    </button>

    {/* Globe/Search Button */}
    <button className="flex items-center justify-center px-3 py-2 w-10 h-10 bg-[#2F334D] text-white rounded-xl cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2v20"
        />
      </svg>
    </button>
  </div>

  {/* Right Side Content */}
  <div className="text-[#E6E6E6] text-sm">
    1 week ago
  </div>
</div>
{/* buttons  closed */}
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
 <div className="flex flex-col items-start p-4 gap-4 w-[540px] h-[280px] rounded-xl bg-gradient-to-br from-[#0C0D17] via-[#0C0D17] to-[#102361]">
  {/* First Major Block */}
  <div className="flex flex-col items-start gap-3 w-[309px]">
    {/* Sub-section Top */}
    <div className="flex flex-row justify-between items-center w-[160%] h-[50px] gap-6">
      {/* Left Block */}
      <div className="flex flex-row items-center gap-2">
        <div className="font-semibold text-base text-white">Sequoia Capital</div>
        <div className="text-[10px] text-white bg-[#2F334D] px-2 py-[2px] rounded-full border border-[#303030]">
          Diligence
        </div>
      </div>

      {/* Right Block */}
      <div className="flex flex-col justify-center items-start w-[70px] h-[50px] rounded-md">
        <div className="text-s font-bold text-[#4fbf26]">High</div>
      </div>
    </div>

    {/* Pill Row */}
    <div className="flex flex-row items-start gap-2 w-[264px] h-[20px]">
      {['B2B SaaS', 'Seed'].map((pill, index) => (
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
      <div className="flex flex-row justify-between items-start gap-[35px] w-[160%] h-[37px]">
        {/* Left Content */}
        <div className="flex flex-col">
          <span className="text-sm text-[#E6E6E6]">Intro Path</span>
           <span className="text-sm text-[#A9ADB1]">Sarah Wilson <span className="mx-1">→</span> Mike Chen</span>

        </div>

        {/* Right Content */}
        <div className="flex flex-col">
          <span className="text-sm text-[#E6E6E6]">Next Action</span>
          <span className="text-sm text-[#A9ADB1]">Send Product demo</span>
        </div>
      </div>
    </div>

    {/* Description Text */}
    <div className="w-[500px] h-[54px] text-sm leading-[18px] tracking-[0.02em] text-[#A9ADB1] font-normal font-[Neulis Sans]">
      Automated vertical farming systems for small-scale farmers.Automated vertical farming systems for small-scale farmers.
    </div>
  </div>

  {/* buttons styling */}
  <div className="flex flex-row justify-between items-center w-[90%] h-10">
  {/* Left Side Buttons */}
  <div className="flex flex-row gap-2">
    {/* Primary Button - Schedule */}
    <button className="flex items-center justify-center px-6 py-3 w-[100px] h-10 bg-[#3262FF] text-white rounded-xl cursor-pointer">
      Schedule
    </button>

    {/* Secondary Button - Notes */}
    <button className="flex items-center justify-center px-6 py-3 w-[100px] h-10 bg-[#2F334D] text-white rounded-xl cursor-pointer">
      Notes
    </button>

    {/* Globe/Search Button */}
    <button className="flex items-center justify-center px-3 py-2 w-10 h-10 bg-[#2F334D] text-white rounded-xl cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2v20"
        />
      </svg>
    </button>
  </div>

  {/* Right Side Content */}
  <div className="text-[#E6E6E6] text-sm">
    1 week ago
  </div>
</div>
{/* buttons  closed */}
 </div> 
 {/* cards 3 closed */}
    
  {/* cards 4 */}
<div className="flex flex-col items-start p-4 gap-4 w-[540px] h-[280px] rounded-xl bg-gradient-to-br from-[#0C0D17] via-[#0C0D17] to-[#102361]">
  {/* First Major Block */}
  <div className="flex flex-col items-start gap-3 w-[309px]">
    {/* Sub-section Top */}
    <div className="flex flex-row justify-between items-center w-[160%] h-[50px] gap-6">
      {/* Left Block */}
      <div className="flex flex-row items-center gap-2">
        <div className="font-semibold text-base text-white">First Round Capital</div>
        <div className="text-[10px] text-white bg-[#2F334D] px-2 py-[2px] rounded-full border border-[#303030]">
          Warm Intro
        </div>
      </div>

      {/* Right Block */}
      <div className="flex flex-col justify-center items-start w-[70px] h-[50px] rounded-md">
        <div className="text-s fot-bold text-[#c0a426]">Medium</div>
      </div>
    </div>

    {/* Pill Row */}
    <div className="flex flex-row items-start gap-2 w-[264px] h-[20px]">
      {['B2B SaaS', 'Seed'].map((pill, index) => (
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
          <span className="text-sm text-[#E6E6E6]">Intro Path</span>
           <span className="text-sm text-[#A9ADB1]">John Smith <span className="mx-1">→</span> Partner</span>

        </div>

        {/* Right Content */}
        <div className="flex flex-col">
          <span className="text-sm text-[#E6E6E6]">Next Action</span>
          <span className="text-sm text-[#A9ADB1]">Request Introduction</span>
        </div>
      </div>
    </div>

    {/* Description Text */}
    <div className="w-[500px] h-[54px] text-sm leading-[18px] tracking-[0.02em] text-[#A9ADB1] font-normal font-[Neulis Sans]">
      Automated vertical farming systems for small-scale farmers.Automated vertical farming systems for small-scale farmers.
    </div>
  </div>

  {/* buttons styling */}
  <div className="flex flex-row justify-between items-center w-[90%] h-10">
  {/* Left Side Buttons */}
  <div className="flex flex-row gap-2">
    {/* Primary Button - Schedule */}
    <button className="flex items-center justify-center px-6 py-3 w-[100px] h-10 bg-[#3262FF] text-white rounded-xl cursor-pointer">
      Schedule
    </button>

    {/* Secondary Button - Notes */}
    <button className="flex items-center justify-center px-6 py-3 w-[100px] h-10 bg-[#2F334D] text-white rounded-xl cursor-pointer">
      Notes
    </button>

    {/* Globe/Search Button */}
    <button className="flex items-center justify-center px-3 py-2 w-10 h-10 bg-[#2F334D] text-white rounded-xl cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2v20"
        />
      </svg>
    </button>
  </div>

  {/* Right Side Content */}
  <div className="text-[#E6E6E6] text-sm">
    1 week ago
  </div>
</div>
{/* buttons  closed */}
 </div> 
                {/*card 4 closed  */}


</div>

</div>
{/* Pagination */}
<div className="w-full">
                <div className="flex justify-between items-center p-5 text-sm text-gray-400 bg-[#0d0d10]">
                    <p>1-4 of 100</p>
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


);
};
export default Fundraising;