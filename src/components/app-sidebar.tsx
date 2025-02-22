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
  } from '@/components/ui/sidebar'
  import { NavGroup } from '@/components/nav-group'
//   import { NavUser } from '@/components/layout/nav-user'
//   import { TeamSwitcher } from '@/components/layout/team-switcher'
  import { sidebarData } from '../app/data/sidebar-data'
  import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

  export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    // Menu items.
const items = [
    {
      title: "Home",
      url: "#",
      icon: Home,
    },
    {
      title: "Inbox",
      url: "#",
      icon: Inbox,
    },
    {
      title: "Calendar",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
  ]
    return (
      <Sidebar collapsible='icon' variant='floating' {...props}>
        <SidebarHeader>
          {/* <TeamSwitcher teams={sidebarData.teams} /> */}
        </SidebarHeader>
        <SidebarContent>
          {/* {sidebarData.navGroups.map((props) => (
            <NavGroup key={props.title} {...props} />
          ))} */}
           <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
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