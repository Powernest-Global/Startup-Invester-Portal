import React from 'react';
 import { FiFilter } from 'react-icons/fi';

 const BrowseStartups = () => {
  
 
 return (


 <div className="w-full h-full p-4 overflow-auto flex flex-col gap-4">
   

    {/* Top Bar: Browse Startups + Search + Filter */}
     {/* <div
      style={{ 
     
       boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 16px',
    gap: '541px',
    position: 'absolute',
    width: '1095px',
    height: '64px',
    left: '321px',
    top: '167px',
    border: '1px solid #303030',
    borderRadius: '14px',
    backgroundColor: '#1a1a1a', // Optional background
    color: '#fff' // Optional text color for dark background
  }}
    > */}
     <div className="flex justify-between items-center">
      <div 
        style={{
          fontSize: '20px',
          fontWeight: 500,
          color: '#E6E6E6',
        }}
      >
        Browse Startups
      </div>

      <div style={{ display: 'flex', gap: '16px' }}> 
        {/* Search */}
         <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '8px',
            gap: '8px',
            width: '250px',
            backgroundColor: '#12131A',
            border: '1px solid #303030',
            borderRadius: '12px',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24">
            <path
              d="M21 21L15.8 15.8M10.5 18C14.1 18 17 15.1 17 11.5C17 7.9 14.1 5 10.5 5C6.9 5 4 7.9 4 11.5C4 15.1 6.9 18 10.5 18Z"
              stroke="#A9ADB1"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span style={{ color: '#A9ADB1', fontSize: '13px' }}>Search Startups</span>
        </div>

        {/* Filter */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '8px 12px',
            border: '1px solid #303030',
            borderRadius: '8px',
            backgroundColor: '#12131A',
            color: '#E6E6E6',
            fontSize: '13px',
          }}
        >
          <FiFilter size={18} color="#A9ADB1" />
          Filter
        </div>
      </div>
    </div>

{/* <div
  style={{

  display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '24px',
    position: 'absolute',
    width: '1095px',
    height: '762px',
    left: '321px',
    top: '255px',
    backgroundColor: '#1a1a1a', // Optional: dark background
    color: '#fff'               // Optional: light text
  }}
>  */}<div className="w-full h-full p-4 overflow-auto flex flex-col gap-4">

  {/* <div className="flex-1 overflow-y-auto px-4 pb-4 flex flex-col gap-4"> */}


  {/* Header Row above startup cards */}
 <div
  style={{
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
     
    justifyContent: 'space-between',
    alignItems: 'center',
  
    padding: '12px 16px',
   
    gap: '90px',
    
  
    width: '100%',
   
    height: '72px',
    
    border: '1px solid #303030',
    borderRadius: '14px',
    marginBottom: '24px',
  }}
>

   
  {/* <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '0px',
      gap: '32px',
      margin: '0 ',
      width: '382px',
      height: '40px',
      borderRadius: '8px',
      
    }}
  >  */}
    <div className="flex gap-4 text-sm text-white">
      
    

    {/*Tag/Box/Button */}
     <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '4px 10px',
        gap: '10px',
        width: '106px',
        height: '40px',
        background: '#12131A',
        border: '1px solid #303030',
        borderRadius: '6px',
        color: '#E6E6E6',
        fontSize: '13px',
      }}
    >
      All
    </div>
     <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '4px 10px',
        gap: '10px',
        width: '106px',
        height: '40px',
        background: '#12131A',
        border: '1px solid #303030',
        borderRadius: '6px',
        color: '#E6E6E6',
        fontSize: '13px',
      }}
    >
      My Matches
    </div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '4px 10px',
        gap: '10px',
        width: '106px',
        height: '40px',
        background: '#12131A',
        border: '1px solid #303030',
        borderRadius: '6px',
        color: '#E6E6E6',
        fontSize: '13px',
      }}
    >
      Saved
    </div>

    </div> 
    

  

 
{/* Right side: Showing count with nested box */}
 <div
  style={{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '8px',
    gap: '8px',
    margin: '0 ',
    width: '298px',
    height: '48px',
    background: '#12131A',
    borderRadius: '12px',
    color: '#A9ADB1',
    fontSize: '12px',
  }}
> 
  

 
  {/*  "< Prev" Button */}
   <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4px 8px',
      gap: '4px',
      width: '76px',
      height: '32px',
      borderRadius: '4px',
      background: '#1F1F1F',
      border: '1px solid #303030',
      color: '#E6E6E6',
      fontSize: '12px',
      cursor: 'pointer',
    }}
  >
    &lt; Prev
  </div>
{/* Page number  */}

 <div
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '4px 8px',
    width: '32px',
    height: '32px',
    borderRadius: '6px',
    background: '#1F1F1F',
    border: '1px solid #303030',
    color: '#E6E6E6',
    fontSize: '12px',
    cursor: 'pointer',
  }}
>
  1
</div>
<div
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '4px 8px',
    width: '32px',
    height: '32px',
    borderRadius: '6px',
    background: '#1F1F1F',
    border: '1px solid #303030',
    color: '#E6E6E6',
    fontSize: '12px',
    cursor: 'pointer',
  }}
>
  2
</div>
<div
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '4px 8px',
    width: '32px',
    height: '32px',
    borderRadius: '6px',
    background: '#1F1F1F',
    border: '1px solid #303030',
    color: '#E6E6E6',
    fontSize: '12px',
    cursor: 'pointer',
  }}
