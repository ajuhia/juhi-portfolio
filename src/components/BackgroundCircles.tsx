
import React from 'react';

const BackgroundCircles: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Very subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-50/80 to-slate-100/60"></div>
      
      {/* Minimal decorative elements - very subtle */}
      <div className="absolute -top-64 -right-64 w-96 h-96 sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] bg-gradient-to-br from-slate-100/20 via-slate-50/10 to-transparent rounded-full opacity-30"></div>
      
      <div className="absolute -bottom-64 -left-64 w-96 h-96 sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] bg-gradient-to-tr from-slate-100/15 via-slate-50/8 to-transparent rounded-full opacity-25"></div>
    </div>
  );
};

export default BackgroundCircles;
