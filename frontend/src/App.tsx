// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import SignUp from'./components/SignUp';
// import './App.css';
// import './index.css';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<SignUp />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
// Dashboard code

// App.tsx
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import UserConfirmation from './components/Userconfirmation';

// import Founder from './components/Fonder/FounderPage';
// import Investor from './components/Investor/InvestorPage';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<UserConfirmation />} />
//         <Route path="/founder" element={<Founder />} />
//         <Route path="/investor" element={<Investor />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// OLD APP.TSX CODE


// import { useState } from 'react';
// import LoginForm from './components/LoginForm';
// import SignUpForm from './components/SignUpForm';
// import Dashboard from './components/Dashboard';
// import ForgotPasswordForm from './components/ForgotPasswordForm';
// import RoleSelectionForm from './components/RoleSelectionForm';
// import WelcomeBackPage from './components/WelcomeBackPage';
// import BasicInfoForm from './components/BasicInfoForm';
// import UserConfirmation from './components/Userconfirmation';
// import StartupProfileForm from './components/StartupProfileForm';
// import DocumentUploadForm from './components/DocumentUploadForm';
// import AddTeamForm from './components/AddTeamForm';
// import AssessmentIntroduction from './components/AssessmentIntroduction';
// import PsychologicalAssessment from './components/PsychologicalAssessment';
// import CompletionPage from './components/CompletionPage';
// import OnboardingInvestor from './components/OnboardingInvestor';

// type AppState = 'login' | 'signup' | 'forgot-password' | 'role-selection' | 'welcome-back' | 'basic-info'  | 'user-confirmation'  | 'startup-profile' | 'oonboard-investor'|'document-upload' | 'add-team' | 'assessment-intro' | 'assessment' | 'complete'|'dashboard';

// function App() {
//   const [currentState, setCurrentState] = useState<AppState>('login');
//   const [userData, setUserData] = useState<any>(null);

//   const handleLoginSuccess = (user: any) => {
//     setUserData(user);
//     setCurrentState('welcome-back');
//   };

//   const handleSignUp = () => {
//     setCurrentState('signup');
//   };

//   const handleForgotPassword = () => {
//     setCurrentState('forgot-password');
//   };

//   const handleBackToLogin = () => {
//     setCurrentState('login');
//   };

//   const handleSignUpSuccess = () => {
//     setCurrentState('role-selection');
//   };

//   const handleRoleSelectionComplete = () => {
//     setCurrentState('basic-info');
//   };

//   const handleProceedToApp = () => {
//     //  setCurrentState('basic-info');
//       // setCurrentState('dashboard');
//       setCurrentState('user-confirmation');
//   };

//   const handleBasicInfoNext = (data: any) => {
//     console.log('Basic info data:', data);
//     //  setCurrentState('startup-profile');
//      setCurrentState('user-confirmation');

//   };
//   const handleUserConfirmationNext = () => {
//   setCurrentState('startup-profile');
// };

// const handleUserConfirmationBack = () => {
//   setCurrentState('basic-info');
// };

//   const handleBasicInfoBack = () => {
//     setCurrentState('role-selection');
//   };



//   const handleStartupProfileNext = (data: any) => {
//     console.log('Startup profile data:', data);
//     setCurrentState('document-upload');
//   };

//   const handleStartupProfileBack = () => {
//     setCurrentState('basic-info');
//   };

//   const handleDocumentUploadNext = (data: any) => {
//     console.log('Document upload data:', data);
//     setCurrentState('add-team');
//   };

//   const handleDocumentUploadBack = () => {
//     setCurrentState('startup-profile');
//   };

//   const handleAddTeamNext = (data: any) => {
//     console.log('Team data:', data);
//     setCurrentState('assessment-intro');
//   };

//   const handleAddTeamBack = () => {
//     setCurrentState('document-upload');
//   };

//   const handleStartAssessment = () => {
//     setCurrentState('assessment');
//   };

//   const handleSkipAssessment = () => {
//     setCurrentState('complete');
//   };

//   const handleAssessmentComplete = (answers: any) => {
//     console.log('Assessment answers:', answers);
//     setCurrentState('complete');
//   };

