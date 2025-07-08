import React from 'react';

const LinkedInAuth = () => {
  const BACKEND_URL = 'http://localhost:5000';

  const handleLogin = () => {
    window.location.href = `${BACKEND_URL}/auth/linkedin`;  //here you can add your backend Api
  };

  return (
    <button
      onClick={handleLogin}
      className="flex items-center justify-center bg-[#070707] px-6 py-3 gap-2 w-[196px] h-[50px] border-2 border-[#1A1A1A] rounded-[12px]"
    >
      <img
        src="/linkedin-logo.jpg"
        alt="LinkedIn"
        className="w-[26px] h-[26px]"
      />
    </button>
  );
};

export default LinkedInAuth;
