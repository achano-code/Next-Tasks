"use server";

import { Task } from "@/models/task";
import { connectDB } from "@/app/utils/database";
import { TaskModel } from "@/models/task";
import { redirect } from "next/navigation";

export interface FormState {
  error: string;
}

export const createTask = async (state: FormState, formData: FormData) => {
  const newTask: Task = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    dueDate: formData.get("dueDate") as string,
    isCompleted: false,
  };

  try {
    await connectDB();
    await TaskModel.create(newTask);
  } catch (error) {
    state.error = "Failed to create task";
    return state;
  }

  redirect("/");
};

export const updateTask = async (id: string, state: FormState, formData: FormData) => {
  const updateTask: Task = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    dueDate: formData.get("dueDate") as string,
    isCompleted: Boolean(formData.get('isCompleted')
  )
  };

  try {
    await connectDB();
    await TaskModel.updateOne({_id: id}, updateTask);
  } catch (error) {
    state.error = "Failed to update task";
    return state;
  }

  redirect("/");
};

export const deleteTask = async (id: string, state: FormState) => {

  try {
    await connectDB();
    await TaskModel.deleteOne({_id: id});
  } catch (error) {
    state.error = "Failed to delete task";
    return state;
  }

  redirect("/");
};
