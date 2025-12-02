import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { communityPosts } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MessageSquare, Plus } from 'lucide-react';

export default function CommunityPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-headline">Community Forum</h1>
          <p className="text-muted-foreground">
            Discuss challenges, share experiences, and ask questions.
          </p>
        </div>
        <Button>
          <Plus className="mr-2" />
          Start a Discussion
        </Button>
      </div>

      <div className="space-y-4">
        {communityPosts.map((post) => {
          const authorImage = PlaceHolderImages.find(
            (img) => img.id === post.authorImageId
          );
          return (
            <Card key={post.id} className="transition-all hover:shadow-md">
              <CardContent className="p-4 flex items-start gap-4">
                <Avatar>
                  {authorImage && (
                    <AvatarImage
                      src={authorImage.imageUrl}
                      alt={post.author}
                      data-ai-hint={authorImage.imageHint}
                    />
                  )}
                  <AvatarFallback>
                    {post.author.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-semibold">{post.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    Posted by {post.author} &middot; {post.date}
                  </p>
                  <p className="mt-2 text-sm">{post.content}</p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <MessageSquare className="h-4 w-4" />
                  <span>{post.replies}</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
