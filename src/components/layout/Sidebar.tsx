import React from 'react';
import { cn } from '@/lib/utils';
import SidebarNav from '../Sidebar/SidebarNav'; // Path: src/components/Sidebar/SidebarNav.tsx

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  // SidebarNav is already styled with fixed position, width, height, background, etc.,
  // as per Layout Requirements (sidebarLeft) and its own implementation.
  // This Sidebar component acts as a wrapper or direct export for MainAppLayout.
  return <SidebarNav className={cn(className)} />;
};

export default Sidebar;
