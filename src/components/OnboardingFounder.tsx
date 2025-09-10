import React, { useState } from 'react';
import OnboardingImg from '../assets/onboardingimage.png';
import Assessment from './Assessment'; // We'll create this component next

const App = () => {
  const [showAssessment, setShowAssessment] = useState(false);
  const [userType, setUserType] = useState('founder'); // Default to investor, you can change this based on actual user type

  const handleTakeAssessment = () => {
    setShowAssessment(true);
  };

  if (showAssessment) {
    return <Assessment userType={userType} />;
  }

  return (
    <div className="min-h-screen bg-[#05060F] text-white flex flex-col items-center justify-center p-4 font-sans">
      
      {/* Background visual element */}
      <div 
        className="absolute w-[721px] h-[721px] blur-[47px] rounded-full"
        style={{
          background: 'radial-gradient(192.32% 112.27% at 50% 100%, #000000 30.77%, #0C0C4A 44.28%, #0606A9 58.97%, #0000FF 75.08%, #9898FF 91.44%)',
          top: "0",
          left: "0",
          transform: "translate(-50%, -50%)"
        }}
      />

      <div className="bg-white/5 backdrop-blur-sm border border-[#303030] rounded-xl overflow-hidden p-6 md:p-8 lg:p-12 w-full max-w-6xl mt-16 md:mt-0">
        
        <div className="flex flex-col items-center gap-10 text-center">
          <h1 className="font-neulis-sans font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight">
            Onboarding Completed<br />Successfully
          </h1>
          <img
            src={OnboardingImg}
            alt="OnboardingImg"
            className="w-40 h-40 md:w-52 md:h-52 rounded-full"
          />
        </div>

        <div className="bg-[#12131A] border border-[#303030] rounded-2xl p-6 md:p-10 lg:p-16 mt-16 flex flex-col gap-10">
          
          <h2 className="font-neulis-sans font-semibold text-xl md:text-2xl text-center">
            Next step - {userType === 'investor' ? 'Investor Match Readiness' : 'Investment Style & Fit'} Assessment
          </h2>

          <div className="flex flex-col gap-8">
            
            <div className="flex flex-col gap-4">
              <h3 className="font-neulis-sans font-semibold text-lg md:text-xl text-[#E6E6E6]">
                Before you begin, here's what you need to know
              </h3>
              <p className="font-inter text-sm md:text-base text-[#A9ADB1]">
                {userType === 'investor' 
                  ? 'This short 15-minute investor match readiness assessment is designed to help us better understand your preferences, decision-making approach, and goals, so we can deliver a more personalised and meaningful experience for you.'
                  : 'This short 15-minute investment style assessment helps us understand your investment preferences and goals to provide better matching with suitable startups.'}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-neulis-sans font-semibold text-lg md:text-xl text-[#E6E6E6]">
                Why take this assessment?
              </h3>
              <p className="font-inter text-sm md:text-base text-[#A9ADB1]">
                {userType === 'investor' 
                  ? 'The Investor Match Readiness Assessment evaluates your start-up\'s preparation for investor engagement. By analysing your current stage, documentation quality, and strategic clarity, we connect you with investors whose focus and expectations align with your business goals.'
                  : 'The Investment Style & Fit Assessment evaluates your investment preferences, risk tolerance, and sector interests to match you with startups that align with your investment criteria.'}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-6 md:mt-10">
            
            <button className="text-[#E6E6E6] text-base md:text-lg font-inter cursor-pointer transition-colors hover:text-white">
              Skip to Dashboard
            </button>

            <button 
              onClick={handleTakeAssessment}
              className="bg-[#3262FF] text-white px-8 py-3 md:px-10 md:py-4 rounded-xl font-inter text-base md:text-lg font-semibold transition-transform hover:scale-105"
            >
              Take Assessment
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Neulis+Sans:wght@600&display=swap');
        .font-sans {
            font-family: 'Inter', sans-serif;
        }
        .font-neulis-sans {
            font-family: 'Neulis Sans', sans-serif;
        }
      `}</style>
    </div>
  );
};

export default App;
