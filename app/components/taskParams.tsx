"use client";
import { useSearchParams } from "next/navigation";

const TaskParams = ({ setTaskId }: { setTaskId: (id: string | null) => void }) => {
  const searchParams = useSearchParams();
  const taskId = searchParams.get("id");
  setTaskId(taskId);
  return null;
};

export default TaskParams;
