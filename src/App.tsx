import { useState } from "react";

// --- Auth Components ---
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import ForgotPasswordForm from "./components/ForgotPasswordForm";
import WelcomeBackPage from "./components/WelcomeBackPage";
import RoleSelectionForm from "./components/RoleSelectionForm";
import BasicInfoForm from "./components/BasicInfoForm";
import UserConfirmation from "./components/Userconfirmation";

// --- Founder Flow ---
import FounderInitialProfileForm from "./components/FounderInitialProfileForm";
import DocumentUploadForm from "./components/DocumentUploadForm";
import AddTeamForm from "./components/AddTeamForm";
import AssessmentIntroduction from "./components/AssessmentIntroduction";
import PsychologicalAssessment from "./components/PsychologicalAssessment";
import CompletionPage from "./components/CompletionPage";

// --- Investor Flow ---
import StartupProfileForm from "./components/StartupProfileForm";
import OnboardingInvestor from "./components/OnboardingInvestor";

// --- App / Dashboard ---
import Dashboard from "./components/Dashboard";

// --- App State Type ---
type AppState =
  | "login"
  | "signup"
  | "forgot-password"
  | "welcome-back"
  | "role-selection"
  | "basic-info"
  | "user-confirmation"
  // Founder Flow
  | "founder-initial-profile"
  | "document-upload"
  | "add-team"
  | "assessment-intro"
  | "assessment"
  | "complete"
  // Investor Flow
  | "startup-profile"
  | "investor-onboarding-success"
  | "dashboard";

// --- User Data Type ---
interface UserData {
  name?: string;
  email?: string;
  [key: string]: any;
}

export default function App() {
  const [currentState, setCurrentState] = useState<AppState>("login");
  const [userData, setUserData] = useState<UserData | null>(null);

  // --- Auth Handlers ---
  const handleLoginSuccess = (user: UserData) => {
    setUserData(user);
    setCurrentState("welcome-back");
  };

  const handleSignUp = () => setCurrentState("signup");
  const handleForgotPassword = () => setCurrentState("forgot-password");
  const handleBackToLogin = () => setCurrentState("login");
  const handleSignUpSuccess = () => setCurrentState("role-selection");
  const handleRoleSelectionComplete = () => setCurrentState("basic-info");
  const handleProceedToApp = () => setCurrentState("basic-info");

  // --- Basic Info ---
  const handleBasicInfoNext = (data: any) => {
    console.log("Basic info data:", data);
    setCurrentState("user-confirmation");
  };
  const handleBasicInfoBack = () => setCurrentState("role-selection");

  // --- User Confirmation ---
  const handleUserConfirmationNext = (role: "founder" | "investor") => {
    if (role === "founder") setCurrentState("founder-initial-profile");
    if (role === "investor") setCurrentState("startup-profile");
  };
  const handleUserConfirmationBack = () => setCurrentState("basic-info");

  // --- Founder Flow ---
  const handleFounderInitialProfileNext = (data: any) => {
    console.log("Founder initial profile data:", data);
    setCurrentState("document-upload");
  };
  const handleFounderInitialProfileBack = () =>
    setCurrentState("user-confirmation");

  const handleDocumentUploadNext = (data: any) => {
    console.log("Document upload data:", data);
    setCurrentState("add-team");
  };
  const handleDocumentUploadBack = () =>
    setCurrentState("founder-initial-profile");

  const handleAddTeamNext = (data: any) => {
    console.log("Team data:", data);
    setCurrentState("assessment-intro");
  };
  const handleAddTeamBack = () => setCurrentState("document-upload");

  const handleStartAssessment = () => setCurrentState("assessment");
  const handleSkipAssessment = () => setCurrentState("complete");

  const handleAssessmentComplete = (answers: any) => {
    console.log("Assessment answers:", answers);
    setCurrentState("complete");
  };

  const handleCompletionGoToDashboard = () => {
    console.log("Redirecting to dashboard...");
    setCurrentState("dashboard");
  };

  // --- Investor Flow ---
  const handleInvestorOnboardingComplete = () =>
    setCurrentState("investor-onboarding-success");
  const handleInvestorOnboardingBack = () =>
    setCurrentState("user-confirmation");

  const handleOnboardingInvestorComplete = () =>
    setCurrentState("dashboard");
  const handleOnboardingInvestorBack = () =>
    setCurrentState("startup-profile");

  // --- View Renderer ---
  const renderCurrentState = () => {
    switch (currentState) {
      case "login":
        return (
          <LoginForm
            onForgotPassword={handleForgotPassword}
            onSignUp={handleSignUp}
            onLoginSuccess={handleLoginSuccess}
          />
        );
      case "signup":
        return (
          <SignUpForm
            onForgotPassword={handleForgotPassword}
            onSignUpSuccess={handleSignUpSuccess}
            onGoToLogin={handleBackToLogin}
          />
        );
      case "forgot-password":
        return <ForgotPasswordForm onBackToLogin={handleBackToLogin} />;
      case "role-selection":
        return (
          <RoleSelectionForm
            onComplete={handleRoleSelectionComplete}
            onBack={handleBackToLogin}
          />
        );
      case "welcome-back":
        return (
          <WelcomeBackPage
            userData={userData}
            onProceedToApp={handleProceedToApp}
          />
        );
      case "basic-info":
        return (
          <BasicInfoForm
            onNext={handleBasicInfoNext}
            onBack={handleBasicInfoBack}
          />
        );
      case "user-confirmation":
        return (
          <UserConfirmation
            onRoleSelect={handleUserConfirmationNext}
            onBack={handleUserConfirmationBack}
          />
        );

      // Founder Flow
      case "founder-initial-profile":
        return (
          <FounderInitialProfileForm
            onNext={handleFounderInitialProfileNext}
            onBack={handleFounderInitialProfileBack}
          />
        );
      case "document-upload":
        return (
          <DocumentUploadForm
            onNext={handleDocumentUploadNext}
            onBack={handleDocumentUploadBack}
          />
        );
      case "add-team":
        return <AddTeamForm onNext={handleAddTeamNext} onBack={handleAddTeamBack} />;
      case "assessment-intro":
        return (
          <AssessmentIntroduction
            onStartAssessment={handleStartAssessment}
            onSkip={handleSkipAssessment}
          />
        );
      case "assessment":
        return (
          <PsychologicalAssessment
            onComplete={handleAssessmentComplete}
            onSkip={handleSkipAssessment}
          />
        );
      case "complete":
        return <CompletionPage onGoToDashboard={handleCompletionGoToDashboard} />;

      // Investor Flow
      case "startup-profile":
        return (
          <StartupProfileForm
            onCompleteInvestorFlow={handleInvestorOnboardingComplete}
            onBackInvestorFlow={handleInvestorOnboardingBack}
          />
        );
      case "investor-onboarding-success":
        return (
          <OnboardingInvestor
            onNext={handleOnboardingInvestorComplete}
            onBack={handleOnboardingInvestorBack}
          />
        );

      case "dashboard":
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
        <div className="w-full h-full bg-radial-gradient opacity-50 blur-[47px]" />
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">{renderCurrentState()}</main>

      {/* Fonts & Gradient Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Neulis+Sans:wght@400;600&display=swap');
        .font-sans { font-family: 'Inter', sans-serif; }
        .font-neulis-sans { font-family: 'Neulis Sans', sans-serif; }
        .bg-radial-gradient {
          background: radial-gradient(circle, #9898FF, #0000FF, #0606A9, #0C0C4A, #000000 70%);
        }
      `}</style>
    </div>
  );
}
