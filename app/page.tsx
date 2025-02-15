"use client";
import Link from "next/link";
import Title from "./components/title";
import useTasks from "./hooks/useTasks";
import Task from "./components/task";
import TaskCount from "./components/taskCount";
import CompletedTaskCount from "./components/completedTaskCount";

interface Task {
  id: number;
  title: string;
  color: string;
  completed: boolean;
}

export default function Home() {
  const { tasks, handleToggleCompletion, handleDelete, completedTasks } = useTasks();


  return (
      <div className="flex flex-col items-center bg-black py-6 min-h-screen">
        <Title />
        <div className="flex justify-between items-center w-full max-w-2xl mb-6">
          <TaskCount totalTasks={tasks.length} />
          <CompletedTaskCount completedTasks={completedTasks} totalTasks={tasks.length} />
        </div>
        <div className="space-y-4 w-full max-w-2xl">
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            completed={task.completed}
            color={task.color}
            handleToggleCompletion={handleToggleCompletion}
            handleDelete={handleDelete}
          />
        ))}
      </div>
        <Link href="/create" className="mt-6 py-2 px-[20%] bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Create Task
        </Link>
      </div>

  );
}