>
  3
</div>
<div
  style={{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
       justifyContent: 'center',
    padding: '4px 8px',
    gap: '4px',
    width: '76px',
    height: '32px',
    borderRadius: '4px',
    background: '#1F1F1F',
    border: '1px solid #303030',
    color: '#E6E6E6',
    fontSize: '12px',
    cursor: 'pointer',
  }}
>
  &gt; Next
</div>
</div>


</div> 


  {/* Startup Cards Grid */}
  
 <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}> 

  {/* First Row - Frame 39347 */}
 <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '0px',
      gap: '24px',
      width: '1095px',
      height: '321px',
      flex: 'none',
      order: 1,
      flexGrow: 0,
    }}
  > 
    {/* Card 1 */}
   <div
      style={{
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '20px',
        gap: '32px',
        width: '349px',
        height: '321px',
        background: 'linear-gradient(218.9deg, #0C0D17 51.7%, #102361 103.02%)',
        borderRadius: '12px',
        flex: 'none',
        order: 0,
        flexGrow: 0,
      }}
    >
       
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 0,
        gap: 12,
        width: 309,
       
        borderRadius: 12,
      }}
    >
      {/* First Major Block */}
     <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: 0,
          gap: 12,
          width: 309,
          height: 82,
        }}
      > 
        {/* Sub-section Top */}
       <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 0,
            gap: 12,
            width: 309,
            height: 50,
          }}
        > 
          {/* Left Block */}

         
             <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '20px',
        width: '228px',
        height: '50px',
      }}
    >
      <img
        src="https://via.placeholder.com/40"
        alt="logo"
        style={{ width: 40, height: 40, borderRadius: '50%' }}
      />
      <div>
        <div style={{ fontWeight: 600, fontSize: 16 }}>Neuronest</div>
        <div style={{ fontSize: 12, color: '#A9ADB1' }}>Healthcare</div>
      </div>
    </div> 

          {/* Right Block - Matching Percentage */}
        
          <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 0,
        gap: '1px',
        width: '70px',
        height: '50px',
        borderRadius: '8px',
        // backgroundColor: '#1A1A1A',
      }}
    >
      <div style={{ fontSize: 12, color: '#A9ADB1' }}>Low-Match</div>
      <div style={{ fontSize: 14, fontWeight: 600, color: 'red' }}>35%</div>
      
    </div>
  </div> 

        {/* Pill Row */}
         <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            padding: 0,
            gap: 8,
            width: 264,
            height: 20,
          }}
        >
          {['AI', 'IOT', 'Sustainable', 'Hardware'].map((pill, index) => (
            <div
              key={index}
              style={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2px 10px',
                gap: 10,
                height: 20,
                background: 'linear-gradient(218.9deg, #0C0D17 51.7%, #102361 103.02%)',
                border: '1px solid #303030',
                borderRadius: 16,
                color: '#FFFFFF',
                fontSize: 10,
              }}
            >
              {pill}
            </div>
          ))}
        </div>
      </div> 

      {/* Second Major Block */}
     <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: 0,
          gap: 12,
          width: 309,
          height: 103,
        }}
      >
        {/* Top Row */}
         <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            padding: 0,
            gap: '20px',
            width: '309px',
            height: '37px',
          }}
        > 
          {/* Left Item */}
           <div
  style={{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 0,
    gap: '30px',
    width: '309px',
    height: '37px',
    flex: 'none',
    order: 0,
    alignSelf: 'stretch',
    flexGrow: 0,
  }}
>  
  {/* left side content */}
   <div style={{ display: 'flex', flexDirection: 'column' }}>
    <span style={{ fontSize: '14px', color: '#E6E6E6' }}>Stage</span>
    <span style={{ fontSize: '14px', color: '#A9ADB1' }}>Series A</span>
  </div>  

  {/* Right side content */}
   
   <div style={{ display: 'flex', flexDirection: 'column' }}>
    <span style={{ fontSize: '14px', color: '#E6E6E6', alignItems: 'flex-end' }}>Funding Need</span>
    <span style={{ fontSize: '14px', color: '#A9ADB1', alignItems: "flex-start" }}>$4M</span>
  </div>
