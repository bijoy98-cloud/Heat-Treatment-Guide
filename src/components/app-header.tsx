'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Book,
  Bot,
  CircleHelp,
  Flame,
  LayoutDashboard,
  LogOut,
  Settings,
  Shield,
  User,
  Users,
} from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'AI Calculator', href: '/calculator', icon: Bot },
  { name: 'Alloy Database', href: '/alloys', icon: Shield },
  { name: 'Process Guides', href: '/guides', icon: Flame },
  { name: 'Glossary', href: '/glossary', icon: Book },
  { name: 'Tutorials', href: '/tutorials', icon: CircleHelp },
  { name: 'Community', href: '/community', icon: Users },
];

export function AppHeader() {
  const pathname = usePathname();
  const pageTitle =
    navigation.find((item) => item.href === pathname)?.name || 'Heat Treatment Guide';

  const userAvatar = PlaceHolderImages.find((img) => img.id === 'user-avatar');

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-6">
      <div className="md:hidden">
        <SidebarTrigger />
      </div>
      <h1 className="text-lg font-semibold md:text-xl font-headline">{pageTitle}</h1>
      <div className="ml-auto flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-9 w-9 rounded-full">
              <Avatar className="h-9 w-9">
                {userAvatar && (
                  <AvatarImage
                    src={userAvatar.imageUrl}
                    alt="User Avatar"
                    data-ai-hint={userAvatar.imageHint}
                  />
                )}
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuLabel>
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">Metallurgist</p>
                <p className="text-xs leading-none text-muted-foreground">
                  user@heattreat.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <User className="mr-2" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2" />
                <span>Settings</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/login">
                <LogOut className="mr-2" />
                <span>Log out</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
