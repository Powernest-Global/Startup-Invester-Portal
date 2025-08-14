// import React, { useState } from 'react';
// import { Mail, ArrowLeft, AlertCircle, CheckCircle } from 'lucide-react';

// interface ForgotPasswordFormProps {
//   onBackToLogin: () => void;
// }

// const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({ onBackToLogin }) => {
//   const [email, setEmail] = useState('');
//   const [error, setError] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);

//   const validateEmail = (email: string): boolean => {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (!email) {
//       setError('Email is required');
//       return;
//     }

//     if (!validateEmail(email)) {
//       setError('Please enter a valid email address');
//       return;
//     }

//     setIsSubmitting(true);
//     setError('');

//     try {
//       // Simulate API call
//       await new Promise(resolve => setTimeout(resolve, 2000));
      
//       setIsSuccess(true);
//       console.log('Password reset email sent to:', email);
//     } catch (error) {
//       console.error('Error sending reset email:', error);
//       setError('Failed to send reset email. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setEmail(e.target.value);
//     if (error) {
//       setError('');
//     }
//   };

//   if (isSuccess) {
//     return (
//       <div className="min-h-screen flex">
//         {/* Left side - Gradient background with branding */}
//         <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
//           <div 
//             className="absolute inset-0 w-full h-full"
//             style={{
//               background: 'radial-gradient(195.32% 112.27% at 50% 100%, #000000 30.77%, #0C0C4A 44.28%, #0606A9 58.97%, #0000FF 75.08%, #9898FF 91.44%)',
//             }}
//           />
//           <div className="relative z-10 flex flex-col justify-center items-start p-16 text-white">
//             <div className="flex items-center mb-12">
//               <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-4">
//                 <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
//               </div>
//               <h1 className="text-2xl font-bold">Power Nest</h1>
//             </div>
//             <h2 className="text-5xl font-bold leading-tight">
//               Check your email
//             </h2>
//           </div>
//         </div>

//         {/* Right side - Success message */}
//         <div className="flex-1 flex items-center justify-center px-8 py-12 bg-black">
//           <div className="w-full max-w-md text-center">
//             {/* Mobile branding */}
//             <div className="lg:hidden flex items-center justify-center mb-8">
//               <img src="/image.png" alt="Power Nest Logo" className="w-8 h-8 mr-3" />
//             </div>

//             <div className="mb-8">
//               <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <CheckCircle className="w-8 h-8 text-white" />
//               </div>
//               <h2 className="text-3xl font-bold text-white mb-4">Check your email</h2>
//               <p className="text-gray-400 mb-2">
//                 We've sent a password reset link to:
//               </p>
//               <p className="text-blue-400 font-medium mb-6">{email}</p>
//               <p className="text-gray-400 text-sm">
//                 Didn't receive the email? Check your spam folder or{' '}
//                 <button 
//                   onClick={() => {
//                     setIsSuccess(false);
//                     setEmail('');
//                   }}
//                   className="text-blue-400 hover:text-blue-300 underline transition-colors"
//                 >
//                   try again
//                 </button>
//               </p>
//             </div>

//             <button
//               onClick={onBackToLogin}
//               className="flex items-center justify-center w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
//             >
//               <ArrowLeft className="w-5 h-5 mr-2" />
//               Back to Sign In
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex">
//       {/* Left side - Gradient background with branding */}
//       <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
//         <div 
//           className="absolute inset-0 w-full h-full"
//           style={{
//             background: 'radial-gradient(195.32% 112.27% at 50% 100%, #000000 30.77%, #0C0C4A 44.28%, #0606A9 58.97%, #0000FF 75.08%, #9898FF 91.44%)',
//           }}
//         />
//         <div className="relative z-10 flex flex-col justify-center items-start p-16 text-white">
//           <div className="flex items-center mb-12">
//             <img src="/image.png" alt="Power Nest Logo" className="w-10 h-10 mr-4" />
//             <h1 className="text-2xl font-bold">Power Nest</h1>
//           </div>
//           <h2 className="text-5xl font-bold leading-tight">
//             Forgot Password
//           </h2>
//         </div>
//       </div>

