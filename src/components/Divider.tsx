// components/Divider.tsx

import React from 'react';

interface DividerProps {
  color?: string;
  thickness?: number;
}

const Divider: React.FC<DividerProps> = ({ color = '#FFF', thickness = 1 }) => {
  const dividerStyle: React.CSSProperties = {
    width: '75%',
    height: thickness,
    backgroundColor: color,
  };

  return <div className='mb-10 mt-5 sm:mb-5 sm:mt-10 rounded-full' style={dividerStyle} />;
};

export default Divider;
