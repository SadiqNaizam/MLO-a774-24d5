import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Plus, Users } from 'lucide-react';

interface SuggestedGroup {
  id: string;
  name: string;
  members: number;
  imageUrl?: string;
  category?: string;
}

interface SuggestionsPanelProps {
  className?: string;
}

const SuggestionsPanel: React.FC<SuggestionsPanelProps> = ({ className }) => {
  const suggestedGroupsData: SuggestedGroup[] = [
    {
      id: 'group1',
      name: 'Mad Men (MADdicts)',
      members: 6195,
      imageUrl: 'https://picsum.photos/seed/madmen/200/100', // Placeholder image
      category: 'TV Show Fan Club',
    },
    {
      id: 'group2',
      name: 'Dexter Morgan Fans',
      members: 6984,
      imageUrl: 'https://picsum.photos/seed/dexter/200/100', // Placeholder image
      category: 'TV Series Community',
    },
    {
      id: 'group3',
      name: 'React Developers Hub',
      members: 12050,
      imageUrl: 'https://picsum.photos/seed/reactdev/200/100',
      category: 'Technology',
    },
  ];

  return (
    <Card className={cn('bg-card rounded-lg shadow-sm w-full', className)}>
      <CardHeader className="flex flex-row items-center justify-between p-3 border-b border-border">
        <CardTitle className="text-md font-semibold text-card-foreground">Suggested Groups</CardTitle>
        <Button variant="link" size="sm" className="text-xs text-primary hover:underline p-0 h-auto">
          See All
        </Button>
      </CardHeader>
      <CardContent className="p-3 space-y-3">
        {suggestedGroupsData.map((group) => (
          <div key={group.id} className="flex items-start space-x-3">
            <Avatar className="h-16 w-24 rounded-md flex-shrink-0">
              {group.imageUrl ? (
                <AvatarImage src={group.imageUrl} alt={group.name} className="object-cover w-full h-full" />
              ) : (
                <Users className="h-full w-full p-2 text-muted-foreground bg-secondary" />
              )}
              <AvatarFallback className="w-full h-full flex items-center justify-center bg-secondary rounded-md">
                {group.name.substring(0,1)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-grow min-w-0">
              <a href="#" className="font-medium text-sm text-card-foreground hover:underline truncate block">
                {group.name}
              </a>
              <p className="text-xs text-muted-foreground">
                {group.members.toLocaleString()} members
                {group.category && ` • ${group.category}`}
              </p>
              <Button variant="outline" size="sm" className="mt-1.5 h-7 px-3 text-xs">
                <Plus className="h-3.5 w-3.5 mr-1" /> Join
              </Button>
            </div>
          </div>
        ))}
        {suggestedGroupsData.length === 0 && (
           <div className="text-center text-muted-foreground text-xs py-4">
             No suggestions at this time.
           </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SuggestionsPanel;
