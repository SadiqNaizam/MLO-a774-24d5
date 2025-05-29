import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Facebook,
  Search,
  Home,
  Users,
  PlaySquare,
  Store,
  UsersRound,
  Plus,
  MessageCircle,
  Bell,
  ChevronDown,
  HelpCircle
} from 'lucide-react';

interface TopHeaderProps {
  className?: string;
}

const TopHeader: React.FC<TopHeaderProps> = ({ className }) => {
  const [activeNav, setActiveNav] = React.useState<string>('Home');

  const navItems = [
    { name: 'Home', icon: Home },
    { name: 'Friends', icon: Users },
    { name: 'Watch', icon: PlaySquare },
    { name: 'Marketplace', icon: Store },
    { name: 'Groups', icon: UsersRound },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 h-[55px] bg-card shadow-sm z-50 flex items-center justify-between px-4 border-b border-border',
        className
      )}
    >
      {/* Left Section: Logo and Search */} 
      <div className="flex items-center space-x-2">
        <Facebook className="h-10 w-10 text-primary" />
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search Facebook"
            className="pl-8 pr-2 py-2 h-9 w-[240px] rounded-full bg-secondary border-transparent focus:bg-background focus:border-primary"
          />
        </div>
      </div>

      {/* Center Section: Navigation */} 
      <nav className="flex items-center space-x-1 flex-grow justify-center hidden md:flex">
        {navItems.map((item) => (
          <Button
            key={item.name}
            variant="ghost"
            className={cn(
              'h-full px-6 rounded-none border-b-2 text-muted-foreground hover:bg-accent',
              activeNav === item.name
                ? 'border-primary text-primary'
                : 'border-transparent'
            )}
            onClick={() => setActiveNav(item.name)}
          >
            <item.icon className={cn('h-6 w-6', activeNav === item.name ? 'text-primary' : 'text-muted-foreground')} />
          </Button>
        ))}
      </nav>

      {/* Right Section: Profile and Actions */} 
      <div className="flex items-center space-x-1.5">
        <Button variant="ghost" className="rounded-full h-9 w-auto px-3 text-sm font-medium flex items-center space-x-2 bg-secondary hover:bg-muted">
          <Avatar className="h-6 w-6">
            <AvatarImage src="https://i.pravatar.cc/30?u=olenna" alt="Olenna Mason" />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
          <span>Olenna</span>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full bg-secondary hover:bg-muted h-9 w-9">
          <Plus className="h-5 w-5 text-foreground" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full bg-secondary hover:bg-muted h-9 w-9">
          <MessageCircle className="h-5 w-5 text-foreground" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full bg-secondary hover:bg-muted h-9 w-9 relative">
          <Bell className="h-5 w-5 text-foreground" />
          <span className="absolute top-1 right-1.5 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
          </span>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full bg-secondary hover:bg-muted h-9 w-9">
          <ChevronDown className="h-5 w-5 text-foreground" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full bg-secondary hover:bg-muted h-9 w-9 md:hidden">
          <HelpCircle className="h-5 w-5 text-foreground" />
        </Button>
      </div>
    </header>
  );
};

export default TopHeader;