//   const handleGoToDashboard = () => {
//     console.log('Redirecting to dashboard...');
//     setCurrentState('dashboard'); 
//   };
//   const renderCurrentState = () => {
//     switch (currentState) {
//       case 'login':
//         return (
//           <LoginForm 
//             onForgotPassword={handleForgotPassword}
//              onSignUp={handleSignUp}
          
//             onLoginSuccess={handleLoginSuccess}
//           />
//         );
//       case 'signup':
//         return (
//           <SignUpForm 
//             onForgotPassword={handleForgotPassword}
//             onSignUpSuccess={handleSignUpSuccess}
           
//           />
//         );
//       case 'forgot-password':
//         return (
//           <ForgotPasswordForm 
//             onBackToLogin={handleBackToLogin}
//           />
//         );
         
//       case 'role-selection':
//         return (
//           <RoleSelectionForm 
//             onComplete={handleRoleSelectionComplete}
//           />
//         );
//       case 'welcome-back':
//         return (
//           <WelcomeBackPage 
//             userData={userData}
//             onProceedToApp={handleProceedToApp}
//           />
//         );
//       case 'basic-info':
//         return (
//           <BasicInfoForm 
//             onNext={handleBasicInfoNext}
//             onBack={handleBasicInfoBack}
//           />
//         );
     

//        case 'user-confirmation':
//   return (
//     <UserConfirmation
//   onRoleSelect={(role) => {
//     if (role === 'founder') {
//       setCurrentState('onboard-investor'); // or whatever next step
//     } else {
//       setCurrentState('startup-profile'); // or another relevant state
//     }
//   }}
// />
//   );

//       case 'startup-profile':
//         return (
//           <StartupProfileForm 
//             onNext={handleStartupProfileNext}
//             onBack={handleStartupProfileBack}
//           />
//         );
//         case 'oonboard-investor':
//           return(
//             <OnboardingInvestor
//             onNext ={handleBackToLogin}
//             onBack={handleStartupProfileBack}
//             />
//           )
//       case 'document-upload':
//         return (
//           <DocumentUploadForm 
//             onNext={handleDocumentUploadNext}
//             onBack={handleDocumentUploadBack}
//           />
//         );
//       case 'add-team':
//         return (
//           <AddTeamForm 
//             onNext={handleAddTeamNext}
//             onBack={handleAddTeamBack}
//           />
//         );
//       case 'assessment-intro':
//         return (
//           <AssessmentIntroduction 
//             onStartAssessment={handleStartAssessment}
//             onSkip={handleSkipAssessment}
//           />
//         );
//       case 'assessment':
//         return (
//           <PsychologicalAssessment 
//             onComplete={handleAssessmentComplete}
//             onSkip={handleSkipAssessment}
//           />
//         );
//       case 'complete':
//         return (
//           <CompletionPage 
//             onGoToDashboard={handleGoToDashboard}
//           />
//         );
//         case 'dashboard':
//       return <Dashboard userData={userData} />;
//       default:
//         return (
//           <LoginForm 
//             onForgotPassword={handleForgotPassword}
//             onSignUp={handleSignUp}
//             onLoginSuccess={handleLoginSuccess}
//           />
//         );
//     }
//   };

//   return renderCurrentState();
// }

// export default App;
// import { useState } from 'react';

// // Import all your separate component files
// import LoginForm from './components/LoginForm';
// import SignUpForm from './components/SignUpForm';
// import Dashboard from './components/Dashboard';
// import ForgotPasswordForm from './components/ForgotPasswordForm';
// import RoleSelectionForm from './components/RoleSelectionForm';
// import WelcomeBackPage from './components/WelcomeBackPage';
// import BasicInfoForm from './components/BasicInfoForm';
// import UserConfirmation from './components/Userconfirmation'; // Corrected casing
// import StartupProfileForm from './components/StartupProfileForm';
// import DocumentUploadForm from './components/DocumentUploadForm'; // New import
// import AddTeamForm from './components/AddTeamForm'; // New import
// import AssessmentIntroduction from './components/AssessmentIntroduction'; // New import
// import PsychologicalAssessment from './components/PsychologicalAssessment'; // New import
// import CompletionPage from './components/CompletionPage'; // New import
// import OnboardingInvestor from './components/OnboardingInvestor'; // New import

