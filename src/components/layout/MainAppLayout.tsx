import React from 'react';
import HeaderComponent from './Header';
import SidebarComponent from './Sidebar';
import StoriesPanel from '../Sidebar/StoriesPanel'; 
import SuggestionsPanel from '../Sidebar/SuggestionsPanel';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  // This layout structure assumes:
  // 1. HeaderComponent (TopHeader) is fixed at the top (h-[55px], z-50).
  // 2. SidebarComponent (SidebarNav) is fixed on the left (w-[220px], h-screen, z-40 or similar).
  // 3. Right sidebar (StoriesPanel, SuggestionsPanel) is fixed on the right for large screens.
  // 4. Main content area fills the remaining space and is scrollable.

  return (
    <div className={cn("h-screen flex flex-col bg-background text-foreground", className)}>
      <HeaderComponent />
      <SidebarComponent />
      
      {/* Main scrollable content area */}
      {/* - flex-1: Takes up remaining vertical space in the flex column.
          - overflow-y-auto: Enables vertical scrolling for content that exceeds viewport height.
          - pt-[55px]: Padding top to prevent content from being obscured by the fixed HeaderComponent.
          - pl-[220px]: Padding left to prevent content from being obscured by the fixed SidebarComponent.
          - lg:pr-[300px]: Padding right on large screens to prevent content from being obscured by the fixed right aside.
      */}
      <main 
        className={cn(
          "flex-1 overflow-y-auto",
          "pt-[55px]",      
          "pl-[220px]",    
          "lg:pr-[300px]"  
        )}
      >
        {/* Inner container for the actual page content (children) */}
        {/* - max-w-xl: Limits content width for better readability (typical for feeds).
            - mx-auto: Centers the content block horizontally.
            - px-4 py-6: Horizontal and vertical padding within the content block.
        */}
        <div className="max-w-xl mx-auto px-4 py-6">
          {/* Layout Requirements for mainContent.container: "flex flex-col gap-4" */}
          <div className="flex flex-col gap-4">
            {children}
          </div>
        </div>
      </main>

      {/* Right Sidebar */}
      {/* - hidden lg:flex: Only visible on large screens (lg breakpoint and up).
          - w-[300px]: Fixed width for the right sidebar.
          - fixed top-[55px] right-0: Positions it below the header, fixed to the right.
          - h-[calc(100vh-55px)]: Full height below the header.
          - bg-background: Matches the overall page background.
          - border-l border-border: Adds a separator line.
          - overflow-y-auto: Enables scrolling within the right sidebar if content exceeds its height.
          - p-4 space-y-4: Padding and spacing for items within the sidebar.
          - z-30: Stacking order, ensuring it's above main content scroll but below popups/modals typically.
                  (TopHeader is z-50, SidebarNav may need explicit z-index if not default e.g. z-40)
      */}
      <aside 
        className={cn(
          "hidden lg:flex flex-col w-[300px] fixed right-0 h-[calc(100vh-55px)]",
          "top-[55px]", 
          "bg-background border-l border-border overflow-y-auto p-4 space-y-4 z-30"
        )}
      >
        <StoriesPanel />
        <SuggestionsPanel />
      </aside>
    </div>
  );
};

export default MainAppLayout;
