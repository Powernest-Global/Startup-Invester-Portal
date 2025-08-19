 import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

// Import all your separate component files
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import ForgotPasswordForm from './components/ForgotPasswordForm';
// import WelcomeBackPage from './components/WelcomeBackPage';
// import RoleSelectionForm from './components/RoleSelectionForm';
import BasicInfoForm from './components/BasicInfoForm';
import UserConfirmation from './components/Userconfirmation';
import QuestionComponent from './components/QuestionComponent';
import AssessmentComplete from './components/AssessmentComplete';
// Founder Flow Components
import FounderInitialProfileForm from './components/FounderInitialProfileForm';
import DocumentUploadForm from './components/DocumentUploadForm';
import AddTeamForm from './components/AddTeamForm';
import AssessmentIntroduction from './components/AssessmentIntroduction';
import PsychologicalAssessment from './components/PsychologicalAssessment';
import CompletionPage from './components/CompletionPage';

// Investor Flow Components
import StartupProfileForm from './components/StartupProfileForm';
import OnboardingInvestor from './components/OnboardingInvestor';

import Dashboard from './components/Dashboard';

// --- App State Definitions ---
type AppState =
  | 'login'
  | 'signup'
  | 'forgot-password'
  | 'welcome-back'
  | 'role-selection'
  | 'basic-info'
  | 'user-confirmation'
  // Founder Flow
  | 'founder-initial-profile'
  | 'document-upload'
  | 'add-team'
  | 'assessment-intro'
  | 'assessment'
  | 'complete'
  // Investor Flow
  | 'startup-profile'
  | 'investor-onboarding-success'
  | 'dashboard';

