import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { PlusCircle, Archive, Settings, CircleUserRound } from 'lucide-react';

interface Story {
  id: string;
  userName: string;
  userAvatarUrl: string;
  storyImageUrl: string;
  viewed?: boolean;
}

interface StoriesPanelProps {
  className?: string;
}

const StoriesPanel: React.FC<StoriesPanelProps> = ({ className }) => {
  const storiesData: Story[] = [
    {
      id: 'story1',
      userName: 'Jane Doe',
      userAvatarUrl: 'https://i.pravatar.cc/32?u=jane',
      storyImageUrl: 'https://picsum.photos/seed/story1/100/150',
      viewed: false,
    },
    {
      id: 'story2',
      userName: 'John Smith',
      userAvatarUrl: 'https://i.pravatar.cc/32?u=john',
      storyImageUrl: 'https://picsum.photos/seed/story2/100/150',
      viewed: true,
    },
    {
      id: 'story3',
      userName: 'Alice Wonderland',
      userAvatarUrl: 'https://i.pravatar.cc/32?u=alice',
      storyImageUrl: 'https://picsum.photos/seed/story3/100/150',
      viewed: false,
    },
  ];

  return (
    <Card className={cn('bg-card rounded-lg shadow-sm w-full', className)}>
      <CardHeader className="flex flex-row items-center justify-between p-3 border-b border-border">
        <CardTitle className="text-md font-semibold text-card-foreground">Stories</CardTitle>
        <div className="flex space-x-2">
          <Button variant="ghost" size="sm" className="text-xs text-primary hover:bg-accent p-1 h-auto">
            <Archive className="h-3.5 w-3.5 mr-1" /> Archive
          </Button>
          <Button variant="ghost" size="sm" className="text-xs text-primary hover:bg-accent p-1 h-auto">
            <Settings className="h-3.5 w-3.5 mr-1" /> Settings
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-3">
        <div
          className="flex items-center space-x-3 p-2.5 border border-dashed border-border rounded-lg hover:bg-accent cursor-pointer mb-3 transition-colors"
        >
          <PlusCircle className="h-8 w-8 text-primary" />
          <div>
            <p className="font-medium text-sm text-card-foreground">Add to Your Story</p>
            <p className="text-xs text-muted-foreground">Share a photo, video or write something</p>
          </div>
        </div>
        
        {/* Horizontal scroll for stories */} 
        <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent -mx-1 px-1">
          {storiesData.map((story) => (
            <div key={story.id} className="flex-shrink-0 w-[80px] h-[120px] rounded-lg overflow-hidden relative cursor-pointer group">
              <img src={story.storyImageUrl} alt={`${story.userName}'s story`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200" />
              <div className={cn(
                  "absolute top-1.5 left-1.5 p-0.5 bg-card rounded-full",
                  !story.viewed && "ring-2 ring-primary ring-offset-1 ring-offset-card"
                )}>
                <Avatar className="h-6 w-6">
                  <AvatarImage src={story.userAvatarUrl} alt={story.userName} />
                  <AvatarFallback>{story.userName.substring(0,1)}</AvatarFallback>
                </Avatar>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-1.5 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white text-[10px] font-medium truncate">{story.userName}</p>
              </div>
            </div>
          ))}
           {storiesData.length === 0 && (
            <div className="text-center text-muted-foreground text-xs py-4 w-full">
              No stories to show.
            </div>
           )}
        </div>
      </CardContent>
    </Card>
  );
};

export default StoriesPanel;
