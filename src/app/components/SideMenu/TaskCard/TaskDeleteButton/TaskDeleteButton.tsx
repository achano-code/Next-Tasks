'use client';

import { FaTrash } from 'react-icons/fa6';
import { deleteTask, FormState } from '@/actions/task';
import { useFormState, useFormStatus } from 'react-dom';
import { useEffect } from 'react';
interface TaskDeleteButtonProps {
  id: string;
}

const TaskDeleteButton: React.FC<TaskDeleteButtonProps> = ({ id }) => {
  const deleteTaskWithId = deleteTask.bind(null, id);
  const initialState: FormState = { error: "" };
  const [state, formAction] = useFormState(deleteTaskWithId, initialState);

  useEffect(() => {
    if (state.error) {
      alert(state.error);
    }
  }, [state]);

  const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (
      <button type="submit" className='hover:text-gray-700 text-lg cursor-pointer' disabled={pending}>
        <FaTrash />
      </button>
    )
  }

  return (
    <form action={formAction}>
      <SubmitButton />
    </form>
  )
}

export default TaskDeleteButton