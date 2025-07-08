
import React from 'react';

const GoogleAuth = () => {
  const handleLogin = () => {
    window.location.href = 'http://localhost:5000/auth/google';// backend logic/api
  };

  return (
    <button
      onClick={handleLogin}
      className="flex items-center justify-center bg-[#070707] px-6 py-3 gap-2 w-[196px] h-[50px] border-2 border-[#1A1A1A] rounded-[12px]"
    >
      <img
        src={"/google-logo.png"}
        alt="Google logo"
        className="w-[25px] h-[26px]"
      />
      <span className="text-sm text-[#1A1A1A] font-medium"></span>
    </button>
  );
};

export default GoogleAuth;