</div>
         
        </div> 

        {/* Description Text */}
       <div
          style={{
            width: 309,
            height: 54,
            fontFamily: 'Neulis Sans',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: 14,
            lineHeight: '18px',
            letterSpacing: '0.02em',
            color: '#A9ADB1',
          }}
        >
          Automated vertical farming systems for small-scale farmers.
        </div>
      </div>
    </div>
    
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 0,
        gap: 16,
        width: 309,
        height: 40,
        flex: 'none',
        order: 1,
        alignSelf: 'stretch',
        flexGrow: 0,
      }}
    > 
      {/* Left Side Buttons */}
        <div style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>  
        {/* Primary Button */}
         <button
        
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '12px 24px',
            gap: 10,
            width: 100,
            height: 40,
            background: '#3262FF' ,
            color: '#fff',
            border: 'none',
            borderRadius: 12,
            cursor: 'pointer',
          }}
        >
          Connect
        </button> 

        {/* Secondary Button */}
         <button
        
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '12px 24px',
            gap: 10,
            width: 100,
            height: 40,
            background:  '#2F334D',
            color: '#fff',
            border: 'none',
            borderRadius: 12,
            cursor: 'pointer',
          }}
        >
          View
        </button>
      </div> 

      {/* Right Side Content */}
         <div style={{ color: '#E6E6E6', fontSize: '14px' }}>
 <button
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 24px',
    gap: '1px',
    background: '#2F334D',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
    
  }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="19"
    fill="none"
    viewBox="0 0 14 19"
    
  >
    <path
       
      d="M12.25 0H1.75C1.35218 0 0.970644 0.158035 0.68934 0.43934C0.408035 0.720644 0.25 1.10218 0.25 1.5V18C0.250067 18.1338 0.285951 18.2652 0.353929 18.3805C0.421907 18.4958 0.519503 18.5908 0.636587 18.6557C0.753672 18.7206 0.885979 18.7529 1.01978 18.7494C1.15358 18.7458 1.284 18.7066 1.3975 18.6356L7 15.1341L12.6034 18.6356C12.7169 18.7063 12.8472 18.7454 12.9809 18.7488C13.1146 18.7522 13.2467 18.7198 13.3636 18.655C13.4806 18.5902 13.5781 18.4953 13.646 18.3801C13.7139 18.2649 13.7498 18.1337 13.75 18V1.5C13.75 1.10218 13.592 0.720644 13.3107 0.43934C13.0294 0.158035 12.6478 0 12.25 0Z"
    stroke="#E6E6E6"
    fill="none"
  
    />
  </svg>
</button>
</div>
</div>
</div> 

 
    

    {/* Card 2 */}
     <div
      style={{
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '20px',
        gap: '32px',
        width: '349px',
        height: '321px',
        background: 'linear-gradient(218.9deg, #0C0D17 51.7%, #102361 103.02%)',
        borderRadius: '12px',
        flex: 'none',
        order: 0,
        flexGrow: 0,
      }}
    >
       
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 0,
        gap: 12,
        width: 309,
        // background: '#1A1A1A', // Optional: dark background
        borderRadius: 12,
      }}
    >
      {/* First Major Block */}
     <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: 0,
          gap: 12,
          width: 309,
          height: 82,
        }}
      >
        {/* Sub-section Top */}
       <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 0,
            gap: 12,
            width: 309,
            height: 50,
          }}
        > 
          {/* Left Block */}

         
              <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '20px',
        width: '228px',
        height: '50px',
      }}
    >
      <img
        src="https://via.placeholder.com/40"
        alt="logo"
        style={{ width: 40, height: 40, borderRadius: '50%' }}
      />
      <div>
        <div style={{ fontWeight: 600, fontSize: 16 }}>Neuronest</div>
        <div style={{ fontSize: 12, color: '#A9ADB1' }}>Healthcare</div>
      </div>
    </div> 

          {/* Right Block - Matching Percentage */}
        
          <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 0,
        gap: '1px',
        width: '70px',
        height: '50px',
        borderRadius: '8px',
        // backgroundColor: '#1A1A1A',
      }}
    >
      <div style={{ fontSize: 12, color: '#A9ADB1' }}>Low-Match</div>
      <div style={{ fontSize: 14, fontWeight: 600, color: 'red' }}>35%</div>
      
    </div>
  </div> 

        {/* Pill Row */}
         <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            padding: 0,
            gap: 8,
            width: 264,
            height: 20,
          }}
        >
          {['AI', 'IOT', 'Sustainable', 'Hardware'].map((pill, index) => (
            <div
              key={index}
              style={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2px 10px',
                gap: 10,
                height: 20,
                background: 'linear-gradient(218.9deg, #0C0D17 51.7%, #102361 103.02%)',
                border: '1px solid #303030',
                borderRadius: 16,
                color: '#FFFFFF',
                fontSize: 10,
              }}
            >
              {pill}
            </div>
          ))}
        </div>
      </div>

      {/* Second Major Block */}
       <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: 0,
          gap: 12,
          width: 309,
          height: 103,
        }}
      > 
        {/* Top Row */}
         <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            padding: 0,
            gap: '20px',
            width: '309px',
            height: '37px',
          }}
        > 
          {/* Left Item */}
           <div
  style={{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 0,
    gap: '30px',
    width: '309px',
    height: '37px',
    flex: 'none',
    order: 0,
    alignSelf: 'stretch',
    flexGrow: 0,
  }}
> 
  {/* left side content */}
 <div style={{ display: 'flex', flexDirection: 'column' }}>
    <span style={{ fontSize: '14px', color: '#E6E6E6' }}>Stage</span>
    <span style={{ fontSize: '14px', color: '#A9ADB1' }}>Series A</span>
  </div>  

  {/* Right side content */}
   
   <div style={{ display: 'flex', flexDirection: 'column' }}>
    <span style={{ fontSize: '14px', color: '#E6E6E6', alignItems: 'flex-end' }}>Funding Need</span>
    <span style={{ fontSize: '14px', color: '#A9ADB1', alignItems: "flex-start" }}>$4M</span>
  </div>
