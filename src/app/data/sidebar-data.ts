
  import { AudioWaveform, Command, GalleryVerticalEnd } from 'lucide-react'
  import { type SidebarData } from '../../types/sidebar-data-types'
  
  export const sidebarData: SidebarData = {
    user: {
      name: 'satnaing',
      email: 'satnaingdev@gmail.com',
      avatar: '/avatars/shadcn.jpg',
    },
    teams: [
      {
        name: 'Shadcn Admin',
        logo: Command,
        plan: 'Vite + ShadcnUI',
      },
      {
        name: 'Acme Inc',
        logo: GalleryVerticalEnd,
        plan: 'Enterprise',
      },
      {
        name: 'Acme Corp.',
        logo: AudioWaveform,
        plan: 'Startup',
      },
    ],
    navGroups: [
      {
        title: 'General',
        items: [
          {
            title: 'Dashboard',
            url: '/',
            icon: AudioWaveform,
          },
          {
            title: 'Tasks',
            url: '/tasks',
            icon: AudioWaveform,
          },
          {
            title: 'Apps',
            url: '/apps',
            icon: AudioWaveform,
          },
          {
            title: 'Chats',
            url: '/chats',
            badge: '3',
            icon: AudioWaveform,
          },
          {
            title: 'Users',
            url: '/users',
            icon: AudioWaveform,
          },
        ],
      },
      {
        title: 'Pages',
        items: [
          {
            title: 'Auth',
            icon: AudioWaveform,
            items: [
              {
                title: 'Sign In',
                url: '/sign-in',
              },
              {
                title: 'Sign In (2 Col)',
                url: '/sign-in-2',
              },
              {
                title: 'Sign Up',
                url: '/sign-up',
              },
              {
                title: 'Forgot Password',
                url: '/forgot-password',
              },
              {
                title: 'OTP',
                url: '/otp',
              },
            ],
          },
          {
            title: 'Errors',
            icon: AudioWaveform,
            items: [
              {
                title: 'Unauthorized',
                url: '/401',
                icon: AudioWaveform,
              },
              {
                title: 'Forbidden',
                url: '/403',
                icon: AudioWaveform,
              },
              {
                title: 'Not Found',
                url: '/404',
                icon: AudioWaveform,
              },
              {
                title: 'Internal Server Error',
                url: '/500',
                icon: AudioWaveform,
              },
              {
                title: 'Maintenance Error',
                url: '/503',
                icon: AudioWaveform,
              },
            ],
          },
        ],
      },
      {
        title: 'Other',
        items: [
          {
            title: 'Settings',
            icon: AudioWaveform,
            items: [
              {
                title: 'Profile',
                url: '/settings',
                icon: AudioWaveform,
              },
              {
                title: 'Account',
                url: '/settings/account',
                icon: AudioWaveform,
              },
              {
                title: 'Appearance',
                url: '/settings/appearance',
                icon: AudioWaveform,
              },
              {
                title: 'Notifications',
                url: '/settings/notifications',
                icon: AudioWaveform,
              },
              {
                title: 'Display',
                url: '/settings/display',
                icon: AudioWaveform,
              },
            ],
          },
          {
            title: 'Help Center',
            url: '/help-center',
            icon: AudioWaveform,
          },
        ],
      },
    ],
  }