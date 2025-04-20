import React from 'react'
import SideMenu from '../components/SideMenu/SideMenu'
const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex h-screen placeholder:'>
      <SideMenu />
      <main className="bg-red-100 flex-1 overflow-auto">{children}</main>
    </div>
  )
}

export default MainLayout