</div>
         
        </div> 

        {/* Description Text */}
         <div
          style={{
            width: 309,
            height: 54,
            fontFamily: 'Neulis Sans',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: 14,
            lineHeight: '18px',
            letterSpacing: '0.02em',
            color: '#A9ADB1',
          }}
        >
          Automated vertical farming systems for small-scale farmers.
        </div>
      </div>
    </div>
    
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 0,
        gap: 16,
        width: 309,
        height: 40,
        flex: 'none',
        order: 1,
        alignSelf: 'stretch',
        flexGrow: 0,
      }}
    > 
      {/* Left Side Buttons */}
       <div style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>  
        {/* Primary Button */}
         <button
        
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '12px 24px',
            gap: 10,
            width: 100,
            height: 40,
            background: '#3262FF' ,
            color: '#fff',
            border: 'none',
            borderRadius: 12,
            cursor: 'pointer',
          }}
        >
          Connect
        </button> 

        {/* Secondary Button */}
         <button
        
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '12px 24px',
            gap: 10,
            width: 100,
            height: 40,
            background:  '#2F334D',
            color: '#fff',
            border: 'none',
            borderRadius: 12,
            cursor: 'pointer',
          }}
        >
          View
        </button>
      </div> 

      {/* Right Side Content */}
       <div style={{ color: '#E6E6E6', fontSize: '14px' }}>
 <button
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 24px',
    gap: '1px',
    background: '#2F334D',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
    
  }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="19"
    fill="none"
    viewBox="0 0 14 19"
    
  >
    <path
       
      d="M12.25 0H1.75C1.35218 0 0.970644 0.158035 0.68934 0.43934C0.408035 0.720644 0.25 1.10218 0.25 1.5V18C0.250067 18.1338 0.285951 18.2652 0.353929 18.3805C0.421907 18.4958 0.519503 18.5908 0.636587 18.6557C0.753672 18.7206 0.885979 18.7529 1.01978 18.7494C1.15358 18.7458 1.284 18.7066 1.3975 18.6356L7 15.1341L12.6034 18.6356C12.7169 18.7063 12.8472 18.7454 12.9809 18.7488C13.1146 18.7522 13.2467 18.7198 13.3636 18.655C13.4806 18.5902 13.5781 18.4953 13.646 18.3801C13.7139 18.2649 13.7498 18.1337 13.75 18V1.5C13.75 1.10218 13.592 0.720644 13.3107 0.43934C13.0294 0.158035 12.6478 0 12.25 0Z"
    stroke="#E6E6E6"
    fill="none"
  
    />
  </svg>
</button>
</div>
</div>
</div> 


 



    {/* Card 3 */}
 
 <div
      style={{
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '20px',
        gap: '32px',
        width: '349px',
        height: '321px',
        background: 'linear-gradient(218.9deg, #0C0D17 51.7%, #102361 103.02%)',
        borderRadius: '12px',
        flex: 'none',
        order: 0,
        flexGrow: 0,
      }}
    >
       
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 0,
        gap: 12,
        width: 309,
        // background: '#1A1A1A', // Optional: dark background
        borderRadius: 12,
      }}
    > 
      {/* First Major Block */}
       <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: 0,
          gap: 12,
          width: 309,
          height: 82,
        }}
      > 
        {/* Sub-section Top */}
         <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 0,
            gap: 12,
            width: 309,
            height: 50,
          }}
        > 
          {/* Left Block */}

         
              <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '20px',
        width: '228px',
        height: '50px',
      }}
    >
      <img
        src="https://via.placeholder.com/40"
        alt="logo"
        style={{ width: 40, height: 40, borderRadius: '50%' }}
      />
      <div>
        <div style={{ fontWeight: 600, fontSize: 16 }}>Neuronest</div>
        <div style={{ fontSize: 12, color: '#A9ADB1' }}>Healthcare</div>
      </div>
    </div> 

          {/* Right Block - Matching Percentage */}
        
          <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 0,
        gap: '1px',
        width: '70px',
        height: '50px',
        borderRadius: '8px',
        // backgroundColor: '#1A1A1A',
      }}
    >
      <div style={{ fontSize: 12, color: '#A9ADB1' }}>Low-Match</div>
      <div style={{ fontSize: 14, fontWeight: 600, color: 'red' }}>35%</div>
      
    </div>
  </div> 

        {/* Pill Row */}
         <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            padding: 0,
            gap: 8,
            width: 264,
            height: 20,
          }}
        >
          {['AI', 'IOT', 'Sustainable', 'Hardware'].map((pill, index) => (
            <div
              key={index}
              style={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2px 10px',
                gap: 10,
                height: 20,
                background: 'linear-gradient(218.9deg, #0C0D17 51.7%, #102361 103.02%)',
                border: '1px solid #303030',
                borderRadius: 16,
                color: '#FFFFFF',
                fontSize: 10,
              }}
            >
              {pill}
            </div>
          ))}
        </div>
      </div> 

      {/* Second Major Block */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: 0,
          gap: 12,
          width: 309,
          height: 103,
        }}
      > 
        {/* Top Row */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            padding: 0,
            gap: '20px',
            width: '309px',
            height: '37px',
          }}
        > 
          {/* Left Item */}
             <div
  style={{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 0,
    gap: '30px',
    width: '309px',
    height: '37px',
    flex: 'none',
    order: 0,
    alignSelf: 'stretch',
    flexGrow: 0,
  }}
>  
  {/* left side content */}
   <div style={{ display: 'flex', flexDirection: 'column' }}>
    <span style={{ fontSize: '14px', color: '#E6E6E6' }}>Stage</span>
    <span style={{ fontSize: '14px', color: '#A9ADB1' }}>Series A</span>
  </div>  

  {/* Right side content */}
  
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <span style={{ fontSize: '14px', color: '#E6E6E6', alignItems: 'flex-end' }}>Funding Need</span>
    <span style={{ fontSize: '14px', color: '#A9ADB1', alignItems: "flex-start" }}>$4M</span>
  </div>
