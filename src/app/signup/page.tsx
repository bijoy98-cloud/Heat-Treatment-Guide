import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Flame } from 'lucide-react';

export default function SignupPage() {
    const heroImage = PlaceHolderImages.find((img) => img.id === 'login-hero');
  return (
    <div className="w-full min-h-screen lg:grid lg:grid-cols-2">
       <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold font-headline">Sign Up</h1>
            <p className="text-balance text-muted-foreground">
              Create an account to get started.
            </p>
          </div>
          <div className="grid gap-4">
             <div className="grid gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Max Robinson" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full" asChild>
                <Link href="/dashboard">Create Account</Link>
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{' '}
            <Link href="/login" className="underline">
              Login
            </Link>
          </div>
        </div>
      </div>
       <div className="hidden bg-muted lg:block relative">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="Molten Metal"
            width="1200"
            height="1800"
            className="h-full w-full object-cover"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-primary/60" />
        <div className="absolute top-8 left-8 text-primary-foreground flex items-center gap-2">
            <span className="text-2xl font-bold font-headline">Heat Treatment Guide</span>
        </div>
        <div className="absolute bottom-8 left-8 right-8 text-primary-foreground">
            <blockquote className="text-2xl font-semibold">
            &ldquo;The art of metallurgy is in controlling the fire within the steel.&rdquo;
            </blockquote>
            <p className="mt-2 text-lg">- Anonymous Blacksmith</p>
        </div>
      </div>
    </div>
  );
}
