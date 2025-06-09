
import React from 'react';

const BackgroundCircles: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-5 overflow-hidden">
      {/* Main decorative circles with much higher opacity and visibility */}
      <div className="absolute -top-20 -right-20 w-96 h-96 sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] bg-gradient-to-br from-maroon-200/80 via-maroon-100/60 to-maroon-50/40 rounded-full opacity-90 blur-sm"></div>
      
      <div className="absolute -bottom-20 -left-20 w-96 h-96 sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] bg-gradient-to-tr from-steel-blue-200/80 via-steel-blue-100/60 to-steel-blue-50/40 rounded-full opacity-85 blur-sm"></div>
      
      {/* Additional accent circles for depth */}
      <div className="absolute top-32 right-32 w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 bg-gradient-to-br from-maroon-300/70 via-maroon-200/50 to-maroon-100/30 rounded-full opacity-75 blur-lg"></div>
      
      <div className="absolute bottom-32 left-32 w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 bg-gradient-to-tr from-steel-blue-300/70 via-steel-blue-200/50 to-steel-blue-100/30 rounded-full opacity-70 blur-lg"></div>
      
      {/* Smaller accent circles */}
      <div className="absolute top-1/4 left-1/3 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-maroon-400/60 via-maroon-300/40 to-transparent rounded-full opacity-65 blur-md"></div>
      
      <div className="absolute bottom-1/4 right-1/3 w-28 h-28 sm:w-36 sm:h-36 bg-gradient-to-tr from-steel-blue-400/60 via-steel-blue-300/40 to-transparent rounded-full opacity-60 blur-md"></div>
      
      {/* Additional visible circles */}
      <div className="absolute top-1/2 left-20 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-maroon-500/50 to-maroon-300/30 rounded-full opacity-55 blur-sm"></div>
      
      <div className="absolute top-20 left-1/2 w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-tr from-steel-blue-500/50 to-steel-blue-300/30 rounded-full opacity-50 blur-sm"></div>
    </div>
  );
};

export default BackgroundCircles;
