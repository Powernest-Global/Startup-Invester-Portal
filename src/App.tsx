import React from 'react';
import { useState } from 'react';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import ForgotPasswordForm from './components/ForgotPasswordForm';
import RoleSelectionForm from './components/RoleSelectionForm';
import WelcomeBackPage from './components/WelcomeBackPage';
import BasicInfoForm from './components/BasicInfoForm';
import StartupProfileForm from './components/StartupProfileForm';
import DocumentUploadForm from './components/DocumentUploadForm';
import AddTeamForm from './components/AddTeamForm';
import AssessmentIntroduction from './components/AssessmentIntroduction';
import PsychologicalAssessment from './components/PsychologicalAssessment';
import CompletionPage from './components/CompletionPage';

type AppState = 'login' | 'signup' | 'forgot-password' | 'role-selection' | 'welcome-back' | 'basic-info' | 'startup-profile' | 'document-upload' | 'add-team' | 'assessment-intro' | 'assessment' | 'complete';

function App() {
  const [currentState, setCurrentState] = useState<AppState>('login');
  const [userData, setUserData] = useState<any>(null);

  const handleLoginSuccess = (user: any) => {
    setUserData(user);
    setCurrentState('welcome-back');
  };

  const handleSignUp = () => {
    setCurrentState('signup');
  };

  const handleForgotPassword = () => {
    setCurrentState('forgot-password');
  };

  const handleBackToLogin = () => {
    setCurrentState('login');
  };

  const handleSignUpSuccess = () => {
    setCurrentState('role-selection');
  };

  const handleRoleSelectionComplete = () => {
    setCurrentState('basic-info');
  };

  const handleProceedToApp = () => {
    setCurrentState('basic-info');
  };

  const handleBasicInfoNext = (data: any) => {
    console.log('Basic info data:', data);
    setCurrentState('startup-profile');
  };

  const handleBasicInfoBack = () => {
    setCurrentState('role-selection');
  };

  const handleStartupProfileNext = (data: any) => {
    console.log('Startup profile data:', data);
    setCurrentState('document-upload');
  };

  const handleStartupProfileBack = () => {
    setCurrentState('basic-info');
  };

  const handleDocumentUploadNext = (data: any) => {
    console.log('Document upload data:', data);
    setCurrentState('add-team');
  };

  const handleDocumentUploadBack = () => {
    setCurrentState('startup-profile');
  };

  const handleAddTeamNext = (data: any) => {
    console.log('Team data:', data);
    setCurrentState('assessment-intro');
  };

  const handleAddTeamBack = () => {
    setCurrentState('document-upload');
  };

  const handleStartAssessment = () => {
    setCurrentState('assessment');
  };

  const handleSkipAssessment = () => {
    setCurrentState('complete');
  };

  const handleAssessmentComplete = (answers: any) => {
    console.log('Assessment answers:', answers);
    setCurrentState('complete');
  };

  const handleGoToDashboard = () => {
    console.log('Redirecting to dashboard...');
    // In a real app, this would redirect to the main dashboard
  };
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
          />
        );
      case 'forgot-password':
        return (
          <ForgotPasswordForm 
            onBackToLogin={handleBackToLogin}
          />
        );
      case 'role-selection':
        return (
          <RoleSelectionForm 
            onComplete={handleRoleSelectionComplete}
          />
        );
      case 'welcome-back':
        return (
          <WelcomeBackPage 
            userData={userData}
            onProceedToApp={handleProceedToApp}
          />
        );
      case 'basic-info':
        return (
          <BasicInfoForm 
            onNext={handleBasicInfoNext}
            onBack={handleBasicInfoBack}
          />
        );
      case 'startup-profile':
        return (
          <StartupProfileForm 
            onNext={handleStartupProfileNext}
            onBack={handleStartupProfileBack}
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
            onGoToDashboard={handleGoToDashboard}
          />
        );
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

  return renderCurrentState();
}

export default App;