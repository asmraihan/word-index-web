
"use client"

import { useState } from 'react'
import {
  ArrowDownAZ,
  ArrowUpAZ,
  SlidersHorizontal,
} from 'lucide-react';

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Header } from '@/components/header'
import { Main } from '@/components/main'
import ThemeToggle from '@/components/theme-toggle';
import Link from 'next/link';
// import { ProfileDropdown } from '@/components/profile-dropdown'
// import { Search } from '@/components/search'

const appText = new Map<string, string>([
  ['all', 'All Apps'],
  ['connected', 'Connected'],
  ['notConnected', 'Not Connected'],
])

export default function Apps() {
  const [sort, setSort] = useState('ascending')
  const [appType, setAppType] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const apps = [
    {
      name: 'Slack',
      desc: 'Slack brings team communication and collaboration into one place so you can get more work done, whether you belong to a large enterprise or a small business.',
      logo: <img src='/slack.svg' alt='Slack' className='h-6 w-6' />,
      connected: true,
    },
    {
      name: 'Trello',
      desc: 'Trello’s boards, lists, and cards enable teams to organize and prioritize projects in a fun, flexible, and rewarding way.',
      logo: <img src='/trello.svg' alt='Trello' className='h-6 w-6' />,
      connected: true,
    },
    {
      name: 'Asana',
      desc: 'Asana helps you plan, organize, and manage Agile projects and Scrum sprints in a tool that\'s as flexible and collaborative as your team.',
      logo: <img src='/asana.svg' alt='Asana' className='h-6 w-6' />,
      connected: false,
    },
    {
      name: 'GitHub',
      desc: 'GitHub is where over 65 million developers shape the future of software, together. Contribute to the open source community, manage your Git repositories, review code like a pro, track bugs and features, power your CI/CD and DevOps workflows, and secure code before you commit it.',
      logo: <img src='/github.svg' alt='GitHub' className='h-6 w-6' />,
      connected: false,
    },
    {
      name: 'Google Drive',
      desc: 'Google Drive is a safe place for all your files and puts them within reach from any smartphone, tablet, or computer. Files in Drive – like your videos, photos, and documents – are backed up safely so you can’t lose them.',
      logo: <img src='/google-drive.svg' alt='Google Drive' className='h-6 w-6' />,
      connected: true,
    },
    {
      name: 'Zoom',
      desc: 'Zoom is the leader in modern enterprise video communications, with an easy, reliable cloud platform for video and audio conferencing, chat, and webinars across mobile, desktop, and room systems.',
      logo: <img src='/zoom.svg' alt='Zoom' className='h-6 w-6' />,
      connected: true,
    },
  ]

  const filteredApps = apps
    .filter((app) => {
      if (appType === 'all') return true
      if (appType === 'connected') return app.connected
      if (appType === 'notConnected') return !app.connected
      return false
    })
    .filter((app) => app.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sort === 'ascending') return a.name.localeCompare(b.name)
      if (sort === 'descending') return b.name.localeCompare(a.name)
      return
    })



  return (
    <>
      {/* ===== Top Heading ===== */}


      {/* ===== Content ===== */}
      <Main fixed>
        <div>
          <h1 className='text-2xl font-bold tracking-tight'>
            App Integrations
          </h1>
          <p className='text-muted-foreground'>
            Here&apos;s a list of your apps for the integration!
          </p>
        </div>
        <div className='my-4 flex items-end justify-between sm:my-0 sm:items-center'>
          <div className='flex flex-col gap-4 sm:my-4 sm:flex-row'>
            <Input
              placeholder='Filter apps...'
              className='h-9 w-40 lg:w-[250px]'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Select value={appType} onValueChange={setAppType}>
              <SelectTrigger className='w-36'>
                <SelectValue>{appText.get(appType)}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='all'>All Apps</SelectItem>
                <SelectItem value='connected'>Connected</SelectItem>
                <SelectItem value='notConnected'>Not Connected</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className='flex items-center gap-4'>

            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger className='w-16'>
                <SelectValue>
                  <SlidersHorizontal size={18} />
                </SelectValue>
              </SelectTrigger>
              <SelectContent align='end'>
                <SelectItem value='ascending'>
                  <div className='flex items-center gap-4'>
                    <ArrowDownAZ size={16} />
                    <span>Ascending</span>
                  </div>
                </SelectItem>
                <SelectItem value='descending'>
                  <div className='flex items-center gap-4'>
                    <ArrowUpAZ size={16} />
                    <span>Descending</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>

            <Button variant='default' className='hidden sm:block'>
              <Link href='/create'>
              Add Word
              </Link>
            </Button>
          </div>

        </div>
        <Separator className='shadow' />
        <ul className='faded-bottom no-scrollbar grid gap-4 overflow-auto pb-16 pt-4 md:grid-cols-2 lg:grid-cols-3'>
          {filteredApps.map((app) => (
            <li
              key={app.name}
              className='rounded-lg border p-4 hover:shadow-md'
            >
              <div className='mb-8 flex items-center justify-between'>
                <div
                  className={`flex size-10 items-center justify-center rounded-lg bg-muted p-2`}
                >
                  {app.logo}
                </div>
                <Button
                  variant='outline'
                  size='sm'
                  className={`${app.connected ? 'border border-blue-300 bg-blue-50 hover:bg-blue-100 dark:border-blue-700 dark:bg-blue-950 dark:hover:bg-blue-900' : ''}`}
                >
                  {app.connected ? 'Connected' : 'Connect'}
                </Button>
              </div>
              <div>
                <h2 className='mb-1 font-semibold'>{app.name}</h2>
                <p className='line-clamp-2 text-gray-500'>{app.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </Main>
    </>
  )
}