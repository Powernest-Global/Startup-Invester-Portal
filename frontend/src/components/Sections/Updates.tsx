import React from 'react';
import {  FiEdit,  FiSend, FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';


const Updates = () => {

     const navigate = useNavigate();

  const handleAddDeal = () => {
    navigate('/add-deal'); //  route
  };

const stats = [
    { label: "Active Deals", value: "23", gradient: 'from-[#0C0D17] via-[#0C0D17] to-[#102361]' },
    { label: "New Hires", value: "18", gradient: 'from-[#0C0D17] via-[#0C0D17] to-[#102361]'},
    { label: "Partnerships", value: "3", gradient: 'from-[#0C0D17] via-[#0C0D17] to-[#102361]' },
    { label: "Growth", value: "18%", gradient: 'from-[#0C0D17] via-[#0C0D17] to-[#102361]' },
    
];

return(
    <div className="flex flex-col items-start gap-10 absolute w-[1080px] h-[776px] left-[230px] top-[70px] p-0">
           <div className="flex flex-row justify-between items-center w-[1080px] h-[52px] gap-[200px] p-0">
  <div className="flex flex-col">
    <h3 className="font-semibold text-[20px] leading-[28px] tracking-[-0.002em] text-[#E6E6E6] font-neulis">
      Investor Updates
    </h3>
    <p className="text-[#A9ADB1] text-[12px] leading-[16px] tracking-[0.0025em] font-normal font-neulis">
    AI- Powered investor update generator using your CRM data.
    </p>
  </div>
{/* Right Side: Buttons */}
  <div className="flex items-center gap-4">
    <button
      className="bg-[#3262FF] text-white text-sm font-medium px-5 py-2 rounded-[12px] flex items-center gap-2 whitespace-nowrap"
      onClick={handleAddDeal}
    >
      <FiPlus size={16} />
      New Template
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
    {/* cards 1 */}
<div className="flex flex-col items-start p-2 gap-5 w-[310px] h-[360px] rounded-xl bg-[#05060f]"> 
  {/* First Major Block */}
  <h3 className='  font-semibold text-align-left text-[#e5e5e5] text-[18px]  leading-[12px] font-neulis'>Updates Templates</h3>
    <div className="flex flex-col items-start text-align-left gap-0 w-[290px] h-[300px] rounded-xl bg-[#05060f] ">
    <div className="flex flex-row justify-between items-center w-[280px] h-[60px]  p-0 ">
  <div className="flex flex-col">
    <h3 className=" text-[12px] leading-[15px] text-align-left text-[#E6E6E6] font-neulis">
  Monthly Investor Update
    </h3>
    <p className="text-[#A9ADB1] text-[12px] leading-[23px] tracking-[0.0025em] font-normal font-neulis">
12 recipients
    </p>
  </div>
{/* Right Side: Buttons */}
  <div className="flex flex-col">
    <button
      className="bg-[red] text-white text-sm font-small px-1 py-0 rounded-[12px] flex items-center whitespace-nowrap"
      onClick={handleAddDeal}
    >
      Overdue
    </button>
     <p className="text-[#A9ADB1] text-xs leading-[23px] tracking-[0.0020em] font-normal font-neulis">
2 week ago
    </p>
  </div>
</div>
 <div className="flex flex-row justify-between items-center w-[290px] h-[60px]  p-0  leading-[7px]">
{/*  left buttons */}

  <div className="flex flex-col w-[130px]">
     <button
      className="bg-[#2f334d] text-white text-sm font-medium px-6 py-2  justify-center gap-1  rounded-[12px] flex items-center whitespace-nowrap"
      onClick={handleAddDeal}
    >
        <FiEdit size={16}/>
      Edit
    </button>
</div>
  {/* Right Side: Buttons */}
  <div className="flex flex-col w-[130px]">
    <button
      className="bg-[#3262ff] text-white text-sm font-small px-6 py-2 justify-center  gap-1 rounded-[12px] flex items-center whitespace-nowrap"
      onClick={handleAddDeal}
    >
        <FiSend size={16} />
      Send 
    </button>
       </div>
</div>
<div className="flex flex-col items-start text-align-left gap-0 w-[290px] h-[300px] rounded-xl bg-[#05060f] ">
<div className="flex flex-row justify-between items-center w-[290px] h-[60px]  p-0 ">
  <div className="flex flex-col">
    <h3 className=" text-[12px] leading-[15px] text-align-left text-[#E6E6E6] font-neulis">
  Quarterly Board Update
    </h3>
    <p className="text-[#A9ADB1] text-[12px] leading-[23px] tracking-[0.0025em] font-normal font-neulis">
12 recipients
    </p>
  </div>
 {/* Right Side: Buttons */}
  <div className="flex flex-col">
    <button
      className="bg-[#c0a426] text-white text-sm font-small px-2 py-0 rounded-[12px] flex items-center whitespace-nowrap"
      onClick={handleAddDeal}
    >
      Upcomming
    </button>
     <p className="text-[#A9ADB1] text-xs leading-[23px] tracking-[0.0020em] font-normal font-neulis">
2 week ago
    </p>
  </div>
</div>
 <div className="flex flex-row justify-between items-center w-[290px] h-[60px]  p-0 ">
{/*  left buttons */}

  <div className="flex flex-col w-[130px] ">
     <button
      className="bg-[#2f334d] text-white text-sm font-medium px-6 py-2  justify-center gap-1 rounded-[12px] flex items-center whitespace-nowrap"
      onClick={handleAddDeal}
    >
        <FiEdit size={16}/>
      Edit
    </button>

  </div>

  {/* Right Side: Buttons */}
  <div className="flex flex-col w-[130px]">
    <button
      className="bg-[#3262ff] text-white text-sm font-small px-6 py-2 justify-center gap-1 rounded-[12px] flex items-center whitespace-nowrap"
      onClick={handleAddDeal}
    >
        <FiSend size={16} />
      Send 
    </button>
     </div>
  </div>
</div>
<div className="flex flex-col items-start text-align-left gap-0 w-[290px] h-[300px] rounded-xl bg-[#05060f] ">
<div className="flex flex-row justify-between items-center w-[290px] h-[60px]  p-0 ">
  <div className="flex flex-col">
    <h3 className=" text-[12px] leading-[15px] text-align-left text-[#E6E6E6] font-neulis">
  Monthly Investor Update
    </h3>
    <p className="text-[#A9ADB1] text-[12px] leading-[23px] tracking-[0.0025em] font-normal font-neulis">
12 recipients
    </p>
  </div>
  {/* Right Side: Buttons */}
  <div className="flex flex-col">
    <button
      className="bg-[#4fbf26] text-white text-sm font-small px-1 py-0  justify-center rounded-[12px] flex items-center whitespace-nowrap"
      onClick={handleAddDeal}
    >
      Sent
    </button>
     <p className="text-[#A9ADB1] text-xs leading-[23px] tracking-[0.0020em] font-normal font-neulis">
2 week ago
    </p>
  </div>
</div>
 <div className="flex flex-row justify-between items-center w-[290px] h-[60px]  p-0 ">
{/*  left buttons */}
  <div className="flex flex-col w-[130px]">
     <button
      className="bg-[#2f334d] text-white text-sm font-medium px-6 py-2 justify-center gap-1   rounded-[12px] flex items-center whitespace-nowrap"
      onClick={handleAddDeal}
    >
        <FiEdit size={16}/>
      Edit
    </button>
  </div>
  {/* Right Side: Buttons */}
  <div className="flex flex-col w-[130px]">
    <button
      className="bg-[#3262ff] text-white text-sm font-small px-6 py-2  justify-center  gap-1 rounded-[12px] flex items-center whitespace-nowrap"
      onClick={handleAddDeal}
    >
        <FiSend size={16} />
      Send 
    </button>
       </div>
        </div>
         {/* closed */}  
  </div>
 </div>
    </div>
  </div>
   );
};
export default Updates;