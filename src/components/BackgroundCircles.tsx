
import React from 'react';

const BackgroundCircles: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-1 overflow-hidden">
      {/* Large soft background circles with very subtle colors */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] lg:w-[900px] lg:h-[900px] bg-gradient-to-br from-slate-100/30 via-slate-50/20 to-transparent rounded-full blur-3xl"></div>
      
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] lg:w-[900px] lg:h-[900px] bg-gradient-to-tr from-slate-100/25 via-slate-50/15 to-transparent rounded-full blur-3xl"></div>
      
      {/* Medium accent circles */}
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-gradient-to-br from-maroon-100/20 via-maroon-50/10 to-transparent rounded-full blur-2xl"></div>
      
      <div className="absolute bottom-1/3 left-1/4 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] bg-gradient-to-tr from-steel-blue-100/20 via-steel-blue-50/10 to-transparent rounded-full blur-2xl"></div>
      
      {/* Small decorative circles */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-gradient-to-br from-slate-200/15 to-transparent rounded-full blur-xl"></div>
      
      <div className="absolute top-20 left-20 w-[150px] h-[150px] bg-gradient-to-br from-maroon-50/15 to-transparent rounded-full blur-xl"></div>
      
      <div className="absolute bottom-20 right-20 w-[120px] h-[120px] bg-gradient-to-br from-steel-blue-50/15 to-transparent rounded-full blur-xl"></div>
    </div>
  );
};

export default BackgroundCircles;