// type AppState =
//   | 'login'
//   | 'signup'
//   | 'forgot-password'
//   | 'role-selection'
//   | 'welcome-back'
//   | 'basic-info'
//   | 'user-confirmation'
//   | 'startup-profile'
//   | 'oonboard-investor' // This state will render OnboardingInvestor component
//   | 'document-upload'
//   | 'add-team'
//   | 'assessment-intro'
//   | 'assessment'
//   | 'complete'
//   | 'dashboard';

// function App() {
//   const [currentState, setCurrentState] = useState<AppState>('login');
//   const [userData, setUserData] = useState<any>(null);

//   const handleLoginSuccess = (user: any) => {
//     setUserData(user);
//     setCurrentState('welcome-back');
//   };

//   const handleSignUp = () => {
//     setCurrentState('signup');
//   };

//   const handleForgotPassword = () => {
//     setCurrentState('forgot-password');
//   };

//   const handleBackToLogin = () => {
//     setCurrentState('login');
//   };

//   const handleSignUpSuccess = () => {
//     setCurrentState('role-selection');
//   };

//   const handleRoleSelectionComplete = () => {
//     setCurrentState('basic-info');
//   };

//   const handleProceedToApp = () => {
//     setCurrentState('user-confirmation');
//   };

//   const handleBasicInfoNext = (data: any) => {
//     console.log('Basic info data:', data);
//     setCurrentState('user-confirmation');
//   };

//   const handleBasicInfoBack = () => {
//     setCurrentState('role-selection');
//   };

//   const handleUserConfirmationNext = (role: 'founder' | 'investor') => {
//     // Corrected branching logic based on role
//     if (role === 'founder') {
//       setCurrentState('startup-profile');
//     } else if (role === 'investor') {
//       setCurrentState('oonboard-investor');
//     }
//   };

//   const handleUserConfirmationBack = () => {
//     setCurrentState('basic-info');
//   };

//   const handleStartupProfileNext = (data: any) => {
//     console.log('Startup profile data:', data);
//     setCurrentState('document-upload');
//   };

//   const handleStartupProfileBack = () => {
//     setCurrentState('user-confirmation'); // Back to user confirmation after role selection
//   };

//   const handleDocumentUploadNext = (data: any) => {
//     console.log('Document upload data:', data);
//     setCurrentState('add-team');
//   };

//   const handleDocumentUploadBack = () => {
//     setCurrentState('startup-profile');
//   };

//   const handleAddTeamNext = (data: any) => {
//     console.log('Team data:', data);
//     setCurrentState('assessment-intro');
//   };

//   const handleAddTeamBack = () => {
//     setCurrentState('document-upload');
//   };

//   const handleStartAssessment = () => {
//     setCurrentState('assessment');
//   };

//   const handleSkipAssessment = () => {
//     setCurrentState('complete');
//   };

//   const handleAssessmentComplete = (answers: any) => {
//     console.log('Assessment answers:', answers);
//     setCurrentState('complete');
//   };

//   const handleGoToDashboard = () => {
//     console.log('Redirecting to dashboard...');
//     setCurrentState('dashboard');
//   };

//   // For OnboardingInvestor (your 'oonboard-investor' state)
//   const handleOnboardingInvestorComplete = () => {
//     setCurrentState('dashboard'); // After investor onboarding, go to dashboard
//   };

//   const handleOnboardingInvestorBack = () => {
//     setCurrentState('user-confirmation'); // Allow investor to go back to role selection/user confirmation
//   };


//   const renderCurrentState = () => {
//     switch (currentState) {
//       case 'login':
//         return (
//           <LoginForm
//             onForgotPassword={handleForgotPassword}
//             onSignUp={handleSignUp}
//             onLoginSuccess={handleLoginSuccess}
//           />
//         );
//       case 'signup':
//         return (
//           <SignUpForm
//             onForgotPassword={handleForgotPassword} // Assuming signup form might have this link
//             onSignUpSuccess={handleSignUpSuccess}
//             onBackToLogin={handleBackToLogin} // Added for completeness
//           />
//         );
//       case 'forgot-password':
//         return (
//           <ForgotPasswordForm
//             onBackToLogin={handleBackToLogin}
//           />
//         );

