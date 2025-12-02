import Link from 'next/link';
import {
  ArrowRight,
  Bot,
  Shield,
  Flame,
  Book,
  Users,
  CircleHelp,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const featureCards = [
  {
    title: 'AI Parameter Calculator',
    description: 'Get optimized parameters for your heat treatment processes.',
    href: '/calculator',
    icon: Bot,
  },
  {
    title: 'Comprehensive Alloy Database',
    description: 'Search and explore detailed information on various alloys.',
    href: '/alloys',
    icon: Shield,
  },
  {
    title: 'Process Explanation Guides',
    description: 'In-depth guides on various heat treatment processes.',
    href: '/guides',
    icon: Flame,
  },
  {
    title: 'Interactive Glossary',
    description: 'Definitions for key metallurgy and heat treatment terms.',
    href: '/glossary',
    icon: Book,
  },
  {
    title: 'Community Forum',
    description: 'Discuss challenges and share experiences with peers.',
    href: '/community',
    icon: Users,
  },
  {
    title: 'Skill Development Tutorials',
    description: 'Curated video resources to hone your craft.',
    href: '/tutorials',
    icon: CircleHelp,
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <Card className="border-0 shadow-none -m-6 -mt-10 bg-gradient-to-br from-primary/10 to-transparent rounded-none">
        <CardHeader className="p-6 pt-10">
          <CardTitle className="text-3xl font-headline">
            Welcome to the Heat Treating Hub
          </CardTitle>
          <CardDescription className="text-lg">
            Your AI-powered assistant for metallurgy and heat treatment.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="max-w-2xl">
            Whether you&apos;re a seasoned metallurgist or just starting out, our
            tools and resources are designed to help you achieve optimal results.
            Use the AI Calculator for precise parameters, or browse our extensive
            database and guides to expand your knowledge.
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featureCards.map((feature) => (
          <Card
            key={feature.title}
            className="flex flex-col transition-all hover:shadow-md hover:-translate-y-1"
          >
            <CardHeader className="flex-row items-start gap-4 space-y-0 pb-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <CardTitle className="font-headline">{feature.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
            <CardContent>
              <Button asChild variant="outline" className="w-full">
                <Link href={feature.href}>
                  Go to {feature.title.split(' ')[0]} <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
