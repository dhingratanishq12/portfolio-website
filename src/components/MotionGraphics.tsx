import { FC } from 'react';

const MotionGraphics: FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {/* Floating gold particles */}
      <div className="particle particle-1"></div>
      <div className="particle particle-2"></div>
      <div className="particle particle-3"></div>
      <div className="particle particle-4"></div>
      <div className="particle particle-5"></div>
      <div className="particle particle-6"></div>
      
      {/* Subtle flowing fabric effect */}
      <div className="fabric-flow"></div>
    </div>
  );
};

export default MotionGraphics;