//       case 'role-selection':
//         return (
//           <RoleSelectionForm
//             onComplete={handleRoleSelectionComplete}
//             onBack={handleBackToLogin} // Added back for role selection
//           />
//         );
//       case 'welcome-back':
//         return (
//           <WelcomeBackPage
//             userData={userData}
//             onProceedToApp={handleProceedToApp}
//           />
//         );
//       case 'basic-info':
//         return (
//           <BasicInfoForm
//             onNext={handleBasicInfoNext}
//             onBack={handleBasicInfoBack}
//           />
//         );

//       case 'user-confirmation':
//         return (
//           <UserConfirmation
//             onRoleSelect={handleUserConfirmationNext} // Pass the new handler
//             onBack={handleUserConfirmationBack}
//           />
//         );

//       case 'startup-profile':
//         return (
//           <StartupProfileForm
//             onNext={handleStartupProfileNext}
//             onBack={handleStartupProfileBack}
//           />
//         );
//       case 'oonboard-investor': // This state renders the OnboardingInvestor component
//         return (
//           <OnboardingInvestor
//             onNext={handleOnboardingInvestorComplete} // Changed to go to dashboard
//             onBack={handleOnboardingInvestorBack} // Changed to go back to user confirmation
//           />
//         );
//       case 'document-upload':
//         return (
//           <DocumentUploadForm
//             onNext={handleDocumentUploadNext}
//             onBack={handleDocumentUploadBack}
//           />
//         );
//       case 'add-team':
//         return (
//           <AddTeamForm
//             onNext={handleAddTeamNext}
//             onBack={handleAddTeamBack}
//           />
//         );
//       case 'assessment-intro':
//         return (
//           <AssessmentIntroduction
//             onStartAssessment={handleStartAssessment}
//             onSkip={handleSkipAssessment}
//           />
//         );
//       case 'assessment':
//         return (
//           <PsychologicalAssessment
//             onComplete={handleAssessmentComplete}
//             onSkip={handleSkipAssessment}
//           />
//         );
//       case 'complete':
//         return (
//           <CompletionPage
//             onGoToDashboard={handleGoToDashboard}
//           />
//         );
//       case 'dashboard':
//         return <Dashboard userData={userData} />;
//       default:
//         return (
//           <LoginForm
//             onForgotPassword={handleForgotPassword}
//             onSignUp={handleSignUp}
//             onLoginSuccess={handleLoginSuccess}
//           />
//         );
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#05060F] text-white flex font-sans">
//       {/* Background Gradient Ellipse (if you want to keep it) */}
//       <div className="absolute top-0 left-0 w-[721px] h-[721px] transform -translate-x-1/2 -translate-y-1/4 pointer-events-none">
//         <div className="w-full h-full bg-radial-gradient opacity-50 blur-[47px]"></div>
//       </div>

//       {/* Main Content */}
//       <main className="flex-1 overflow-y-auto">
//         {renderCurrentState()}
//       </main>

//       {/* Global Styles */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
//         @import url('https://fonts.googleapis.com/css2?family=Neulis+Sans:wght@400;600&display=swap');

//         .font-sans {
//             font-family: 'Inter', sans-serif;
//         }
//         .font-neulis-sans {
//             font-family: 'Neulis Sans', sans-serif;
//         }
//         .bg-radial-gradient {
//           background: radial-gradient(circle, #9898FF, #0000FF, #0606A9, #0C0C4A, #000000 70%);
//         }
//       `}</style>
//     </div>
//   );
// }

// export default App;

// import { useState } from 'react';

// // Import all your separate component files
// import LoginForm from './components/LoginForm';
// import SignUpForm from './components/SignUpForm';
// import Dashboard from './components/Dashboard';
// import ForgotPasswordForm from './components/ForgotPasswordForm';
// import RoleSelectionForm from './components/RoleSelectionForm';
// import WelcomeBackPage from './components/WelcomeBackPage';
// import BasicInfoForm from './components/BasicInfoForm';
// import UserConfirmation from './components/Userconfirmation'; // Corrected casing
// import StartupProfileForm from './components/StartupProfileForm';
// import DocumentUploadForm from './components/DocumentUploadForm'; // New import
// import AddTeamForm from './components/AddTeamForm'; // New import
// import AssessmentIntroduction from './components/AssessmentIntroduction'; // New import
// import PsychologicalAssessment from './components/PsychologicalAssessment'; // New import
// import CompletionPage from './components/CompletionPage'; // New import
// import OnboardingInvestor from './components/OnboardingInvestor'; // New import

