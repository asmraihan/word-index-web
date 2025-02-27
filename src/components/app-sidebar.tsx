"use client"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    useSidebar,
  } from '@/components/ui/sidebar'
//   import { NavUser } from '@/components/layout/nav-user'
//   import { TeamSwitcher } from '@/components/layout/team-switcher'
  import { sidebarData } from '../app/data/sidebar-data'
  import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import { TeamSwitcher } from './team-switcher'

  export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const pathname = usePathname();
    const { state, isMobile } = useSidebar();

    // Menu items.
const items = [
    {
      title: "Home",
      url: "/list",
      icon: Home,
    },
    {
      title: "Inbox",
      url: "/login",
      icon: Inbox,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Calendar,
    },
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
  ]
    return (
      <Sidebar collapsible='icon' variant='floating' {...props}>
        <SidebarHeader>
          <TeamSwitcher teams={sidebarData.teams} />
        </SidebarHeader>
        <SidebarContent>
         
           <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild
                    isActive={pathname === item.url}
                  >
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          {/* <NavUser user={sidebarData.user} /> */}
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
    )
  }