import { connectDB } from "@/app/utils/database"
import { TaskDocument, TaskModel } from "@/models/task"
import { NextResponse } from "next/server"

export const GET = async () => {
  try {
    await connectDB();
    const completedTasks: TaskDocument[] = await TaskModel.find({isCompleted: true});
    return NextResponse.json({message: 'タスク取得成功', tasks: completedTasks});
  } catch (error) {
    return NextResponse.json({message: 'タスク取得に失敗しました'}, {status: 500});
  }
}

export const dynamic = 'force-dynamic';