</div>
         
        </div> 

        {/* Description Text */}
         <div
          style={{
            width: 309,
            height: 54,
            fontFamily: 'Neulis Sans',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: 14,
            lineHeight: '18px',
            letterSpacing: '0.02em',
            color: '#A9ADB1',
          }}
        >
          Automated vertical farming systems for small-scale farmers.
        </div>
      </div>
    </div>
    
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 0,
        gap: 16,
        width: 309,
        height: 40,
        flex: 'none',
        order: 1,
        alignSelf: 'stretch',
        flexGrow: 0,
      }}
    > 
      {/* Left Side Buttons */}
        <div style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>  
        {/* Primary Button */}
         <button
        
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '12px 24px',
            gap: 10,
            width: 100,
            height: 40,
            background: '#3262FF' ,
            color: '#fff',
            border: 'none',
            borderRadius: 12,
            cursor: 'pointer',
          }}
        >
          Connect
        </button> 

        {/* Secondary Button */}
        <button
        
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '12px 24px',
            gap: 10,
            width: 100,
            height: 40,
            background:  '#2F334D',
            color: '#fff',
            border: 'none',
            borderRadius: 12,
            cursor: 'pointer',
          }}
        >
          View
        </button>
      </div> 

      {/* Right Side Content */}
         <div style={{ color: '#E6E6E6', fontSize: '14px' }}>
 <button
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 24px',
    gap: '1px',
    background: '#2F334D',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
    
  }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="19"
    fill="none"
    viewBox="0 0 14 19"
    
  >
    <path
       
      d="M12.25 0H1.75C1.35218 0 0.970644 0.158035 0.68934 0.43934C0.408035 0.720644 0.25 1.10218 0.25 1.5V18C0.250067 18.1338 0.285951 18.2652 0.353929 18.3805C0.421907 18.4958 0.519503 18.5908 0.636587 18.6557C0.753672 18.7206 0.885979 18.7529 1.01978 18.7494C1.15358 18.7458 1.284 18.7066 1.3975 18.6356L7 15.1341L12.6034 18.6356C12.7169 18.7063 12.8472 18.7454 12.9809 18.7488C13.1146 18.7522 13.2467 18.7198 13.3636 18.655C13.4806 18.5902 13.5781 18.4953 13.646 18.3801C13.7139 18.2649 13.7498 18.1337 13.75 18V1.5C13.75 1.10218 13.592 0.720644 13.3107 0.43934C13.0294 0.158035 12.6478 0 12.25 0Z"
    stroke="#E6E6E6"
    fill="none"
  
    />
  </svg>
</button>
</div>
</div>
</div>

</div> 

  
    
    

  {/* Second Row - Frame 39348 */}
  
   <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '0px',
      gap: '24px',
      width: '1095px',
      height: '321px',
      flex: 'none',
      order: 1,
      flexGrow: 0,
    }}
  > 
    {/* Card 1 */}
     <div
      style={{
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '20px',
        gap: '32px',
        width: '349px',
        height: '321px',
        background: 'linear-gradient(218.9deg, #0C0D17 51.7%, #102361 103.02%)',
        borderRadius: '12px',
        flex: 'none',
        order: 0,
        flexGrow: 0,
      }}
    >
       
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 0,
        gap: 12,
        width: 309,
        // background: '#1A1A1A', // Optional: dark background
        borderRadius: 12,
      }}
    > 
      {/* First Major Block */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: 0,
          gap: 12,
          width: 309,
          height: 82,
        }}
      > 
        {/* Sub-section Top */}
         <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 0,
            gap: 12,
            width: 309,
            height: 50,
          }}
        > 
          {/* Left Block */}

         
              <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '20px',
        width: '228px',
        height: '50px',
      }}
    >
      <img
        src="https://via.placeholder.com/40"
        alt="logo"
        style={{ width: 40, height: 40, borderRadius: '50%' }}
      />
      <div>
        <div style={{ fontWeight: 600, fontSize: 16 }}>Neuronest</div>
        <div style={{ fontSize: 12, color: '#A9ADB1' }}>Healthcare</div>
      </div>
    </div> 

          {/* Right Block - Matching Percentage */}
        
         <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 0,
        gap: '1px',
        width: '70px',
        height: '50px',
        borderRadius: '8px',
        // backgroundColor: '#1A1A1A',
      }}
    >
      <div style={{ fontSize: 12, color: '#A9ADB1' }}>Low-Match</div>
      <div style={{ fontSize: 14, fontWeight: 600, color: 'red' }}>35%</div>
      
    </div>
  </div> 

        {/* Pill Row */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            padding: 0,
            gap: 8,
            width: 264,
            height: 20,
          }}
        >
          {['AI', 'IOT', 'Sustainable', 'Hardware'].map((pill, index) => (
            <div
              key={index}
              style={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2px 10px',
                gap: 10,
                height: 20,
                background: 'linear-gradient(218.9deg, #0C0D17 51.7%, #102361 103.02%)',
                border: '1px solid #303030',
                borderRadius: 16,
                color: '#FFFFFF',
                fontSize: 10,
              }}
            >
              {pill}
            </div>
          ))}
        </div>
      </div> 

      {/* Second Major Block */}
       <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: 0,
          gap: 12,
          width: 309,
          height: 103,
        }}
      > 
        {/* Top Row */}
         <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            padding: 0,
            gap: '20px',
            width: '309px',
            height: '37px',
          }}
        > 
          {/* Left Item */}
             <div
  style={{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 0,
    gap: '30px',
    width: '309px',
    height: '37px',
    flex: 'none',
    order: 0,
    alignSelf: 'stretch',
    flexGrow: 0,
  }}
