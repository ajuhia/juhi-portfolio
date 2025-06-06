
import React from 'react';

const BackgroundCircles: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-2 overflow-hidden">
      {/* Large prominent background circles - much more visible */}
      <div className="absolute -top-32 -right-32 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] bg-gradient-to-br from-maroon-200/60 via-maroon-100/40 to-maroon-50/20 rounded-full blur-2xl"></div>
      
      <div className="absolute -bottom-32 -left-32 w-[350px] h-[350px] sm:w-[550px] sm:h-[550px] lg:w-[750px] lg:h-[750px] bg-gradient-to-tr from-steel-blue-200/60 via-steel-blue-100/40 to-steel-blue-50/20 rounded-full blur-2xl"></div>
      
      {/* Medium accent circles - clearly visible */}
      <div className="absolute top-20 right-20 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] bg-gradient-to-br from-maroon-300/50 via-maroon-200/30 to-transparent rounded-full blur-xl"></div>
      
      <div className="absolute bottom-20 left-20 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] bg-gradient-to-tr from-steel-blue-300/50 via-steel-blue-200/30 to-transparent rounded-full blur-xl"></div>
      
      {/* Additional visible circles for depth */}
      <div className="absolute top-1/3 left-1/3 w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] bg-gradient-to-br from-maroon-400/40 via-maroon-300/25 to-transparent rounded-full blur-lg"></div>
      
      <div className="absolute bottom-1/3 right-1/3 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] bg-gradient-to-tr from-steel-blue-400/40 via-steel-blue-300/25 to-transparent rounded-full blur-lg"></div>
      
      {/* Small accent circles */}
      <div className="absolute top-1/2 left-1/4 w-[120px] h-[120px] bg-gradient-to-br from-maroon-500/35 to-maroon-300/20 rounded-full blur-md"></div>
      
      <div className="absolute top-1/4 right-1/2 w-[100px] h-[100px] bg-gradient-to-tr from-steel-blue-500/35 to-steel-blue-300/20 rounded-full blur-md"></div>
    </div>
  );
};

export default BackgroundCircles;
