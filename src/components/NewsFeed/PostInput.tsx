import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Video, Image, Smile } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface PostInputProps {
  className?: string;
  userImageUrl?: string;
  userName?: string;
}

const PostInput: React.FC<PostInputProps> = ({
  className,
  userImageUrl = 'https://i.pravatar.cc/40?u=olenna',
  userName = 'Olenna'
}) => {
  const [postText, setPostText] = React.useState<string>('');

  const actionButtons = [
    { label: 'Live Video', icon: Video, color: 'text-red-500' },
    { label: 'Photo/Video', icon: Image, color: 'text-green-500' },
    { label: 'Feeling/Activity', icon: Smile, color: 'text-yellow-500' },
  ];

  return (
    <Card className={cn('bg-card p-3 sm:p-4 rounded-lg shadow-sm', className)}>
      <CardContent className="p-0">
        <div className="flex items-center space-x-3 mb-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={userImageUrl} alt={userName} />
            <AvatarFallback>{userName.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <Input
            type="text"
            placeholder={`What's on your mind, ${userName}?`}
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            className="flex-1 rounded-full bg-secondary border-transparent hover:bg-muted focus:bg-background focus:border-primary h-10 px-4"
          />
        </div>
        <Separator className="my-3 bg-border" />
        <div className="flex justify-around items-center">
          {actionButtons.map((action) => (
            <Button
              key={action.label}
              variant="ghost"
              className="flex-1 text-muted-foreground hover:bg-accent py-2.5 text-xs sm:text-sm"
            >
              <action.icon className={cn('h-5 w-5 mr-1.5 sm:mr-2', action.color)} />
              {action.label}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PostInput;
