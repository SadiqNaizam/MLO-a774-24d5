import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import PostInput from '../components/NewsFeed/PostInput';
import Post from '../components/NewsFeed/Post';

// Define the structure for individual post data
// This mirrors the expected props for the Post component, excluding className
interface PostData {
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
}

const IndexPage: React.FC = () => {
  // Current user details, consistent with other components like PostInput
  const currentUser = {
    userName: "Olenna Mason",
    userAvatarUrl: "https://i.pravatar.cc/40?u=olenna",
  };

  // Dummy data for posts
  const postsData: PostData[] = [
    {
      id: "post-1",
      userName: "Julia Fillory",
      userAvatarUrl: "https://i.pravatar.cc/40?u=juliafillory",
      timestamp: "2 hrs ago",
      privacy: "Friends" as const,
      content: "Checking out some new stores downtown! Raleigh is bustling with energy. 🏙️\nFound this amazing little cafe too!\n#RaleighAdventures #UrbanExploration",
      imageUrl: "https://images.unsplash.com/photo-1568900193839-954cec640918?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l0eSUyMG1hcCUyMHN0cmVldHZpZXd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80", // More map-like
      likes: 58,
      comments: 12,
      shares: 3,
    },
    {
      id: "post-2",
      userName: "GadgetGuru",
      userAvatarUrl: "https://i.pravatar.cc/40?u=gadgetguru",
      timestamp: "Yesterday at 8:15 PM",
      privacy: "Public" as const,
      content: "Just got my hands on the new QuantumX smartphone and wow, it's a game-changer! 🚀\n\nThe display is absolutely stunning, and the camera system is miles ahead of the competition. Battery life seems promising too. Planning a full deep-dive review soon, stay tuned!\n\nWhat are your thoughts on the latest smartphone releases? Drop a comment! 👇\n#QuantumX #TechReview #NewPhone #Innovation",
      likes: 235,
      comments: 67,
      shares: 21,
    },
    {
      id: "post-3",
      userName: "Olenna Mason", // Current user can also have posts
      userAvatarUrl: currentUser.userAvatarUrl,
      timestamp: "3 days ago",
      privacy: "Friends" as const,
      content: "Wonderful weekend getaway! So refreshing to be surrounded by nature. 🌲☀️\nHighly recommend this spot for anyone needing a break from the city hustle.",
      imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=80",
      likes: 92,
      comments: 15,
      shares: 7,
    },
    {
      id: "post-4",
      userName: "Marcus Chen",
      userAvatarUrl: "https://i.pravatar.cc/40?u=marcuschen",
      timestamp: "August 10 at 11:30 AM",
      privacy: "Public" as const,
      content: "My new article on 'The Future of AI in Web Development' is now live! Check it out and let me know your thoughts. Link in bio.\n#AI #WebDevelopment #FutureTech #Article",
      likes: 180,
      comments: 45,
      shares: 12,
    },
  ];

  return (
    <MainAppLayout>
      {/* PostInput component for creating new posts */}
      <PostInput 
        userImageUrl={currentUser.userAvatarUrl} 
        userName={currentUser.userName} 
      />
      {/* List of Post components, mapped from postsData */}
      {postsData.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          userName={post.userName}
          userAvatarUrl={post.userAvatarUrl}
          timestamp={post.timestamp}
          privacy={post.privacy}
          content={post.content}
          imageUrl={post.imageUrl}
          likes={post.likes}
          comments={post.comments}
          shares={post.shares}
        />
      ))}
    </MainAppLayout>
  );
};

export default IndexPage;
