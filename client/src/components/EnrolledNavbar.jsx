import React from 'react';

const EnrolledNavbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Left side - Logo */}
      <div className="flex items-center">
        <span className="text-blue-500 text-xl font-bold">Edemy</span>
      </div>

      {/* Right side - User greeting */}
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">Hi Richard</span>
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
          {/* You can replace this with an actual user avatar */}
          <span className="text-gray-500">R</span>
        </div>
      </div>
    </nav>
  );
};

export default EnrolledNavbar;