import { connectDB } from "@/app/utils/database";
import { TaskModel } from "@/models/task";
import { NextResponse } from "next/server";

interface Params {
  params: {
    id: string;
  };
}

export const GET = async (req: Request, { params }: Params) => {
  try {
    await connectDB();
    const task = await TaskModel.findById(params.id);

    if (!task) {
      return NextResponse.json(
        { message: "タスクが見つかりません" },
        { status: 404 }
      );
    }

    return NextResponse.json(task);
  } catch (error) {
    console.error("タスク取得エラー:", error);
    return NextResponse.json(
      { message: "タスク取得に失敗しました" },
      { status: 500 }
    );
  }
};

export const dynamic = "force-dynamic";
