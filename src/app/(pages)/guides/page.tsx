import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { guides } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function GuidesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-headline">Process Explanation Guides</h1>
        <p className="text-muted-foreground">
          In-depth guides on various heat treatment processes with illustrations
          and examples.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {guides.map((guide) => {
          const image = PlaceHolderImages.find((img) => img.id === guide.imageId);
          return (
            <Card
              key={guide.slug}
              className="flex flex-col overflow-hidden transition-all hover:shadow-lg"
            >
              {image && (
                <div className="relative h-48 w-full">
                  <Image
                    src={image.imageUrl}
                    alt={guide.title}
                    fill
                    className="object-cover"
                    data-ai-hint={image.imageHint}
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="font-headline">{guide.title}</CardTitle>
                <CardDescription>{guide.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1"></CardContent>
              <CardFooter>
                <Button asChild className="w-full" variant="secondary">
                  <Link href={`/guides/${guide.slug}`}>Read Guide</Link>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
