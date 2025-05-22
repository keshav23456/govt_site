import React from 'react';
import { Leaf } from 'lucide-react';

interface LogoProps {
  size?: number;
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 24, color }) => {
  return <Leaf size={size} className={color ? `text-${color}` : 'text-primary-500'} />;
};

export default Logo;