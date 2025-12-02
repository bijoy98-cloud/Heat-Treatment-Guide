import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { tutorials } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { PlayCircle } from 'lucide-react';

export default function TutorialsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-headline">Skill Development Tutorials</h1>
        <p className="text-muted-foreground">
          A list of links to video resources for users to hone their craft.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tutorials.map((tutorial) => {
          const image = PlaceHolderImages.find(
            (img) => img.id === tutorial.imageId
          );
          return (
            <Link
              href={tutorial.url}
              key={tutorial.id}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <Card className="overflow-hidden transition-all group-hover:shadow-xl group-hover:-translate-y-1 h-full flex flex-col">
                <div className="relative h-48 w-full">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={tutorial.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                      data-ai-hint={image.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <PlayCircle className="h-16 w-16 text-white/70 transition-all group-hover:text-white group-hover:scale-110" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-headline text-lg">
                    {tutorial.title}
                  </CardTitle>
                  <CardDescription>{tutorial.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