//       {/* Right side - Form */}
//       <div className="flex-1 flex items-center justify-center px-8 py-12 bg-black">
//         <div className="w-full max-w-md">
//           {/* Mobile branding */}
//           <div className="lg:hidden flex items-center mb-8">
//             <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-3">
//               <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
//             </div>
//             <h1 className="text-xl font-bold text-white">Power Nest</h1>
//           </div>

//           <div className="mb-8">
//             <h2 className="text-3xl font-bold text-white mb-2">Forgot Password</h2>
//             <p className="text-gray-400">
//               Enter your email address and we'll send you a link to reset your password.
//             </p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Email Field */}
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
//                 Email Address
//               </label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={email}
//                   onChange={handleEmailChange}
//                   className={`w-full pl-10 pr-4 py-3 bg-gray-800 text-white rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//                     error ? 'border-red-500' : 'border-gray-700 hover:border-gray-600'
//                   }`}
//                   placeholder="Enter your email address"
//                   aria-describedby={error ? 'email-error' : undefined}
//                   aria-invalid={error ? 'true' : 'false'}
//                 />
//                 {error && (
//                   <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
//                     <AlertCircle className="w-5 h-5 text-red-500" />
//                   </div>
//                 )}
//               </div>
//               {error && (
//                 <p id="email-error" className="mt-1 text-sm text-red-500" role="alert">
//                   {error}
//                 </p>
//               )}
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
//               aria-describedby="submit-button-description"
//             >
//               {isSubmitting ? (
//                 <div className="flex items-center justify-center">
//                   <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
//                   Sending Reset Link...
//                 </div>
//               ) : (
//                 'Send Reset Link'
//               )}
//             </button>
//             <p id="submit-button-description" className="sr-only">
//               Click to send a password reset link to your email address
//             </p>

//             {/* Back to Login */}
//             <button
//               type="button"
//               onClick={onBackToLogin}
//               className="flex items-center justify-center w-full text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded-lg py-2"
//               aria-label="Go back to sign in page"
//             >
//               <ArrowLeft className="w-4 h-4 mr-2" />
//               Back to Sign In
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ForgotPasswordForm;
//new code

import React, { useState } from 'react';
import { Mail, ArrowLeft, Lock, Eye, EyeOff } from 'lucide-react';
import PowernestImg from '../assets/Powernest.png';
import TaglineImg from '../assets/Fund Smarter. Hire Smarter. Grow Faster..png';
import { useNavigate } from 'react-router-dom';


// ✅ Single reusable icon
const CustomDoubleCheckIcon = ({ className }) => (
    <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M2 16.2862L6.8 21L18 10" />
        <path d="M15.7451 18L18.8001 21L30.0001 10" />
    </svg>
);

// --- Left Branding Panel ---
const BrandingPanel = () => (
  <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden rounded-tr-2xl">
    <div
      className="absolute inset-0 w-full h-full"
      style={{
        background:
          'radial-gradient(195.32% 112.27% at 50% 100%, #000000 30.77%, #0C0C4A 44.28%, #0606A9 58.97%, #0000FF 75.08%, #9898FF 91.44%)',
      }}
    />
    <div className="relative z-10 flex flex-col justify-between h-full p-8 text-white w-full">
      <div>
        <img src={PowernestImg} alt="Powernest" style={{ width: '180.32px', height: '31.94px' }} />
      </div>
      <div className="flex-grow flex items-center justify-center">
        <img
          src={TaglineImg}
          alt="Fund Smarter. Hire Smarter. Grow Faster."
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
    </div>
  </div>
);
// --- Right Panel: Forgot Password Email Form ---
const ForgotPasswordForm = ({ onBackToLogin, onSuccess }) => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) {
            setError('Email address is required.');
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }
        setError('');
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log('Password reset link sent to:', email);
        setIsSubmitting(false);
        onSuccess();
    };

    return (
        <div className="w-full max-w-md text-white">
            <h1 className="text-4xl font-bold mb-4">Reset Your Password</h1>
            <p className="text-gray-400 mb-8">
                Enter your email address and we’ll send you a link to reset your password.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email address
                    </label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`w-full pl-10 pr-4 py-3 bg-[#181818] text-white rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${error ? 'border-red-500' : 'border-gray-700'
                                }`}
                            placeholder="Enter your email address"
                            disabled={isSubmitting}
                        />
                    </div>
                    {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg"
                >
                    {isSubmitting ? 'Sending...' : 'Send Reset Link'}
                </button>
            </form>
        </div>
    );
};

