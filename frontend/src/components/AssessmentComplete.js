import React from 'react';
import { useNavigate } from 'react-router-dom';
import PowernestLogo from '../assets/Powernest.png';

const AssessmentComplete = ({ userType }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen text-white font-sans relative overflow-hidden bg-[#05060F]">
      {/* Background gradient */}
      <div 
        className="absolute w-full h-full"
        style={{
          background: 'radial-gradient(100% 100% at 50% 0%, #0F0F2D 0%, #05060F 100%)',
          top: "0",
          left: "0",
        }}
      />

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <div className="bg-[#12131A] py-6 px-6">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="h-8 rounded-full overflow-hidden flex items-center justify-center" style={{ width: '10rem' }}>
              <img src={PowernestLogo} alt="PowerNest Logo" className="w-full object-cover" />
            </div>
            <h2 className="font-neulis-sans font-semibold text-xl md:text-2xl text-white absolute left-1/2 transform -translate-x-1/2">
              {userType === 'investor' ? 'Investor Match Readiness Assessment' : 'Investment Style & Fit Assessment'}
            </h2>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 px-6 pb-12 pt-8 flex items-center justify-center">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-10">
              <h1 className="font-neulis-sans font-semibold text-4xl text-[#3262FF] mb-6">
                Great job!
              </h1>
              
              {/* Checkmark icon */}
              <div className="flex justify-center mb-6">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="40" r="40" fill="#3262FF"/>
                  <path d="M56 30L35.5 50.5L24 39" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              <h2 className="font-neulis-sans font-semibold text-2xl text-white mb-6">
                You've completed the assessment.
              </h2>
              
              <p className="font-inter text-lg text-[#A9ADB1] mb-8">
                {userType === 'investor' 
                  ? "Thanks for taking the time to reflect on your investment preferences. We're setting up a personalized experience based on your interests and focus areas."
                  : "Thanks for taking the time to reflect on your start-up's investor readiness. We're unlocking your personalized experience now — investor matches and key features will appear shortly."}
              </p>
              
              <button
                onClick={() => navigate('/dashboard')} // Updated to navigate to dashboard
                className="px-8 py-3 rounded-xl bg-[#3262FF] text-white font-inter text-base font-semibold hover:bg-[#2952FF] hover:scale-105 transition-all duration-300"
              >
                Go to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentComplete;