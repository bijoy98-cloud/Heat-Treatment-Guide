'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Book,
  Bot,
  CircleHelp,
  Flame,
  LayoutDashboard,
  Shield,
  Users,
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'AI Calculator', href: '/calculator', icon: Bot },
  { name: 'Alloy Database', href: '/alloys', icon: Shield },
  { name: 'Process Guides', href: '/guides', icon: Flame },
  { name: 'Glossary', href: '/glossary', icon: Book },
  { name: 'Tutorials', href: '/tutorials', icon: CircleHelp },
  { name: 'Community', href: '/community', icon: Users },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <Flame className="h-8 w-8 text-primary" />
          <h2 className="text-xl font-bold font-headline text-primary-foreground group-data-[collapsible=icon]:hidden">
            Heat Treating
          </h2>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navigation.map((item) => (
            <SidebarMenuItem key={item.name}>
              <Link href={item.href} legacyBehavior passHref>
                <SidebarMenuButton
                  isActive={pathname.startsWith(item.href)}
                  tooltip={item.name}
                >
                  <item.icon />
                  <span>{item.name}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="group-data-[collapsible=icon]:hidden">
        <Separator className="my-2" />
        <div className="p-4 bg-secondary/50 rounded-lg text-center space-y-2">
          <h3 className="font-semibold text-sm">Upgrade to Pro</h3>
          <p className="text-xs text-muted-foreground">
            Unlock advanced features and get unlimited access to our support team.
          </p>
          <Button variant="default" size="sm" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
            Upgrade
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
