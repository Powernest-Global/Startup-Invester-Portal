
// import { useNavigate } from 'react-router-dom';
// import FounderImg from '../assets/Founder.png';
// import InvestorImg from '../assets/Investor.png';
// import PowernestImg from '../assets/Powernest.png';

// const UserConfirmation = () => {
//     const navigate = useNavigate();
//     const handleClick = () => navigate('/founder');
//   return (
//     <div
//       style={{
//         position: 'relative',
//         width: '1440px',
//         height: '1024px',
//         background: '#05060F',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         gap: '40px',
//       }}
//     >
//       {/* Group 39279 */}
//       <div
//         style={{
//           position: 'absolute',
//           width: '564px',
//           height: '592px',
//           left: '438px',
//           top: '214px',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           justifyContent: 'center',
//           gap: '40px',
//           background: '#1A1B22', // Optional inner background for the box
//           borderRadius: '16px',
//           padding: '40px',
//         }}
//       >
//         {/* Image logo */}
//         <div
//   style={{
//     position: 'absolute',
//     width: '317.2px',
//     height: '52px',
//     left: 'calc(50% - 317.2px / 2 - 0.4px)',
//     top: '214px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }}
// >
//      <img
//     src={"PowernestImg"}
//     alt="PowernestImg"
   
  
//   />
// </div>
// <div
//   style={{
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: '0px',
//     gap: '8px',
//     position: 'absolute',
//     width: '269px',
//     height: '74px',
//     left: '585px',
//     top: '298px',
//   }}
// >
//   <div
//   style={{
//     width: '269px',
//     height: '40px',
//     fontFamily: "'Neulis Sans'",
//     fontStyle: 'normal',
//     fontWeight: 700,
//     fontSize: '32px',
//     lineHeight: '40px',
//     textAlign: 'center',
//     letterSpacing: '-0.005em',
//     color: '#E6E6E6',
//     flex: 'none',
//     order: 0,
//     alignSelf: 'stretch',
//     flexGrow: 0,
//   }}
// >
//   Welcome John!👋
// </div>
// <div
//   style={{
//     width: '269px',
//     height: '26px',
//     fontFamily: "'Neulis Sans'",
//     fontStyle: 'normal',
//     fontWeight: 600,
//     fontSize: '18px',
//     lineHeight: '26px',
//     textAlign: 'center',
//     letterSpacing: '-0.001em',
//     color: '#E6E6E6',
//     flex: 'none',
//     order: 1,
//     alignSelf: 'stretch',
//     flexGrow: 0,
//   }}
// >
//   Are you here to build or invest?
// </div>

// </div>
// <div

//   style={{
//     boxSizing: 'border-box',
//     position: 'absolute',
//     width: '250px',
//     height: '250px',
//     left: '438px',
//     top: '436px',
//     background: '#12131A',
//     border: '1px solid #FFFFFF',
//     borderRadius: '12px',
//     overflow: 'hidden', // prevents image from overflowing rounded corners
//   }}
// >
//   <img
//     src={"FounderImg"}
//     alt="FounderImg"
//     style={{
//       width: '100%',
//       height: '100%',
//       objectFit: 'cover',
//     }}
//   />
// </div>

// <div
    
//   style={{
//     boxSizing: 'border-box',
//     position: 'absolute',
//     width: '250px',
//     height: '250px',
//     left: '752px',
//     top: '436px',
//     border: '1px solid #A9ADB1',
//     borderRadius: '12px',
//     overflow: 'hidden', // Keeps the image inside the border radius
//   }}
// >
//   <img
//     src={"InvestorImg"}
//     alt="Investor"
//     style={{
//       width: '100%',
//       height: '100%',
//       objectFit: 'cover',
//     }}
//   />
// </div>

// </div>


//       </div>
    
//   );
// };

