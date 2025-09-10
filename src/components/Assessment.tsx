import React, { useState } from 'react';
import PowernestLogo from '../assets/Powernest.png';
import QuestionComponent from './QuestionComponent'; // Import the QuestionComponent

import { useNavigate } from 'react-router-dom';
const Assessment = ({ userType }) => {
  const navigate = useNavigate();
  const [showQuestions, setShowQuestions] = useState(false);
  const title = userType === 'investor' 
    ? 'Investor Match Readiness Assessment' 
    : 'Investment Style & Fit Assessment';

  const description = 'Before you begin, please review the instructions. This short assessment will help us tailor the experience to your preferences and goals.';

  if (showQuestions) {
    return <QuestionComponent userType={userType} />;
  }


  const handleStartAssessment = () => {
    navigate('/questions');
  };
  const AssessmentIcon = () => (
    <div className="relative w-[200px] h-[160px] mx-auto mb-8">
      {/* Clipboard */}
      <div className="absolute left-1/2 top-4 transform -translate-x-1/2">
        <svg width="120" height="140" viewBox="0 0 120 140" fill="none">
          {/* Clipboard background */}
          <rect x="20" y="25" width="80" height="110" rx="8" fill="#E6E6E6" />
          <rect x="25" y="30" width="70" height="100" rx="4" fill="#FFFFFF" />
          
          {/* Clipboard clip */}
          <rect x="40" y="15" width="40" height="20" rx="4" fill="#B0B0B0" />
          <rect x="42" y="17" width="36" height="16" rx="2" fill="#D0D0D0" />
          
          {/* Checklist items */}
          <rect x="35" y="45" width="8" height="8" rx="2" fill="#3262FF" />
          <rect x="47" y="47" width="25" height="4" rx="2" fill="#333333" />
          
          <rect x="35" y="60" width="8" height="8" rx="2" fill="#3262FF" />
          <rect x="47" y="62" width="30" height="4" rx="2" fill="#333333" />
          
          <rect x="35" y="75" width="8" height="8" rx="2" fill="#CCCCCC" />
          <rect x="47" y="77" width="20" height="4" rx="2" fill="#333333" />
          
          <rect x="35" y="90" width="8" height="8" rx="2" fill="#CCCCCC" />
          <rect x="47" y="92" width="28" height="4" rx="2" fill="#333333" />
          
          <rect x="35" y="105" width="8" height="8" rx="2" fill="#CCCCCC" />
          <rect x="47" y="107" width="22" height="4" rx="2" fill="#333333" />
        </svg>
      </div>
      
      {/* Clock */}
      <div className="absolute top-0 left-8">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
          <circle cx="25" cy="25" r="22" fill="#4A90E2" stroke="#FFFFFF" strokeWidth="2" />
          <circle cx="25" cy="25" r="18" fill="#FFFFFF" />
          <line x1="25" y1="25" x2="25" y2="15" stroke="#333333" strokeWidth="2" strokeLinecap="round" />
          <line x1="25" y1="25" x2="32" y2="25" stroke="#333333" strokeWidth="2" strokeLinecap="round" />
          <circle cx="25" cy="25" r="2" fill="#333333" />
        </svg>
      </div>
      
      {/* Phone/Device */}
      <div className="absolute bottom-0 right-8">
        <svg width="40" height="60" viewBox="0 0 40 60" fill="none">
          <rect x="2" y="2" width="36" height="56" rx="8" fill="#1E3A8A" />
          <rect x="4" y="8" width="32" height="44" rx="4" fill="#3262FF" />
          <circle cx="20" cy="56" r="3" fill="#FFFFFF" />
          <rect x="15" y="4" width="10" height="2" rx="1" fill="#FFFFFF" />
        </svg>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen text-white font-sans relative overflow-hidden"
         style={{
           background: '#000000'
         }}>
      
      {/* Blue gradient background */}
      <div 
        className="absolute top-0 left-0 w-full"
        style={{
          height: '85vh',
          background: 'linear-gradient(180deg, #0606A9 0%, #0C0C4A 35%, #000000 100%)',
          borderRadius: '0 0 0 0'
        }}
      />
      
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header section */}
        <div className="pt-12 pb-8">
          <div className="flex justify-center">
            <div className="flex items-center gap-3">
              <div className="h-8 rounded-full overflow-hidden flex items-center justify-center" style={{ width: '15rem' }}>
                <img 
                  src={PowernestLogo} 
                  alt="PowerNest Logo" 
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main content area */}
        <div className="flex-1 px-6 pb-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-start gap-16">
              
              {/* Left side - Assessment Icon */}
              <div className="flex-shrink-0 lg:w-1/3">
                <AssessmentIcon />
              </div>

              {/* Right side - Content */}
              <div className="flex-1 lg:w-2/3 max-w-2xl">
                {/* Title */}
                <h2 className="font-neulis-sans font-semibold text-3xl lg:text-4xl text-white mb-6 leading-tight">
                  {title}
                </h2>
                
                {/* Description */}
                <p className="font-inter text-base text-gray-300 mb-10 leading-relaxed">
                  {description}
                </p>

                {/* Assessment Details */}
                <div className="mb-10">
                  <h3 className="font-neulis-sans font-semibold text-xl text-white mb-8">
                    Assessment Details:
                  </h3>
                  
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 flex-shrink-0"></div>
                      <span className="font-inter text-sm text-gray-300 leading-relaxed">Total Questions: 20</span>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 flex-shrink-0"></div>
                      <span className="font-inter text-sm text-gray-300 leading-relaxed">Total Duration: 15 minutes</span>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 flex-shrink-0"></div>
                      <span className="font-inter text-sm text-gray-300 leading-relaxed">Time per Question: You'll see a timer for each question</span>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 flex-shrink-0"></div>
                      <span className="font-inter text-sm text-gray-300 leading-relaxed">Question Type: Multiple choice (single option only)</span>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 flex-shrink-0"></div>
                      <span className="font-inter text-sm text-gray-300 leading-relaxed">Navigation: You cannot go back to previous questions</span>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 flex-shrink-0"></div>
                      <span className="font-inter text-sm text-gray-300 leading-relaxed">Auto-submit: The test will auto-submit if time runs out</span>
                    </div>
                  </div>
                </div>

                {/* Important Note */}
                <div className="mb-12">
                  <h3 className="font-neulis-sans font-semibold text-xl text-white mb-8">
                    Important note:
                  </h3>
                  
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 flex-shrink-0"></div>
                      <span className="font-inter text-sm text-gray-300 leading-relaxed">Ensure you have a stable internet connection.</span>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 flex-shrink-0"></div>
                      <span className="font-inter text-sm text-gray-300 leading-relaxed">Avoid refreshing or closing the page.</span>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 flex-shrink-0"></div>
                      <span className="font-inter text-sm text-gray-300 leading-relaxed">This test can only be taken once.</span>
                    </div>
                  </div>
                </div>

                {/* Start Assessment Button */}
                <div className="flex justify-center">
                  <button 
    onClick={handleStartAssessment}
    className="bg-[#3262FF] hover:bg-[#2952FF] text-white px-10 py-4 rounded-xl font-inter text-base font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
  >
    Start assessment now
  </button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
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

export default Assessment;