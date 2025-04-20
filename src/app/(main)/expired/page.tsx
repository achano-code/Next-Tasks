import React from 'react'
import TaskCard from '@/app/components/SideMenu/TaskCard/TaskCard'

const expiredPage = () => {
  return (
    <div className='text-gray-800 p-8 f-hull overflow-auto pb-24'>
      <header className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold flex-items-center'>Expired Tasks</h1>
      </header>
      <div className='mt-8 flex flex-wrap gap-4'>
        <TaskCard />
      </div>
    </div>
  )
}

export default expiredPage