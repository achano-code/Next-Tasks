import React from 'react'
import { TaskDocument } from '@/models/task';
import EditTaskForm from '@/app/components/EditTaskForm/EditTaskForm';
interface EditTaskPageProps {
  params: {
    id: string;
  };
}

const getTask = async (id: string): Promise<TaskDocument> => {
  const res = await fetch(`${process.env.API_URL}/tasks/${id}`, {cache: 'no-store'});
  const task = await res.json() as TaskDocument;
  return task;
}


const EditTaskPage: React.FC<EditTaskPageProps> = async ({params}) => {
  const id = params.id;
  const task = await getTask(id);

  return (
    <div className='flex flex-col justify-center py-20'>
      <h2 className='text-center text-2xl font-bold'>Edit Task</h2>
      <EditTaskForm task={task} />
    </div>
  )
}

export default EditTaskPage