
import React from 'react';

const BackgroundCircles: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Very subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-50/80 to-slate-100/60"></div>
      
      {/* Main decorative circles with maroon and steel-blue colors */}
      <div className="absolute -top-32 -right-32 w-80 h-80 sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-maroon-100/60 via-maroon-50/40 to-transparent rounded-full opacity-70 blur-sm"></div>
      
      <div className="absolute -bottom-32 -left-32 w-80 h-80 sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-gradient-to-tr from-steel-blue-100/60 via-steel-blue-50/40 to-transparent rounded-full opacity-65 blur-sm"></div>
      
      {/* Additional accent circles for depth */}
      <div className="absolute top-20 right-20 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 bg-gradient-to-br from-maroon-200/50 via-maroon-100/30 to-transparent rounded-full opacity-60 blur-lg"></div>
      
      <div className="absolute bottom-20 left-20 w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 bg-gradient-to-tr from-steel-blue-200/50 via-steel-blue-100/30 to-transparent rounded-full opacity-55 blur-lg"></div>
      
      {/* Smaller accent circles */}
      <div className="absolute top-1/3 left-1/4 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-maroon-300/40 to-transparent rounded-full opacity-50 blur-md"></div>
      
      <div className="absolute bottom-1/3 right-1/4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-tr from-steel-blue-300/40 to-transparent rounded-full opacity-45 blur-md"></div>
    </div>
  );
};

export default BackgroundCircles;
