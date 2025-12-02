import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { guides } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type GuidePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export default function GuidePage({ params }: GuidePageProps) {
  const guide = guides.find((g) => g.slug === params.slug);

  if (!guide) {
    notFound();
  }

  const image = PlaceHolderImages.find((img) => img.id === guide.imageId);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-4">
        <Button asChild variant="ghost">
          <Link href="/guides">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Guides
          </Link>
        </Button>
      </div>

      <Card className="overflow-hidden">
        {image && (
          <div className="relative h-64 w-full">
            <Image
              src={image.imageUrl}
              alt={guide.title}
              fill
              className="object-cover"
              data-ai-hint={image.imageHint}
              priority
            />
          </div>
        )}
        <CardHeader>
          <CardTitle className="text-4xl font-headline">{guide.title}</CardTitle>
          <CardDescription className="text-lg">{guide.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose prose-lg max-w-none text-foreground/80">
            <p>{guide.content}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