// --- Right Panel: Email Sent Success View ---
const EmailSentSuccess = ({ onProceed, onBackToLogin }) => (
    <div className="w-full max-w-md text-white">
        <h1 className="text-4xl font-bold mb-8">Check Your Email</h1>
        <div className="flex items-start space-x-4">
            <CustomDoubleCheckIcon className="w-8 h-8 text-white mt-1 flex-shrink-0" />
            <div>
                <p className="text-lg text-gray-200">We've sent an email with a link to reset your password.</p>
                <p className="text-lg text-gray-400 mt-2">Please check your inbox and follow the instructions.</p>
            </div>
        </div>
        <button
            onClick={onProceed}
            className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
        >
            Continue to Reset Password
        </button>
        <button
            onClick={onBackToLogin}
            className="mt-4 flex items-center justify-center w-full text-lg text-gray-300 hover:text-white transition-colors"
        >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="underline">Back to login</span>
        </button>
    </div>
);

// --- Right Panel: Set New Password Form ---
const SetNewPasswordForm = ({ onPasswordSet }) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!password || !confirmPassword) {
            setError('Both fields are required.');
            return;
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }
        setError('');
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log('Password has been successfully reset.');
        setIsSubmitting(false);
        onPasswordSet();
    };

    return (
        <div className="w-full max-w-md text-white">
            <h1 className="text-4xl font-bold mb-8">Set a New Password</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                        New password
                    </label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full pl-10 pr-10 py-3 bg-[#181818] text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your new password"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>
                </div>

                <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                        Confirm password
                    </label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full pl-10 pr-10 py-3 bg-[#181818] text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Re-enter your password"
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                        >
                            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>
                </div>
                {error && <p className="text-sm text-red-400">{error}</p>}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                >
                    {isSubmitting ? 'Setting Password...' : 'Set New Password'}
                </button>
            </form>
        </div>
    );
};

// --- Right Panel: Final Success Message ---
const ResetSuccessful = ({ onBackToLogin }) => (
    <div className="w-full max-w-md text-white">
        <h1 className="text-4xl font-bold mb-8">Reset Successful</h1>
        <div className="flex items-center space-x-3 mb-8">
            <CustomDoubleCheckIcon className="w-8 h-8 text-gray-400 flex-shrink-0" />
            <p className="text-lg text-gray-200">You've successfully reset your password.</p>
        </div>
        <button
            onClick={onBackToLogin}
            className="flex items-center text-lg text-gray-300 hover:text-white transition-colors"
        >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="underline">Back to login</span>
        </button>
    </div>
);


// --- Main Page Component ---
export default function App() {
    const [view, setView] = useState('form'); // 'form', 'email-sent', 'reset-form', 'final-success'

    // This handler now resets the flow to the beginning, simulating a "back to login" action.
    const handleBackToLogin = () => {
        console.log('Navigating back to login page...');
        setView('form'); 
    };

    const handleEmailSubmitSuccess = () => setView('email-sent');
    const handleProceedToReset = () => setView('reset-form');
    const handlePasswordSet = () => setView('final-success');

    const renderRightPanel = () => {
        switch (view) {
            case 'form':
                return <ForgotPasswordForm onBackToLogin={handleBackToLogin} onSuccess={handleEmailSubmitSuccess} />;
            case 'email-sent':
                return <EmailSentSuccess onProceed={handleProceedToReset} onBackToLogin={handleBackToLogin} />;
            case 'reset-form':
                return <SetNewPasswordForm onPasswordSet={handlePasswordSet} />;
            case 'final-success':
                return <ResetSuccessful onBackToLogin={handleBackToLogin} />;
            default:
                return <ForgotPasswordForm onBackToLogin={handleBackToLogin} onSuccess={handleEmailSubmitSuccess} />;
        }
    };

    return (
        <div className="min-h-screen flex bg-[#0E0E10]">
            <BrandingPanel />
            <main className="flex-1 flex items-center justify-center px-6 py-12 bg-black">
                {renderRightPanel()}
            </main>
        </div>
    );
}