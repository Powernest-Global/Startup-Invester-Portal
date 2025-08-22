import React from 'react';
import { useNavigate } from 'react-router-dom';
const DealRoom = () => {

     const navigate = useNavigate();

  const handleAddDeal = () => {
    navigate('/add-deal'); //  route
  };
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
<div className="flex flex-col items-start gap-6 w-[1080px] h-[684px] p-0">
  
</div>

</div>



    );
};
export default DealRoom;