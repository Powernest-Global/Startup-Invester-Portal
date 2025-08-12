import React from 'react';

type LinkedInAuthProps = {
  onSuccess?: (user: {
    name: string;
    email: string;
    role: string;
    lastLogin: Date;
    notifications: any[];
    quickActions: any[];
  }) => void;
};

const LinkedInAuth = ({ onSuccess }: LinkedInAuthProps) => {
  const handleLogin = () => {
    const dummyUser = {
      name: 'LinkedIn User',
      email: 'linkedinuser@example.com',
      role: 'Founder',
      lastLogin: new Date(),
      notifications: [],
      quickActions: [],
    };
    if (typeof onSuccess === 'function') {
      onSuccess(dummyUser);
    } else {
      console.warn('onSuccess is not provided or not a function');
    }
  };

  return (
    <button
      onClick={handleLogin}
      className="flex items-center justify-center bg-[#1A1A1A] text-white px-6 py-3 gap-2 w-full h-[50px] rounded-[12px]"
    >
      {/* SVG Icon for LinkedIn */}
      <svg
        className="w-[20px] h-[20px]"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        fill="#0A66C2"
      >
        <path d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.6c0,20.3,17.85,38.4,38.28,38.4h373.78c20.54,0,35.94-18.2,35.94-38.39V66.89C480.12,46.7,464.6,32,444.17,32z M170.87,405.43H106.69V205.88h64.18V405.43z M138.77,177.01c-21.71,0-38.92-17.72-38.92-39.49s17.21-39.49,38.92-39.49s38.92,17.72,38.92,39.49S160.48,177.01,138.77,177.01z M405.43,405.43h-64.18V296.32c0-26.14-9.34-44-32.56-44c-17.72,0-28.79,12-33.51,23.69c-1.75,4.2-2.19,9.92-2.19,15.76v113.67h-64.18V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44c42.1,0,74,27.77,74,87.64V405.43z"/>
      </svg>
      <span className="text-sm font-medium">Continue with LinkedIn</span>
    </button>
  );
};

export default LinkedInAuth;