// type AppState =
//   | 'login'
//   | 'signup'
//   | 'forgot-password'
//   | 'role-selection'
//   | 'welcome-back'
//   | 'basic-info'
//   | 'user-confirmation'
//   | 'startup-profile'
//   | 'oonboard-investor' // This state will render OnboardingInvestor component
//   | 'document-upload'
//   | 'add-team'
//   | 'assessment-intro'
//   | 'assessment'
//   | 'complete'
//   | 'dashboard';

// function App() {
//   const [currentState, setCurrentState] = useState<AppState>('login');
//   const [userData, setUserData] = useState<any>(null);

//   const handleLoginSuccess = (user: any) => {
//     setUserData(user);
//     setCurrentState('welcome-back');
//   };

//   const handleSignUp = () => {
//     setCurrentState('signup');
//   };

//   const handleForgotPassword = () => {
//     setCurrentState('forgot-password');
//   };

//   const handleBackToLogin = () => {
//     setCurrentState('login');
//   };

//   const handleSignUpSuccess = () => {
//     setCurrentState('role-selection');
//   };

//   const handleRoleSelectionComplete = () => {
//     setCurrentState('basic-info');
//   };

//   const handleProceedToApp = () => {
//     // FIX: After welcome-back, go to basic-info (Complete Profile)
//     setCurrentState('basic-info');
//   };

//   const handleBasicInfoNext = (data: any) => {
//     console.log('Basic info data:', data);
//     setCurrentState('user-confirmation');
//   };

//   const handleBasicInfoBack = () => {
//     setCurrentState('role-selection');
//   };

//   const handleUserConfirmationNext = (role: 'founder' | 'investor') => {
//     // Corrected branching logic based on role
//     if (role === 'founder') {
//       setCurrentState('startup-profile');
//     } else if (role === 'investor') {
//       setCurrentState('oonboard-investor');
//     }
//   };

//   const handleUserConfirmationBack = () => {
//     setCurrentState('basic-info');
//   };

//   const handleStartupProfileNext = (data: any) => {
//     console.log('Startup profile data:', data);
//     setCurrentState('document-upload');
//   };

//   const handleStartupProfileBack = () => {
//     setCurrentState('user-confirmation'); // Back to user confirmation after role selection
//   };

//   const handleDocumentUploadNext = (data: any) => {
//     console.log('Document upload data:', data);
//     setCurrentState('add-team');
//   };

//   const handleDocumentUploadBack = () => {
//     setCurrentState('startup-profile');
//   };

//   const handleAddTeamNext = (data: any) => {
//     console.log('Team data:', data);
//     setCurrentState('assessment-intro');
//   };

//   const handleAddTeamBack = () => {
//     setCurrentState('document-upload');
//   };

//   const handleStartAssessment = () => {
//     setCurrentState('assessment');
//   };

//   const handleSkipAssessment = () => {
//     setCurrentState('complete');
//   };

//   const handleAssessmentComplete = (answers: any) => {
//     console.log('Assessment answers:', answers);
//     setCurrentState('complete');
//   };

//   const handleGoToDashboard = () => {
//     console.log('Redirecting to dashboard...');
//     setCurrentState('dashboard');
//   };

//   // For OnboardingInvestor (your 'oonboard-investor' state)
//   const handleOnboardingInvestorComplete = () => {
//     setCurrentState('dashboard'); // After investor onboarding, go to dashboard
//   };

//   const handleOnboardingInvestorBack = () => {
//     setCurrentState('user-confirmation'); // Allow investor to go back to role selection/user confirmation
//   };


//   const renderCurrentState = () => {
//     switch (currentState) {
//       case 'login':
//         return (
//           <LoginForm
//             onForgotPassword={handleForgotPassword}
//             onSignUp={handleSignUp}
//             onLoginSuccess={handleLoginSuccess}
//           />
//         );
//       case 'signup':
//         return (
//           <SignUpForm
//             onForgotPassword={handleForgotPassword} // Assuming signup form might have this link
//             onSignUpSuccess={handleSignUpSuccess}
//             onBackToLogin={handleBackToLogin} // Added for completeness
//           />
//         );
//       case 'forgot-password':
//         return (
//           <ForgotPasswordForm
//             onBackToLogin={handleBackToLogin}
//           />
//         );

