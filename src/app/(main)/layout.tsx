import React from 'react'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex h-screen placeholder:'>
      <div className="bg-indigo-300">サイドメニュー</div>
        <main className="bg-red-300 flex-1 overflow-auto">{children}</main>
    </div>
  )
}

export default MainLayout