// const buttonStyle = {
//   padding: '16px 32px',
//   fontSize: '18px',
//   fontWeight: 'bold',
//   color: '#fff',
//   backgroundColor: '#3262FF',
//   border: 'none',
//   borderRadius: '12px',
//   cursor: 'pointer',
//   minWidth: '200px',
// };

// export default UserConfirmation;
{/*new*/}
// import React from 'react';
// import FounderImg from '../assets/Founder.png';
// import InvestorImg from '../assets/Investor.png';
//  import PowernestImg from '../assets/Powernest.png';
// interface UserConfirmationProps {
//   onRoleSelect: (role: 'founder' | 'investor') => void;
// }

// const UserConfirmation: React.FC<UserConfirmationProps> = ({ onRoleSelect }) => {
//   return (

//        <div
//       style={{
//         position: 'relative',
//         width: '1440px',
//         height: '1024px',
//         background: '#05060F',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         gap: '40px',
//       }}
//     >
//        <div className="text-white text-center mb-8"> 
      
        
//                <img src={PowernestImg} alt="Powernest" style={{ position: 'absolute',
//     width: '317.2px',
//     height: '52px',
//     left: 'calc(50% - 317.2px / 2 - 0.4px)',
//     top: '214px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center'
//                }}/>
//               </div> 
             
//                     <div  style={{
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: '0px',
//     gap: '8px',
//     position: 'absolute',
//     width: '269px',
//     height: '74px',
//     left: '585px',
//     top: '298px',
//   }}>
    
//           <h1   style={{
//     width: '269px',
//     height: '40px',
//     fontFamily: "'Neulis Sans'",
//     fontStyle: 'normal',
//     fontWeight: 700,
//     fontSize: '32px',
//     lineHeight: '40px',
//     textAlign: 'center',
//     letterSpacing: '-0.005em',
//     color: '#E6E6E6',
//     flex: 'none',
//     order: 0,
//     alignSelf: 'stretch',
//     flexGrow: 0,
//   }}>  Welcome John!👋</h1>
       
//         <p style={{
//     width: '269px',
//     height: '26px',
//     fontFamily: "'Neulis Sans'",
//     fontStyle: 'normal',
//     fontWeight: 600,
//     fontSize: '18px',
//     lineHeight: '26px',
//     textAlign: 'center',
//     letterSpacing: '-0.001em',
//     color: '#E6E6E6',
//     flex: 'none',
//     order: 1,
//     alignSelf: 'stretch',
//     flexGrow: 0,
//   }}>
//     Are you here to build or invest?</p>
        
     

// </div>
     

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl w-full">
//         <div
//           onClick={() => onRoleSelect('founder')}
          
//           style={{
//     boxSizing: 'border-box',
//     position: 'absolute',
//     width: '250px',
//     height: '250px',
//     left: '438px',
//     top: '436px',
//     background: '#12131A',
//     border: '1px solid #FFFFFF',
//     borderRadius: '12px',
//     overflow: 'hidden', // prevents image from overflowing rounded corners
//   }}
//         >
        
//                 <img src={FounderImg} alt="Founder"  style={{
//       width: '100%',
//       height: '100%',
//       objectFit: 'cover',
//     }}/>
          
//         </div>

//         <div
//           onClick={() => onRoleSelect('investor')}
          
//         style={{
//     boxSizing: 'border-box',
//     position: 'absolute',
//     width: '250px',
//     height: '250px',
//     left: '752px',
//     top: '436px',
//     border: '1px solid #A9ADB1',
//     borderRadius: '12px',
//     overflow: 'hidden', // Keeps the image inside the border radius
//   }}
//       >
         
//              <img src={InvestorImg} alt="Investor" style={{
//       width: '100%',
//       height: '100%',
//       objectFit: 'cover',
//     }}/>
//           {/* <h2 className="text-white text-lg font-semibold">I'm an Investor</h2> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserConfirmation;
import React, { useState } from 'react';
import FounderImg from '../assets/Founder.png';
import InvestorImg from '../assets/Investor.png';
import PowernestImg from '../assets/Powernest.png';

