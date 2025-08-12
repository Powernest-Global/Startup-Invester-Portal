import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
import LinkedInAuth from './LinkedInAuth';
import PowernestImg from '../assets/Powernest.png';
import FundSmarterImg from '../assets/Fund Smarter. Hire Smarter. Grow Faster..png'; // new import

interface SignUpFormData {
  email: string;
  password: string;
  agreeToTerms: boolean;
}

interface SignUpFormErrors {
  email?: string;
  password?: string;
  agreeToTerms?: string;
  general?: string;
}

interface SignUpFormProps {
  onSignUpSuccess: (userData: any) => void;
  onGoToLogin: (fromPath?: string) => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onSignUpSuccess, onGoToLogin }) => {
  const location = useLocation();
  const [formData, setFormData] = useState<SignUpFormData>({
    email: '',
    password: '',
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState<SignUpFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: SignUpFormErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;

    setFormData((prev) => ({ ...prev, [name]: val }));

    if (errors[name as keyof SignUpFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setErrors({});

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const userData = {
        email: formData.email,
        role: 'Founder',
        joined: new Date(),
      };
      onSignUpSuccess(userData);
    } catch (error) {
      console.error(error);
      setErrors({ general: 'Something went wrong. Try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-[#0E0E10]">
      {/* Left Section */}
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
              src={FundSmarterImg}
              alt="Fund Smarter. Hire Smarter. Grow Faster."
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 bg-black">
        <div className="w-full max-w-md">
          <div className="lg:hidden flex items-center mb-6">
            <img src={PowernestImg} alt="Power Nest Logo" className="w-8 h-8 mr-3" />
            <h1 className="text-xl font-bold text-white">Power Nest</h1>
          </div>

          <h2 className="text-3xl font-bold text-white mb-8">Create Your Account</h2>

          {errors.general && (
            <div className="mb-4 p-4 bg-red-900/20 border border-red-500 rounded-lg">
              <p className="text-red-400 text-sm">{errors.general}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className={`w-full pl-10 pr-4 py-3 bg-transparent text-white rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.email ? 'border-red-500' : 'border-gray-700'
                  }`}
                />
                {errors.email && (
                  <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-500" />
                )}
              </div>
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className={`w-full pl-10 pr-12 py-3 bg-transparent text-white rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.password ? 'border-red-500' : 'border-gray-700'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
            </div>

            {/* Terms */}
            <div>
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="mt-1 h-4 w-4 rounded border-gray-600 bg-gray-800 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="agreeToTerms" className="text-sm text-gray-300">
                  I agree to the{' '}
                  <a href="#" className="text-blue-400 hover:text-blue-300 underline">
                    Terms & Conditions
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-blue-400 hover:text-blue-300 underline">
                    Privacy Policy
                  </a>
                </label>
              </div>
              {errors.agreeToTerms && <p className="text-sm text-red-500 mt-1">{errors.agreeToTerms}</p>}
            </div>

            {/* Submit + Login */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
              >
                {isSubmitting ? 'Creating Account...' : 'Create Account'}
              </button>

              <p className="text-sm text-center text-gray-400 mt-6">
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => onGoToLogin(location.pathname)}
                  className="font-semibold text-white hover:underline"
                >
                  Log in
                </button>
              </p>
            </div>

            {/* OR divider */}
            <div className="flex items-center">
              <div className="flex-grow border-t border-gray-700" />
              <span className="px-4 text-gray-400 text-sm font-medium">OR</span>
              <div className="flex-grow border-t border-gray-700" />
            </div>

            {/* Social Logins */}
            <div className="space-y-3 mt-4">
              <GoogleAuth onSuccess={onSignUpSuccess} />
              <LinkedInAuth onSuccess={onSignUpSuccess} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
