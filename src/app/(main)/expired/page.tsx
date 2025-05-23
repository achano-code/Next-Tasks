import React from 'react'
import TaskCard from '@/app/components/SideMenu/TaskCard/TaskCard'
import { TaskDocument } from '@/models/task'

const getExpiredTasks = async (): Promise<TaskDocument[]> => {
  const res = await fetch(`${process.env.API_URL}/tasks/expired`, {
    cache: 'no-store',
  });
  if (res.status !== 200) {
    throw new Error('Failed to fetch tasks');
  }

  const data = await res.json();
  return data.tasks;
}

const expiredPage = async () => {
  const expiredTasks = await getExpiredTasks();

  return (
    <div className='text-gray-800 p-8 f-hull overflow-auto pb-24'>
      <header className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold flex-items-center'>Expired Tasks</h1>
      </header>
      <div className='mt-8 flex flex-wrap gap-4'>
        {expiredTasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  )
}

export default expiredPage