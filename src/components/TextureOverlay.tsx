
import React from 'react';

const TextureOverlay: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20px 30px, #000 1px, transparent 1px),
            radial-gradient(circle at 60px 70px, #000 1px, transparent 1px),
            radial-gradient(circle at 40px 10px, #000 0.5px, transparent 0.5px),
            radial-gradient(circle at 80px 50px, #000 0.5px, transparent 0.5px)
          `,
          backgroundSize: '100px 100px, 120px 120px, 80px 80px, 90px 90px',
          backgroundPosition: '0 0, 30px 40px, 50px 20px, 70px 60px',
          mixBlendMode: 'multiply'
        }}
      />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(162, 60, 60, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(106, 155, 189, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          mixBlendMode: 'overlay'
        }}
      />
      
      {/* Organic texture spots */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 30% 20%, rgba(162, 60, 60, 0.1) 0%, transparent 40%),
            radial-gradient(ellipse at 70% 80%, rgba(106, 155, 189, 0.1) 0%, transparent 35%),
            radial-gradient(ellipse at 10% 70%, rgba(162, 60, 60, 0.05) 0%, transparent 30%),
            radial-gradient(ellipse at 90% 30%, rgba(106, 155, 189, 0.05) 0%, transparent 25%)
          `,
          backgroundSize: '200px 150px, 180px 160px, 120px 100px, 140px 120px',
          mixBlendMode: 'soft-light'
        }}
      />
    </div>
  );
};

export default TextureOverlay;
