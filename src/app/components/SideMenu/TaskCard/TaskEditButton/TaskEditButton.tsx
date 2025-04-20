import React from 'react'
import { FaPen } from 'react-icons/fa6';
import Link from 'next/link';

interface TaskEditButtonProps {
  id: string;
}

const TaskEditButton: React.FC<TaskEditButtonProps> = ({ id }) => {
  return (
    <Link href={`/edit/${id}`}>
      <FaPen className='hover:text-gray-700 text-lg cursor-pointer' />
    </Link>
  )
}

export default TaskEditButton