function AppContent() {
  const [currentState, setCurrentState] = useState<AppState>('login');
  const [userData, setUserData] = useState<any>(null);
  const navigate = useNavigate();

  // --- State Transition Handlers ---
  // const handleLoginSuccess = (user: any) => {
  //   setUserData(user);
  //   setCurrentState('welcome-back');
  //   navigate('/welcome-back');
  // };
    const handleLoginSuccess = (user: any) => {
     setUserData(user);
     setCurrentState('basic-info');
    navigate('/basic-info');
   };
  

  const handleSignUp = () => {
    setCurrentState('signup');
    navigate('/signup');
  };

  const handleForgotPassword = () => {
    setCurrentState('forgot-password');
    navigate('/forgot-password');
  };

  const handleBackToLogin = () => {
    setCurrentState('login');
    navigate('/');
  };

  // const handleSignUpSuccess = () => {
  //   setCurrentState('role-selection');
  //   navigate('/role-selection');
  // };

  const handleSignUpSuccess = () => {
    setCurrentState('basic-info');
    navigate('/basic-info');
  };

  const handleRoleSelectionComplete = () => {
    setCurrentState('basic-info');
    navigate('/basic-info');
  };

  const handleProceedToApp = () => {
    setCurrentState('basic-info');
    navigate('/basic-info');
  };

  const handleBasicInfoNext = (data: any) => {
    console.log('Basic info data:', data);
    setCurrentState('user-confirmation');
    navigate('/user-confirmation');
  };

  const handleBasicInfoBack = () => {
    setCurrentState('role-selection');
    navigate('/role-selection');
  };

  // --- User Confirmation Branching ---
  const handleUserConfirmationNext = (role: 'founder' | 'investor') => {
    if (role === 'founder') {
      setCurrentState('founder-initial-profile');
      navigate('/founder-initial-profile');
    } else if (role === 'investor') {
      setCurrentState('startup-profile');
      navigate('/startup-profile');
    }
  };

  const handleUserConfirmationBack = () => {
    setCurrentState('basic-info');
    navigate('/basic-info');
  };

  // --- Founder Flow Handlers ---
  const handleFounderInitialProfileNext = (data: any) => {
    console.log('Founder initial profile data:', data);
    setCurrentState('document-upload');
    navigate('/document-upload');
  };

  const handleFounderInitialProfileBack = () => {
    setCurrentState('user-confirmation');
    navigate('/user-confirmation');
  };

  const handleDocumentUploadNext = (data: any) => {
    console.log('Document upload data:', data);
    setCurrentState('add-team');
    navigate('/add-team');
  };

  const handleDocumentUploadBack = () => {
    setCurrentState('founder-initial-profile');
    navigate('/founder-initial-profile');
  };

  const handleAddTeamNext = (data: any) => {
    console.log('Team data:', data);
    setCurrentState('assessment-intro');
    navigate('/assessment-intro');
  };

  const handleAddTeamBack = () => {
    setCurrentState('document-upload');
    navigate('/document-upload');
  };

  const handleStartAssessment = () => {
    setCurrentState('assessment');
    navigate('/assessment');
  };

  const handleSkipAssessment = () => {
    setCurrentState('complete');
    navigate('/complete');
  };

  const handleAssessmentComplete = (answers: any) => {
    console.log('Assessment answers:', answers);
    setCurrentState('complete');
    navigate('/complete');
  };

  const handleCompletionGoToDashboard = () => {
    console.log('Redirecting to dashboard...');
    setCurrentState('dashboard');
    navigate('/dashboard');
  };

  // --- Investor Flow Handlers ---
  const handleInvestorOnboardingComplete = () => {
    setCurrentState('investor-onboarding-success');
    navigate('/investor-onboarding-success');
  };

  const handleInvestorOnboardingBack = () => {
    setCurrentState('user-confirmation');
    navigate('/user-confirmation');
  };

  const handleOnboardingInvestorComplete = () => {
    setCurrentState('dashboard');
    navigate('/dashboard');
  };

  const handleOnboardingInvestorBack = () => {
    setCurrentState('startup-profile');
    navigate('/startup-profile');
  };

  // --- Conditional Rendering Logic ---
  const renderCurrentState = () => {
    switch (currentState) {
      case 'login':
        return (
          <LoginForm
            onForgotPassword={handleForgotPassword}
            onSignUp={handleSignUp}
            onLoginSuccess={handleLoginSuccess}
          />
        );
      case 'signup':
        return (
          <SignUpForm
            onForgotPassword={handleForgotPassword}
            onSignUpSuccess={handleSignUpSuccess}
            onBackToLogin={handleBackToLogin}
          />
        );
      case 'forgot-password':
        return (
          <ForgotPasswordForm
            onBackToLogin={handleBackToLogin}
          />
        );
      // case 'role-selection':
      //   return (
      //     <RoleSelectionForm
      //       onComplete={handleRoleSelectionComplete}
      //       onBack={handleBackToLogin}
      //     />
      //   );
      // case 'welcome-back':
      //   return (
      //     <WelcomeBackPage
      //       userData={userData}
      //       onProceedToApp={handleProceedToApp}
      //     />
      //   );
      case 'basic-info':
        return (
          <BasicInfoForm
            onNext={handleBasicInfoNext}
            onBack={handleBasicInfoBack}
          />
        );
      case 'user-confirmation':
        return (
          <UserConfirmation
            onRoleSelect={handleUserConfirmationNext}
            onBack={handleUserConfirmationBack}
          />
        );
      case 'founder-initial-profile':
        return (
          <FounderInitialProfileForm
            onNext={handleFounderInitialProfileNext}
            onBack={handleFounderInitialProfileBack}
          />
        );
      case 'document-upload':
        return (
          <DocumentUploadForm
            onNext={handleDocumentUploadNext}
            onBack={handleDocumentUploadBack}
          />
        );
      case 'add-team':
        return (
          <AddTeamForm
            onNext={handleAddTeamNext}
            onBack={handleAddTeamBack}
          />
        );
      case 'assessment-intro':
        return (
          <AssessmentIntroduction
            onStartAssessment={handleStartAssessment}
            onSkip={handleSkipAssessment}
          />
        );
      case 'assessment':
        return (
          <PsychologicalAssessment
            onComplete={handleAssessmentComplete}
            onSkip={handleSkipAssessment}
          />
        );
      case 'complete':
        return (
          <CompletionPage
            onGoToDashboard={handleCompletionGoToDashboard}
          />
        );
      case 'startup-profile':
        return (
          <StartupProfileForm
            onCompleteInvestorFlow={handleInvestorOnboardingComplete}
            onBackInvestorFlow={handleInvestorOnboardingBack}
          />
        );
      case 'investor-onboarding-success':
        return (
          <OnboardingInvestor
            onNext={handleOnboardingInvestorComplete}
            onBack={handleOnboardingInvestorBack}
          />
        );
      case 'dashboard':
        return <Dashboard userData={userData} />;
      default:
        return (
          <LoginForm
            onForgotPassword={handleForgotPassword}
            onSignUp={handleSignUp}
            onLoginSuccess={handleLoginSuccess}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#05060F] text-white flex font-sans">
      {/* Background Gradient Ellipse */}
      <div className="absolute top-0 left-0 w-[721px] h-[721px] transform -translate-x-1/2 -translate-y-1/4 pointer-events-none">
        <div className="w-full h-full bg-radial-gradient opacity-50 blur-[47px]"></div>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {renderCurrentState()}
      </main>

      {/* Global Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Neulis+Sans:wght@400;600&display=swap');

        .font-sans {
            font-family: 'Inter', sans-serif;
        }
        .font-neulis-sans {
            font-family: 'Neulis Sans', sans-serif;
        }
        .bg-radial-gradient {
          background: radial-gradient(circle, #9898FF, #0000FF, #0606A9, #0C0C4A, #000000 70%);
        }
      `}</style>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="/signup" element={<AppContent />} />
        <Route path="/forgot-password" element={<AppContent />} />
        {/* <Route path="/welcome-back" element={<AppContent />} /> */}
        {/* <Route path="/role-selection" element={<AppContent />} /> */}
        <Route path="/basic-info" element={<AppContent />} />
        <Route path="/user-confirmation" element={<AppContent />} />
        <Route path="/founder-initial-profile" element={<AppContent />} />
        <Route path="/document-upload" element={<AppContent />} />
        <Route path="/add-team" element={<AppContent />} />
        <Route path="/assessment-intro" element={<AppContent />} />
        <Route path="/assessment" element={<AppContent />} />
        <Route path="/complete" element={<AppContent />} />
        <Route path="/startup-profile" element={<AppContent />} />
        <Route path="/investor-onboarding-success" element={<AppContent />} />
        
        <Route path="/questions" element={<QuestionComponent userType="founder" />} />
<Route path="/assessment-complete" element={<AssessmentComplete userType="investor" />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}