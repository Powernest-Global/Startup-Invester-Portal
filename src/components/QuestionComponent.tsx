import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PowernestLogo from '../assets/Powernest.png';

const QuestionComponent = ({ userType }) => {
  const navigate = useNavigate();
  // Sample questions data - will be replaced with API data later
  const questions = [
    {
      id: 1,
      text: "Imagine you're leading a team through a challenging project with a tight deadline. A key team member suddenly faces a personal crisis that impacts their work. How would you handle this situation?",
      options: [
        "Offer support and flexibility, adjusting deadlines if necessary.",
        "Prioritize project completion, expecting the team member to manage their personal issues.",
        "Delegate the team member's tasks to others to ensure project continuity.",
        "Encourage the team member to take time off, focusing on their well-being."
      ]
    },
    // Add more questions as needed...
  ];

  // State management
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30); // 30 seconds per question
  const [isRunning, setIsRunning] = useState(true);
  const [showHelp, setShowHelp] = useState(false);

  // Calculate progress percentage
  const progress = Math.floor((currentQuestionIndex / 20) * 100);
  const questionNumber = currentQuestionIndex + 1;

  // Timer effect
  useEffect(() => {
    let interval;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      // Auto move to next question when time runs out
      handleNextQuestion();
    }
    return () => clearInterval(interval);
  }, [timeLeft, isRunning]);

  // Format time display
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Handle option selection
  const handleOptionSelect = (index) => {
    setSelectedOption(index);
  };

  // Handle next question
  const handleNextQuestion = () => {
    if (currentQuestionIndex < 19) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setTimeLeft(30);
    } else {
      navigate('/assessment-complete');
    }
  };

  // Determine timer color
  const timerColor = timeLeft <= 15 ? '#FF3B30' : '#3262FF';

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

      {/* Content container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        
        {/* Header with dark background */}
        <div className="bg-[#12131A] py-6 px-6">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            {/* PowerNest Logo - moved to left */}
            <div className="h-8 rounded-full overflow-hidden flex items-center justify-center" style={{ width: '10rem' }}>
              <img 
                src={PowernestLogo} 
                alt="PowerNest Logo" 
                className="w-full object-cover"
              />
            </div>
            
            {/* Assessment title - centered */}
            <h2 className="font-neulis-sans font-semibold text-xl md:text-2xl text-white absolute left-1/2 transform -translate-x-1/2">
              {userType === 'investor' ? 'Investor Match Readiness Assessment' : 'Investment Style & Fit Assessment'}
            </h2>
            
            {/* Help button - right aligned */}
            <div className="relative">
              <button 
                className="w-8 h-8 rounded-full bg-[#303030] flex items-center justify-center hover:bg-[#3262FF] transition-colors"
                onMouseEnter={() => setShowHelp(true)}
                onMouseLeave={() => setShowHelp(false)}
              >
                <span className="text-white font-bold">?</span>
              </button>
              
              {/* Help tooltip */}
              {showHelp && (
                <div className="absolute right-0 top-10 w-64 bg-[#12131A] border border-[#303030] rounded-lg p-4 shadow-lg z-10">
                  <p className="font-inter text-sm text-[#A9ADB1]">
                    This assessment helps us understand your preferences. You have 30 seconds per question.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 px-6 pb-12 pt-8">
          <div className="max-w-4xl mx-auto">
            
            {/* Progress section */}
            <div className="mb-10 text-center">
              {/* Progress percentage - highlighted */}
              <div className="mb-4">
                <span className="font-neulis-sans font-semibold text-3xl text-[#3262FF]">
                  {progress}% complete
                </span>
              </div>
              
              {/* Progress bar */}
              <div className="w-full bg-[#303030] rounded-full h-2.5 mx-auto" style={{ maxWidth: '500px' }}>
                <div 
                  className="bg-[#3262FF] h-2.5 rounded-full transition-all duration-300" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            {/* Question container */}
            <div className="rounded-xl p-8">
              
              {/* Question number and timer in same line */}
              <div className="flex justify-between items-center mb-8">
                <h3 className="font-neulis-sans font-semibold text-2xl text-white">
                  Question {questionNumber} of 20
                </h3>
                
                {/* Timer - changes color when <= 15 seconds */}
                <div className="flex items-center gap-2 bg-[#303030] px-4 py-2 rounded-lg">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="9" stroke={timerColor} strokeWidth="2"/>
                    <path d="M10 5V10H15" stroke={timerColor} strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span className="font-neulis-sans font-semibold text-lg" style={{ color: timerColor }}>
                    {formatTime(timeLeft)}
                  </span>
                </div>
              </div>
              
              {/* Question text */}
              <h3 className="font-neulis-sans font-semibold text-xl text-white mb-8">
                {questions[0].text} {/* Using first question for now */}
              </h3>
              
              {/* Options */}
              <div className="space-y-4 mb-10">
                {questions[0].options.map((option, index) => (
                  <div 
                    key={index}
                    className={`flex items-center p-4 rounded-lg cursor-pointer transition-all duration-200 ${selectedOption === index ? 'bg-[#3262FF]/10 border-2 border-[#3262FF]' : ' hover:bg-[#2A2A2A]'}`}
                    onClick={() => handleOptionSelect(index)}
                  >
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-4 ${selectedOption === index ? 'border-[#3262FF] bg-[#3262FF]' : 'border-[#ffffff]'}`}>
                      {selectedOption === index && (
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      )}
                    </div>
                    <span className="font-inter text-base text-white">{option}</span>
                  </div>
                ))}
              </div>
              
              {/* Navigation button - right aligned */}
              <div className="flex justify-end">
                <button
                  onClick={handleNextQuestion}
                  disabled={selectedOption === null}
                  className={`px-8 py-3 rounded-xl font-inter text-base font-semibold transition-all duration-300 ${currentQuestionIndex < 19 
                    ? 'bg-[#3262FF] text-white hover:bg-[#2952FF] hover:scale-105' 
                    : 'bg-[#4CAF50] text-white hover:bg-[#3d8b40] hover:scale-105'} 
                    ${selectedOption === null ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {currentQuestionIndex < 19 ? 'Next question' : 'Submit assessment'}
                </button>
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

export default QuestionComponent;