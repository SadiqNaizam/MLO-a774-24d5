import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import {
  Newspaper,
  MessageSquare,
  PlaySquare,
  Store,
  Gamepad2,
  CalendarDays,
  Flag,
  Users,
  ListChecks,
  HeartHandshake,
  ChevronDown,
  Settings2, // Changed from Megaphone/FilePlus2 to represent general tools better
  UsersRound,
  CalendarPlus,
  Gift,
  UserCircle // For Olenna Mason
} from 'lucide-react';

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
  href?: string;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, isActive, href = '#', onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        'flex items-center space-x-3 px-3 py-2.5 rounded-md text-sm font-medium',
        isActive
          ? 'bg-sidebar-accent text-sidebar-primary'
          : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground',
        'transition-colors duration-150'
      )}
    >
      <Icon className={cn('h-5 w-5', isActive ? 'text-sidebar-primary' : 'text-sidebar-foreground')} />
      <span>{label}</span>
    </a>
  );
};

interface SidebarNavProps {
  className?: string;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ className }) => {
  const [showMoreExplore, setShowMoreExplore] = React.useState(false);

  const mainNavItems = [
    { icon: UserCircle, label: 'Olenna Mason', isProfile: true }, 
    { icon: Newspaper, label: 'News Feed', isActive: true },
    { icon: MessageSquare, label: 'Messenger' },
    { icon: PlaySquare, label: 'Watch' },
    { icon: Store, label: 'Marketplace' },
  ];

  const shortcuts = [{ icon: Gamepad2, label: 'FarmVille 2' }];

  const exploreItems = [
    { icon: CalendarDays, label: 'Events' },
    { icon: Flag, label: 'Pages' },
    { icon: Users, label: 'Groups' },
    { icon: ListChecks, label: 'Friend Lists' },
    { icon: HeartHandshake, label: 'Fundraisers' },
  ];

  const createItems = [
    { icon: Settings2, label: 'Ad' }, // Using Settings2 as a generic 'tool' or 'create' icon
    { icon: Flag, label: 'Page' }, // Re-using Flag for page creation as common
    { icon: UsersRound, label: 'Group' },
    { icon: CalendarPlus, label: 'Event' },
    { icon: Gift, label: 'Fundraiser' },
  ];

  return (
    <nav className={cn('w-[220px] h-screen bg-sidebar fixed top-0 left-0 flex flex-col p-3 space-y-1 overflow-y-auto scrollbar-thin scrollbar-thumb-sidebar-accent scrollbar-track-sidebar', className)}>
      {/* User Profile Link */} 
      <a href="#" className='flex items-center space-x-3 px-3 py-2.5 rounded-md text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground transition-colors duration-150 mb-2'>
        <Avatar className="h-7 w-7">
          <AvatarImage src="https://i.pravatar.cc/40?u=olenna" alt="Olenna Mason" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <span>Olenna Mason</span>
      </a>

      {mainNavItems.slice(1).map((item) => (
        <NavItem key={item.label} icon={item.icon} label={item.label} isActive={item.isActive} />
      ))}

      <Separator className="my-3 bg-sidebar-border" />

      <h3 className="px-3 py-1 text-xs font-semibold text-muted-foreground tracking-wider">Shortcuts</h3>
      {shortcuts.map((item) => (
        <NavItem key={item.label} icon={item.icon} label={item.label} />
      ))}

      <Separator className="my-3 bg-sidebar-border" />

      <h3 className="px-3 py-1 text-xs font-semibold text-muted-foreground tracking-wider">Explore</h3>
      {exploreItems.slice(0, showMoreExplore ? exploreItems.length : 3).map((item) => (
        <NavItem key={item.label} icon={item.icon} label={item.label} />
      ))}
      <button
        onClick={() => setShowMoreExplore(!showMoreExplore)}
        className="flex items-center space-x-3 px-3 py-2.5 rounded-md text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent w-full text-left"
      >
        <ChevronDown className={cn('h-5 w-5 transition-transform', showMoreExplore && 'rotate-180')} />
        <span>{showMoreExplore ? 'See Less' : 'See More...'}</span>
      </button>

      <Separator className="my-3 bg-sidebar-border" />

      <h3 className="px-3 py-1 text-xs font-semibold text-muted-foreground tracking-wider">Create</h3>
      {createItems.map((item) => (
        <NavItem key={item.label} icon={item.icon} label={item.label} />
      ))}
    </nav>
  );
};

export default SidebarNav;