>  
  {/* left side content */}
   <div style={{ display: 'flex', flexDirection: 'column' }}>
    <span style={{ fontSize: '14px', color: '#E6E6E6' }}>Stage</span>
    <span style={{ fontSize: '14px', color: '#A9ADB1' }}>Series A</span>
  </div>  

  {/* Right side content */}
   
   <div style={{ display: 'flex', flexDirection: 'column' }}>
    <span style={{ fontSize: '14px', color: '#E6E6E6', alignItems: 'flex-end' }}>Funding Need</span>
    <span style={{ fontSize: '14px', color: '#A9ADB1', alignItems: "flex-start" }}>$4M</span>
  </div>
</div>
         
        </div> 

        {/* Description Text */}
         <div
          style={{
            width: 309,
            height: 54,
            fontFamily: 'Neulis Sans',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: 14,
            lineHeight: '18px',
            letterSpacing: '0.02em',
            color: '#A9ADB1',
          }}
        >
          Automated vertical farming systems for small-scale farmers.
        </div>
      </div>
    </div>
    
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 0,
        gap: 16,
        width: 309,
        height: 40,
        flex: 'none',
        order: 1,
        alignSelf: 'stretch',
        flexGrow: 0,
      }}
    > 
      {/* Left Side Buttons */}
        <div style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>  
        {/* Primary Button */}
         <button
        
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '12px 24px',
            gap: 10,
            width: 100,
            height: 40,
            background: '#3262FF' ,
            color: '#fff',
            border: 'none',
            borderRadius: 12,
            cursor: 'pointer',
          }}
        >
          Connect
        </button> 

        {/* Secondary Button */}
         <button
        
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '12px 24px',
            gap: 10,
            width: 100,
            height: 40,
            background:  '#2F334D',
            color: '#fff',
            border: 'none',
            borderRadius: 12,
            cursor: 'pointer',
          }}
        >
          View
        </button>
      </div> 

      {/* Right Side Content */}
       <div style={{ color: '#E6E6E6', fontSize: '14px' }}>
 <button
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 24px',
    gap: '1px',
    background: '#2F334D',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
    
  }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="19"
    fill="none"
    viewBox="0 0 14 19"
    
  >
    <path
       
      d="M12.25 0H1.75C1.35218 0 0.970644 0.158035 0.68934 0.43934C0.408035 0.720644 0.25 1.10218 0.25 1.5V18C0.250067 18.1338 0.285951 18.2652 0.353929 18.3805C0.421907 18.4958 0.519503 18.5908 0.636587 18.6557C0.753672 18.7206 0.885979 18.7529 1.01978 18.7494C1.15358 18.7458 1.284 18.7066 1.3975 18.6356L7 15.1341L12.6034 18.6356C12.7169 18.7063 12.8472 18.7454 12.9809 18.7488C13.1146 18.7522 13.2467 18.7198 13.3636 18.655C13.4806 18.5902 13.5781 18.4953 13.646 18.3801C13.7139 18.2649 13.7498 18.1337 13.75 18V1.5C13.75 1.10218 13.592 0.720644 13.3107 0.43934C13.0294 0.158035 12.6478 0 12.25 0Z"
    stroke="#E6E6E6"
    fill="none"
  
    />
  </svg>
</button>
</div>
</div>
</div> 

 
    

    {/* Card 2 */}
    <div
      style={{
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '20px',
        gap: '32px',
        width: '349px',
        height: '321px',
        background: 'linear-gradient(218.9deg, #0C0D17 51.7%, #102361 103.02%)',
        borderRadius: '12px',
        flex: 'none',
        order: 0,
        flexGrow: 0,
      }}
    >
       
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 0,
        gap: 12,
        width: 309,
        // background: '#1A1A1A', // Optional: dark background
        borderRadius: 12,
      }}
    > 
      {/* First Major Block */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: 0,
          gap: 12,
          width: 309,
          height: 82,
        }}
      > 
        {/* Sub-section Top */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 0,
            gap: 12,
            width: 309,
            height: 50,
          }}
        > 
          {/* Left Block */}

        
              <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '20px',
        width: '228px',
        height: '50px',
      }}
    >
      <img
        src="https://via.placeholder.com/40"
        alt="logo"
        style={{ width: 40, height: 40, borderRadius: '50%' }}
      />
      <div>
        <div style={{ fontWeight: 600, fontSize: 16 }}>Neuronest</div>
        <div style={{ fontSize: 12, color: '#A9ADB1' }}>Healthcare</div>
      </div>
    </div> 

          {/* Right Block - Matching Percentage */}
        
         <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 0,
        gap: '1px',
        width: '70px',
        height: '50px',
        borderRadius: '8px',
        // backgroundColor: '#1A1A1A',
      }}
    >
      <div style={{ fontSize: 12, color: '#A9ADB1' }}>Low-Match</div>
      <div style={{ fontSize: 14, fontWeight: 600, color: 'red' }}>35%</div>
      
    </div>
  </div>

        {/* Pill Row */}
        <div
          style={{
             display: 'flex',
           flexDirection: 'row',
             alignItems: 'flex-start',
           padding: 0,
           gap: 8,
             width: 264,
           height: 20,
         }}
      >
           {['AI', 'IOT', 'Sustainable', 'Hardware'].map((pill, index) => (
             <div
               key={index}
               style={{
                 boxSizing: 'border-box',
                 display: 'flex',
                 flexDirection: 'row',
                 justifyContent: 'center',
                 alignItems: 'center',
                 padding: '2px 10px',
               gap: 10,
                height: 20,
               background: 'linear-gradient(218.9deg, #0C0D17 51.7%, #102361 103.02%)',
                 border: '1px solid #303030',
                borderRadius: 16,
                color: '#FFFFFF',
                 fontSize: 10,
               }}
             >
               {pill} 
             </div>
           ))}
         </div>
       </div> 

      {/* Second Major Block */}
       <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: 0,
          gap: 12,
          width: 309,
          height: 103,
        }}
      > 
        {/* Top Row */}
         <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            padding: 0,
            gap: '20px',
            width: '309px',
            height: '37px',
          }}
        > 
          {/* Left Item */}
             <div
  style={{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 0,
    gap: '30px',
    width: '309px',
    height: '37px',
    flex: 'none',
    order: 0,
    alignSelf: 'stretch',
    flexGrow: 0,
  }}
