import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import {
  MoreHorizontal,
  ThumbsUp,
  MessageSquare,
  Share2,
  Globe
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface PostProps {
  id: string;
  userName: string;
  userAvatarUrl: string;
  timestamp: string;
  privacy?: 'Public' | 'Friends';
  content: string;
  imageUrl?: string;
  likes: number;
  comments: number;
  shares: number;
  className?: string;
}

const Post: React.FC<PostProps> = ({
  id,
  userName,
  userAvatarUrl,
  timestamp,
  privacy = 'Public' as const,
  content,
  imageUrl,
  likes,
  comments,
  shares,
  className,
}) => {
  const [isLiked, setIsLiked] = React.useState<boolean>(false);
  const [currentLikes, setCurrentLikes] = React.useState<number>(likes);

  const handleLike = () => {
    if (isLiked) {
      setCurrentLikes(currentLikes - 1);
    } else {
      setCurrentLikes(currentLikes + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <Card className={cn('bg-card rounded-lg shadow-sm overflow-hidden', className)}>
      <CardHeader className="flex flex-row items-center justify-between p-3 sm:p-4">
        <div className="flex items-center space-x-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={userAvatarUrl} alt={userName} />
            <AvatarFallback>{userName.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <a href="#" className="font-semibold text-sm text-card-foreground hover:underline">
              {userName}
            </a>
            <div className="flex items-center space-x-1 text-xs text-muted-foreground">
              <span>{timestamp}</span>
              <span className="font-bold">·</span>
              {privacy === 'Public' && <Globe className="h-3 w-3" />}
              {privacy === 'Friends' && <Users className="h-3 w-3" />}
            </div>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
              <MoreHorizontal className="h-5 w-5 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Save post</DropdownMenuItem>
            <DropdownMenuItem>Hide post</DropdownMenuItem>
            <DropdownMenuItem>Report post</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>

      {content && (
        <CardContent className="px-3 sm:px-4 py-2 text-sm text-card-foreground whitespace-pre-wrap">
          {content}
        </CardContent>
      )}

      {imageUrl && (
        <div className="bg-black">
          <img src={imageUrl} alt={`Post by ${userName}`} className="w-full max-h-[500px] object-contain" />
        </div>
      )}

      {(likes > 0 || comments > 0 || shares > 0) && (
        <div className="px-3 sm:px-4 py-2.5 flex items-center justify-between text-xs text-muted-foreground border-t border-border">
          <div className="flex items-center space-x-1">
            {currentLikes > 0 && (
              <>
                <ThumbsUp className="h-4 w-4 text-primary fill-primary" />
                <span>{currentLikes}</span>
              </>
            )}
          </div>
          <div className="flex space-x-3">
            {comments > 0 && <span>{comments} Comments</span>}
            {shares > 0 && <span>{shares} Shares</span>}
          </div>
        </div>
      )}

      <CardFooter className="p-0 border-t border-border">
        <div className="flex justify-around items-center w-full">
          <Button
            variant="ghost"
            className={cn('flex-1 text-muted-foreground hover:bg-accent py-2.5 text-sm rounded-none', isLiked && 'text-primary')}
            onClick={handleLike}
          >
            <ThumbsUp className={cn('h-5 w-5 mr-2', isLiked && 'fill-primary')} /> Like
          </Button>
          <Button variant="ghost" className="flex-1 text-muted-foreground hover:bg-accent py-2.5 text-sm rounded-none">
            <MessageSquare className="h-5 w-5 mr-2" /> Comment
          </Button>
          <Button variant="ghost" className="flex-1 text-muted-foreground hover:bg-accent py-2.5 text-sm rounded-none">
            <Share2 className="h-5 w-5 mr-2" /> Share
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Post;
