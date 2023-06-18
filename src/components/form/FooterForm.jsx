import React from 'react'

const FooterForm = () => {
  return (
    <div className="w-full -mt-16 flex flex-col items-center justify-center gap-4">
      <div className="w-full flex items-center justify-center gap-6">
        <p className="text-xs text-blue-600 hover:underline hover:text-orange-700 cursor-pointer">
          Conditions of Use
        </p>
        <p className="text-xs text-blue-600 hover:underline hover:text-orange-700 cursor-pointer">
          Privacy Notice
        </p>
        <p className="text-xs text-blue-600 hover:underline hover:text-orange-700 cursor-pointer">
          Help
        </p>
      </div>
      <div>
        <p className="text-xs text-gray-600">
          © 2023, Omar Taha, Software Engineer
        </p>
        <p className="mb-2 text-xs mt-1 text-gray-600 w-full text-center">
          +201276412078
        </p>
      </div>
    </div>
  );
}

export default FooterForm