//       case 'role-selection':
//         return (
//           <RoleSelectionForm
//             onComplete={handleRoleSelectionComplete}
//             onBack={handleBackToLogin} // Added back for role selection
//           />
//         );
//       case 'welcome-back':
//         return (
//           <WelcomeBackPage
//             userData={userData}
//             onProceedToApp={handleProceedToApp}
//           />
//         );
//       case 'basic-info':
//         return (
//           <BasicInfoForm
//             onNext={handleBasicInfoNext}
//             onBack={handleBasicInfoBack}
//           />
//         );

//       case 'user-confirmation':
//         return (
//           <UserConfirmation
//             onRoleSelect={handleUserConfirmationNext} // Pass the new handler
//             onBack={handleUserConfirmationBack}
//           />
//         );

//       case 'startup-profile':
//         return (
//           <StartupProfileForm
//             onNext={handleStartupProfileNext}
//             onBack={handleStartupProfileBack}
//           />
//         );
//       case 'oonboard-investor': // This state renders the OnboardingInvestor component
//         return (
//           <OnboardingInvestor
//             onNext={handleOnboardingInvestorComplete} // Changed to go to dashboard
//             onBack={handleOnboardingInvestorBack} // Changed to go back to user confirmation
//           />
//         );
//       case 'document-upload':
//         return (
//           <DocumentUploadForm
//             onNext={handleDocumentUploadNext}
//             onBack={handleDocumentUploadBack}
//           />
//         );
//       case 'add-team':
//         return (
//           <AddTeamForm
//             onNext={handleAddTeamNext}
//             onBack={handleAddTeamBack}
//           />
//         );
//       case 'assessment-intro':
//         return (
//           <AssessmentIntroduction
//             onStartAssessment={handleStartAssessment}
//             onSkip={handleSkipAssessment}
//           />
//         );
//       case 'assessment':
//         return (
//           <PsychologicalAssessment
//             onComplete={handleAssessmentComplete}
//             onSkip={handleSkipAssessment}
//           />
//         );
//       case 'complete':
//         return (
//           <CompletionPage
//             onGoToDashboard={handleGoToDashboard}
//           />
//         );
//       case 'dashboard':
//         return <Dashboard userData={userData} />;
//       default:
//         return (
//           <LoginForm
//             onForgotPassword={handleForgotPassword}
//             onSignUp={handleSignUp}
//             onLoginSuccess={handleLoginSuccess}
//           />
//         );
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#05060F] text-white flex font-sans">
//       {/* Background Gradient Ellipse (if you want to keep it) */}
//       <div className="absolute top-0 left-0 w-[721px] h-[721px] transform -translate-x-1/2 -translate-y-1/4 pointer-events-none">
//         <div className="w-full h-full bg-radial-gradient opacity-50 blur-[47px]"></div>
//       </div>

//       {/* Main Content */}
//       <main className="flex-1 overflow-y-auto">
//         {renderCurrentState()}
//       </main>

//       {/* Global Styles */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
//         @import url('https://fonts.googleapis.com/css2?family=Neulis+Sans:wght@400;600&display=swap');

//         .font-sans {
//             font-family: 'Inter', sans-serif;
//         }
//         .font-neulis-sans {
//             font-family: 'Neulis Sans', sans-serif;
//         }
//         .bg-radial-gradient {
//           background: radial-gradient(circle, #9898FF, #0000FF, #0606A9, #0C0C4A, #000000 70%);
//         }
//       `}</style>
//     </div>
//   );
// }

// export default App;
import { useState } from 'react';
 

// Import all your separate component files
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import ForgotPasswordForm from './components/ForgotPasswordForm';
import WelcomeBackPage from './components/WelcomeBackPage';
import RoleSelectionForm from './components/RoleSelectionForm';
import BasicInfoForm from './components/BasicInfoForm';
import UserConfirmation from './components/Userconfirmation';

// Founder Flow Components
 import FounderInitialProfileForm from './components/FounderInitialProfileForm';
