// components/Divider.tsx

import React from 'react';

interface DividerProps {
  color?: string;
  thickness?: number;
}

const Divider: React.FC<DividerProps> = ({ color = '#000', thickness = 1 }) => {
  const dividerStyle: React.CSSProperties = {
    width: '75%',
    height: thickness,
    backgroundColor: color,
  };

  return <div className='mb-5 sm:mt-4 rounded-full' style={dividerStyle} />;
};

export default Divider;
