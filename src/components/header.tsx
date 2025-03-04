"use client"
import React from 'react'
import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'
import ThemeToggle from './theme-toggle'

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  fixed?: boolean
  ref?: React.Ref<HTMLElement>
}

export const Header = ({
  className,
  fixed,
  children,
  ...props
}: HeaderProps) => {
  const [offset, setOffset] = React.useState(0)

  React.useEffect(() => {
    const onScroll = () => {
      setOffset(document.body.scrollTop || document.documentElement.scrollTop)
    }

    // Add scroll listener to the body
    document.addEventListener('scroll', onScroll, { passive: true })

    // Clean up the event listener on unmount
    return () => document.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div>
      <header
        className={cn(
          'flex h-16 items-center justify-between gap-3 bg-background p-4 sm:gap-4',
          fixed && 'header-fixed peer/header fixed z-50 w-full rounded-md',
          offset > 10 && fixed ? 'shadow' : 'shadow-none',
          className
        )}
        {...props}
      >
        <div className='flex gap-3 items-center '>
          <SidebarTrigger variant='outline' className='scale-125 sm:scale-100' />
          <Separator orientation='vertical' className='h-6' />
        </div>
        <ThemeToggle />
      </header>
      </div>
  )
}

Header.displayName = 'Header'