import DocumentUploadForm from './components/DocumentUploadForm';
import AddTeamForm from './components/AddTeamForm';
import AssessmentIntroduction from './components/AssessmentIntroduction';
import PsychologicalAssessment from './components/PsychologicalAssessment'; // Corrected component name to match common practice
import CompletionPage from './components/CompletionPage';

// Investor Flow Components
import StartupProfileForm from './components/StartupProfileForm'; // This component will internally manage the 3 investor steps
import OnboardingInvestor from './components/OnboardingInvestor'; // This is the investor success page

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
  | 'founder-initial-profile' // First page for Founder after UserConfirmation
  | 'document-upload'
  | 'add-team'
  | 'assessment-intro'
  | 'assessment'
  | 'complete'
  // Investor Flow
  | 'startup-profile' // This state now specifically means the multi-step investor form (StartupProfileForm)
  | 'investor-onboarding-success' // Success page for Investor (OnboardingInvestor)
  | 'dashboard';

// --- Main App Component ---
export default function App() {
  const [currentState, setCurrentState] = useState<AppState>('login');
  const [userData, setUserData] = useState<any>(null); // To store user data after login/signup

  // --- State Transition Handlers ---
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
    // After welcome-back, go to basic-info (Complete Profile)
    setCurrentState('basic-info');
  };

  const handleBasicInfoNext = (data: any) => {
    console.log('Basic info data:', data);
    setCurrentState('user-confirmation');
  };

  const handleBasicInfoBack = () => {
    setCurrentState('role-selection');
  };

  // --- User Confirmation Branching ---
  const handleUserConfirmationNext = (role: 'founder' | 'investor') => {
    if (role === 'founder') {
      setCurrentState('founder-initial-profile'); // Founder path
    } else if (role === 'investor') {
      setCurrentState('startup-profile'); // Investor path (multi-step form)
    }
  };

  const handleUserConfirmationBack = () => {
    setCurrentState('basic-info');
  };

  // --- Founder Flow Handlers ---
  const handleFounderInitialProfileNext = (data: any) => {
    console.log('Founder initial profile data:', data);
    setCurrentState('document-upload');
  };

  const handleFounderInitialProfileBack = () => {
    setCurrentState('user-confirmation');
  };

  const handleDocumentUploadNext = (data: any) => {
    console.log('Document upload data:', data);
    setCurrentState('add-team');
  };

  const handleDocumentUploadBack = () => {
    setCurrentState('founder-initial-profile'); // Back to founder's first page
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

  const handleCompletionGoToDashboard = () => {
    console.log('Redirecting to dashboard...');
    setCurrentState('dashboard');
  };

  // --- Investor Flow Handlers (called by StartupProfileForm) ---
  const handleInvestorOnboardingComplete = () => {
    setCurrentState('investor-onboarding-success'); // Go to investor success page
  };

  const handleInvestorOnboardingBack = () => {
    setCurrentState('user-confirmation'); // Go back to user confirmation from investor flow start
  };

  // For OnboardingInvestor (Investor Success Page)
  const handleOnboardingInvestorComplete = () => {
    setCurrentState('dashboard'); // After investor onboarding, go to dashboard
  };

  const handleOnboardingInvestorBack = () => {
    setCurrentState('startup-profile'); // Allow investor to go back to the multi-step investor form
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
      case 'role-selection':
        return (
          <RoleSelectionForm
            onComplete={handleRoleSelectionComplete}
            onBack={handleBackToLogin}
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
      case 'user-confirmation':
        return (
          <UserConfirmation
            onRoleSelect={handleUserConfirmationNext}
            onBack={handleUserConfirmationBack}
          />
        );

      // --- Founder Flow Renders ---
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

      // --- Investor Flow Renders ---
      case 'startup-profile': // This now renders StartupProfileForm for Investor multi-step
        return (
          <StartupProfileForm
            onCompleteInvestorFlow={handleInvestorOnboardingComplete} // When investor flow inside StartupProfileForm is done
            onBackInvestorFlow={handleInvestorOnboardingBack} // When investor wants to go back from StartupProfileForm
          />
        );
      case 'investor-onboarding-success': // This renders the investor success page
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
      {/* Background Gradient Ellipse (if you want to keep it) */}
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
