'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

interface NavItemProps {
  label: string;
  link: string;
  icon: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ label, link, icon }) => {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <Link href={link} className={`flex items-center gap-2 px-4 py-2 hover:bg-gray-700
    ${pathname === link ? 'bg-gray-600' : ''}`}>
      <div className='mr-1'>{icon}</div>
      <div>{label}</div>
    </Link>
  )
}

export default NavItem