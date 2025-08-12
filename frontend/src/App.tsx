

// App.tsx code
import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import ForgotPasswordForm from './components/ForgotPasswordForm';
import WelcomeBackPage from './components/WelcomeBackPage';
import RoleSelectionForm from './components/RoleSelectionForm';
import BasicInfoForm from './components/BasicInfoForm';
import UserConfirmation from './components/Userconfirmation';
import FounderInitialProfileForm from './components/FounderInitialProfileForm';
import OnboardingFounder from './components/OnboardingFounder';
import StartupProfileForm from './components/StartupProfileForm';
import OnboardingInvestor from './components/OnboardingInvestor';
import Dashboard from './components/Dashboard';

// --- Main App State Definitions ---
type AppState =
  | 'login'
  | 'signup'
  | 'forgot-password'
  | 'welcome-back'
  | 'role-selection'
  | 'basic-info'
  | 'user-confirmation'
  | 'founder-initial-profile'
  | 'founder-onboarding'
  | 'startup-profile'
  | 'investor-onboarding-success'
  | 'dashboard';

// --- Main App Component ---
export default function App() {
  const [currentState, setCurrentState] = useState<AppState>('login');
  const [userData, setUserData] = useState<any>(null);

  // --- State Transition Handlers ---
  const handleLoginSuccess = (user: any) => {
    setUserData(user);
    setCurrentState('welcome-back');
  };
  const handleSignUp = () => setCurrentState('signup');
  const handleForgotPassword = () => setCurrentState('forgot-password');
  const handleBackToLogin = () => setCurrentState('login');
  const handleSignUpSuccess = () => setCurrentState('role-selection');
  const handleRoleSelectionComplete = () => setCurrentState('basic-info');
  const handleProceedToApp = () => setCurrentState('basic-info');
  const handleBasicInfoNext = (data: any) => setCurrentState('user-confirmation');
  const handleBasicInfoBack = () => setCurrentState('role-selection');
  const handleUserConfirmationNext = (role: 'founder' | 'investor') => {
    if (role === 'founder') {
      setCurrentState('founder-initial-profile');
    } else if (role === 'investor') {
      setCurrentState('startup-profile');
    }
  };
  const handleUserConfirmationBack = () => setCurrentState('basic-info');

  // Founder Flow Handlers
  const handleFounderInitialProfileNext = () => {
    setCurrentState('founder-onboarding');
  };
  const handleOnboardingFounderNext = () => {
    setCurrentState('dashboard');
  };
  const handleFounderInitialProfileBack = () => setCurrentState('user-confirmation');

  // Investor Flow Handlers
  const handleInvestorOnboardingComplete = () => setCurrentState('investor-onboarding-success');
  const handleInvestorOnboardingBack = () => setCurrentState('user-confirmation');
  const handleOnboardingInvestorComplete = () => setCurrentState('dashboard');
  const handleOnboardingInvestorBack = () => setCurrentState('startup-profile');

  // Conditional Rendering Logic
  const renderCurrentState = () => {
    switch (currentState) {
      case 'login': return <LoginForm onForgotPassword={handleForgotPassword} onSignUp={handleSignUp} onLoginSuccess={handleLoginSuccess} />;
      case 'signup': return <SignUpForm onSignUpSuccess={handleSignUpSuccess} onBackToLogin={handleBackToLogin} />;
      case 'forgot-password': return <ForgotPasswordForm onBackToLogin={handleBackToLogin} />;
      case 'role-selection': return <RoleSelectionForm onComplete={handleRoleSelectionComplete} onBack={handleBackToLogin} />;
      case 'welcome-back': return <WelcomeBackPage onProceedToApp={handleProceedToApp} userData={userData} />;
      case 'basic-info': return <BasicInfoForm onNext={handleBasicInfoNext} onBack={handleBasicInfoBack} />;
      case 'user-confirmation': return <UserConfirmation onRoleSelect={handleUserConfirmationNext} onBack={handleUserConfirmationBack} />;
      case 'founder-initial-profile': return <FounderInitialProfileForm onNext={handleFounderInitialProfileNext} onBack={handleFounderInitialProfileBack} />;
      case 'founder-onboarding': return <OnboardingFounder onNext={handleOnboardingFounderNext} onBack={handleFounderInitialProfileBack} />;
      case 'startup-profile': return <StartupProfileForm onCompleteInvestorFlow={handleInvestorOnboardingComplete} onBackInvestorFlow={handleInvestorOnboardingBack} />;
      case 'investor-onboarding-success': return <OnboardingInvestor onNext={handleOnboardingInvestorComplete} onBack={handleOnboardingInvestorBack} />;
      case 'dashboard': return <Dashboard userData={userData} />;
      default: return <LoginForm onForgotPassword={handleForgotPassword} onSignUp={handleSignUp} onLoginSuccess={handleLoginSuccess} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#05060F] text-white flex font-sans">
      <div className="absolute top-0 left-0 w-[721px] h-[721px] transform -translate-x-1/2 -translate-y-1/4 pointer-events-none">
        <div className="w-full h-full bg-radial-gradient opacity-50 blur-[47px]"></div>
      </div>
      <main className="flex-1 overflow-y-auto">
        {renderCurrentState()}
      </main>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        .font-sans { font-family: 'Inter', sans-serif; }
        .bg-radial-gradient { background: radial-gradient(circle, #9898FF, #0000FF, #0606A9, #0C0C4A, #000000 70%); }
      `}</style>
    </div>
  );
}