>  
  {/* left side content */}
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <span style={{ fontSize: '14px', color: '#E6E6E6' }}>Stage</span>
    <span style={{ fontSize: '14px', color: '#A9ADB1' }}>Series A</span>
  </div>  

  {/* Right side content */}
   
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <span style={{ fontSize: '14px', color: '#E6E6E6', alignItems: 'flex-end' }}>Funding Need</span>
    <span style={{ fontSize: '14px', color: '#A9ADB1', alignItems: "flex-start" }}>$4M</span>
  </div>
</div>
         
        </div> 

        {/* Description Text */}
         <div
          style={{
            width: 309,
            height: 54,
            fontFamily: 'Neulis Sans',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: 14,
            lineHeight: '18px',
            letterSpacing: '0.02em',
            color: '#A9ADB1',
          }}
        >
          Automated vertical farming systems for small-scale farmers.
        </div>
      </div>
    </div>
    
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 0,
        gap: 16,
        width: 309,
        height: 40,
        flex: 'none',
        order: 1,
        alignSelf: 'stretch',
        flexGrow: 0,
      }}
    > 
      {/* Left Side Buttons */}
        <div style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>  
        {/* Primary Button */}
         <button
        
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '12px 24px',
            gap: 10,
            width: 100,
            height: 40,
            background: '#3262FF' ,
            color: '#fff',
            border: 'none',
            borderRadius: 12,
            cursor: 'pointer',
          }}
        >
          Connect
        </button> 

        {/* Secondary Button */}
        <button
        
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '12px 24px',
            gap: 10,
            width: 100,
            height: 40,
            background:  '#2F334D',
            color: '#fff',
            border: 'none',
            borderRadius: 12,
            cursor: 'pointer',
          }}
        >
          View
        </button>
      </div> 

      {/* Right Side Content */}
         <div style={{ color: '#E6E6E6', fontSize: '14px' }}>
 <button
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 24px',
    gap: '1px',
    background: '#2F334D',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
    
  }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="19"
    fill="none"
    viewBox="0 0 14 19"
    
  >
    <path
       
      d="M12.25 0H1.75C1.35218 0 0.970644 0.158035 0.68934 0.43934C0.408035 0.720644 0.25 1.10218 0.25 1.5V18C0.250067 18.1338 0.285951 18.2652 0.353929 18.3805C0.421907 18.4958 0.519503 18.5908 0.636587 18.6557C0.753672 18.7206 0.885979 18.7529 1.01978 18.7494C1.15358 18.7458 1.284 18.7066 1.3975 18.6356L7 15.1341L12.6034 18.6356C12.7169 18.7063 12.8472 18.7454 12.9809 18.7488C13.1146 18.7522 13.2467 18.7198 13.3636 18.655C13.4806 18.5902 13.5781 18.4953 13.646 18.3801C13.7139 18.2649 13.7498 18.1337 13.75 18V1.5C13.75 1.10218 13.592 0.720644 13.3107 0.43934C13.0294 0.158035 12.6478 0 12.25 0Z"
    stroke="#E6E6E6"
    fill="none"
  
    />
  </svg>
</button>
</div>
</div>
</div> 


 



    {/* Card 3 */}

