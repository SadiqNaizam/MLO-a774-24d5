import React from 'react';
import { cn } from '@/lib/utils';
import TopHeader from '../Header/TopHeader'; // Path: src/components/Header/TopHeader.tsx

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  // TopHeader is already styled with fixed position, height, background, shadow, etc.,
  // as per Layout Requirements (header) and its own implementation.
  // This Header component acts as a wrapper or direct export for MainAppLayout.
  return <TopHeader className={cn(className)} />;
};

export default Header;