interface UserConfirmationProps {
  onRoleSelect: (role: 'founder' | 'investor') => void;
}

const UserConfirmation: React.FC<UserConfirmationProps> = ({ onRoleSelect }) => {
  const [selectedRole, setSelectedRole] = useState<'founder' | 'investor' | null>(null);

  const handleSelect = (role: 'founder' | 'investor') => {
    setSelectedRole(role);
  };

  const handleConfirm = () => {
    if (selectedRole) {
      onRoleSelect(selectedRole);
    }
  };

  return (
    <div
      style={{
        position: 'absolute',
         width: '1408px',
         height: '992px',
        // background: '#05060F',
        background:'radial-gradient(195.32% 112.27% at 50% 100%, rgba(0, 0, 0, 0.8) 30.77%, rgba(12, 12, 74, 0.8) 44.28%, rgba(6, 6, 169, 0.8) 58.97%, rgba(0, 0, 255, 0.8) 75.08%, rgba(152, 152, 255, 0.8) 91.44%), #12131A',
       
       top: 'calc(50% - 992px/2)',
         borderRadius: '12px',
        display: 'flex',
         flexDirection: 'column',
         alignItems: 'center',
         justifyContent: 'center',
         gap: '40px',
   
      }}
    >
      {/* Logo */}
      <div className="text-white text-center mb-8">
        <img
          src={PowernestImg}
          alt="Powernest"
          style={{
            position: 'absolute',
            width: '317.2px',
            height: '52px',
            left: 'calc(50% - 317.2px / 2 - 0.4px)',
            top: '214px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      </div>

      {/* Welcome Message */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0px',
          gap: '8px',
          position: 'absolute',
          width: '269px',
          height: '74px',
          left: '585px',
          top: '298px',
        }}
      >
        <h1
          style={{
            fontWeight: 700,
            fontSize: '30px',
            color: '#E6E6E6',
            textAlign: 'center',
          }}
        >
          Welcome John!👋
        </h1>
        <p
          style={{
            fontWeight: 600,
            fontSize: '18px',
            color: '#E6E6E6',
            textAlign: 'center',
          }}
        >
          Are you here to build or invest?
        </p>
      </div>

      {/* Role Selection Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl w-full">
        <div
          onClick={() => handleSelect('founder')}
          style={{
            boxSizing: 'border-box',
            position: 'absolute',
            width: '250px',
            height: '250px',
            left: '438px',
            top: '436px',
            background: '#12131A',
            border: selectedRole === 'founder' ? '2px solid #00D9A6' : '1px solid #FFFFFF',
            borderRadius: '12px',
            overflow: 'hidden',
            cursor: 'pointer',
          }}
        >
          <img
            src={FounderImg}
            alt="Founder"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        <div
          onClick={() => handleSelect('investor')}
          style={{
            boxSizing: 'border-box',
            position: 'absolute',
            width: '250px',
            height: '250px',
            left: '752px',
            top: '436px',
            background: '#12131A',
            border: selectedRole === 'investor' ? '2px solid #00D9A6' : '1px solid #A9ADB1',
            borderRadius: '12px',
            overflow: 'hidden',
            cursor: 'pointer',
          }}
        >
          <img
            src={InvestorImg}
            alt="Investor"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Confirm Button */}
      {selectedRole && (
        <button
          onClick={handleConfirm}
          style={{
            width:'464px',
            height: '48px',
             position: 'absolute',
            top: '720px',
            padding: '12px 32px',
            backgroundColor: '#3262FF',
            color: '#000',
            fontWeight: 700,
            fontSize: '16px',
            borderRadius: '12px',
            cursor: 'pointer',
            border: 'none',
          }}
        >
          {selectedRole === 'founder' ? `I'm a Founder` : `I'm a Investor` }
        </button>
      )}
    </div>
  );
};

export default UserConfirmation;