<div
      style={{
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '20px',
        gap: '32px',
        width: '349px',
        height: '321px',
        background: 'linear-gradient(218.9deg, #0C0D17 51.7%, #102361 103.02%)',
        borderRadius: '12px',
        flex: 'none',
        order: 0,
        flexGrow: 0,
      }}
    >
       
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 0,
        gap: 12,
        width: 309,
        // background: '#1A1A1A', // Optional: dark background
        borderRadius: 12,
      }}
    > 
      {/* First Major Block */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: 0,
          gap: 12,
          width: 309,
          height: 82,
        }}
      >
        {/* Sub-section Top */}
         <div
           style={{
             display: 'flex',
             flexDirection: 'row',
             justifyContent: 'center',
             alignItems: 'center',
             padding: 0,
             gap: 12,
             width: 309,
             height: 50,
           }}
         >
          {/* Left Block */}

         
               <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '20px',
        width: '228px',
        height: '50px',
      }}
    >
      <img
        src="https://via.placeholder.com/40"
        alt="logo"
        style={{ width: 40, height: 40, borderRadius: '50%' }}
      />
      <div>
        <div style={{ fontWeight: 600, fontSize: 16 }}>Neuronest</div>
        <div style={{ fontSize: 12, color: '#A9ADB1' }}>Healthcare</div>
      </div>
    </div>  

          {/* Right Block - Matching Percentage */}
        
          <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 0,
        gap: '1px',
        width: '70px',
        height: '50px',
        borderRadius: '8px',
        // backgroundColor: '#1A1A1A',
      }}
    >
      <div style={{ fontSize: 12, color: '#A9ADB1' }}>Low-Match</div>
      <div style={{ fontSize: 14, fontWeight: 600, color: 'red' }}>35%</div>
      
    </div>
  </div>

        {/* Pill Row */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            padding: 0,
            gap: 8,
            width: 264,
            height: 20,
          }}
        >
          {['AI', 'IOT', 'Sustainable', 'Hardware'].map((pill, index) => (
            <div
              key={index}
              style={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2px 10px',
                gap: 10,
                height: 20,
                background: 'linear-gradient(218.9deg, #0C0D17 51.7%, #102361 103.02%)',
                border: '1px solid #303030',
                borderRadius: 16,
                color: '#FFFFFF',
                fontSize: 10,
              }}
            >
              {pill}
            </div>
          ))}
        </div>
      </div> 

      {/* Second Major Block */}
       <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: 0,
          gap: 12,
          width: 309,
          height: 103,
        }} 
      >
        {/* Top Row */}
         <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            padding: 0,
            gap: '20px',
            width: '309px',
            height: '37px',
          }}
        >  
          {/* Left Item */}
             <div
  style={{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 0,
    gap: '30px',
    width: '309px',
    height: '37px',
    flex: 'none',
    order: 0,
    alignSelf: 'stretch',
    flexGrow: 0,
  }}
>  
  {/* left side content */}
   <div style={{ display: 'flex', flexDirection: 'column' }}>
    <span style={{ fontSize: '14px', color: '#E6E6E6' }}>Stage</span>
    <span style={{ fontSize: '14px', color: '#A9ADB1' }}>Series A</span>
  </div> 

  {/* Right side content */}
   
   <div style={{ display: 'flex', flexDirection: 'column' }}>
    <span style={{ fontSize: '14px', color: '#E6E6E6', alignItems: 'flex-end' }}>Funding Need</span>
    <span style={{ fontSize: '14px', color: '#A9ADB1', alignItems: "flex-start" }}>$4M</span>
  </div>
</div>
         
        </div> 

        {/* Description Text */}
         <div
          style={{
            width: 309,
            height: 54,
            fontFamily: 'Neulis Sans',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: 14,
            lineHeight: '18px',
            letterSpacing: '0.02em',
            color: '#A9ADB1',
          }}
        >
          Automated vertical farming systems for small-scale farmers.
        </div>
      </div>
    </div>
    
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 0,
        gap: 16,
        width: 309,
        height: 40,
        flex: 'none',
        order: 1,
        alignSelf: 'stretch',
        flexGrow: 0,
      }}
    > 
      {/* Left Side Buttons */}
       <div style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>  
        {/* Primary Button */}
        <button
        
           style={{
             display: 'flex',
             flexDirection: 'row',
             justifyContent: 'center',
            alignItems: 'center',
             padding: '12px 24px',
             gap: 10,
             width: 100,
             height: 40,
             background: '#3262FF' ,
             color: '#fff',
             border: 'none',
             borderRadius: 12,
             cursor: 'pointer',
           }}
         >
           Connect
         </button> 

        {/* Secondary Button */}
         <button
        
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '12px 24px',
            gap: 10,
            width: 100,
            height: 40,
            background:  '#2F334D',
            color: '#fff',
            border: 'none',
            borderRadius: 12,
            cursor: 'pointer',
          }}
        >
          View
        </button>
      </div> 

      {/* Right Side Content */}
        <div style={{ color: '#E6E6E6', fontSize: '14px' }}>
 <button
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 24px',
    gap: '1px',
    background: '#2F334D',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
    
  }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="19"
    fill="none"
    viewBox="0 0 14 19"
    
  >
    <path
       
      d="M12.25 0H1.75C1.35218 0 0.970644 0.158035 0.68934 0.43934C0.408035 0.720644 0.25 1.10218 0.25 1.5V18C0.250067 18.1338 0.285951 18.2652 0.353929 18.3805C0.421907 18.4958 0.519503 18.5908 0.636587 18.6557C0.753672 18.7206 0.885979 18.7529 1.01978 18.7494C1.15358 18.7458 1.284 18.7066 1.3975 18.6356L7 15.1341L12.6034 18.6356C12.7169 18.7063 12.8472 18.7454 12.9809 18.7488C13.1146 18.7522 13.2467 18.7198 13.3636 18.655C13.4806 18.5902 13.5781 18.4953 13.646 18.3801C13.7139 18.2649 13.7498 18.1337 13.75 18V1.5C13.75 1.10218 13.592 0.720644 13.3107 0.43934C13.0294 0.158035 12.6478 0 12.25 0Z"
    stroke="#E6E6E6"
    fill="none"
  
    />
  </svg>
</button>
</div>
</div>
</div> 


 




{/* end of startup */}
 </div>
</div>
</div>
</div>




 



  
 
 ); 

};
export default BrowseStartups; 