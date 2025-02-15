"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useRouter } from "next/navigation";
import Title from "../components/title";
import ColorPicker from "../components/colorPicker";
import TaskParams from "../components/taskParams";

const CreateTask = () => {
  const [title, setTitle] = useState<string>("");
  const [color, setColor] = useState<string>("#000000");
  const [taskId, setTaskId] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (taskId) {
      const fetchTask = async () => {
        const response = await fetch(`http://localhost:3001/tasks/${taskId}`);
        const task = await response.json();
        setTitle(task.title);
        setColor(task.color);
      };
      fetchTask();
    }
  }, [taskId]);

  const handleCreateTask = async (e: React.FormEvent) => {
    e.preventDefault();

    const url = taskId
      ? `http://localhost:3001/tasks/${taskId}`
      : "http://localhost:3001/tasks";

    const method = taskId ? "PUT" : "POST";
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, color, completed: false }),
    });

    if (response.ok) {
      router.push("/");
    }
  };

  return (
    <div className="flex flex-col items-center bg-black py-6 min-h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        <TaskParams setTaskId={setTaskId} />
      </Suspense>
      <Title />
      <button
        onClick={() => router.push("/")}
        className="absolute top-4 left-4 text-white bg-blue-500 py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Back
      </button>
      <form
        onSubmit={handleCreateTask}
        className="bg-gray-900 p-8 rounded-md shadow-md space-y-4 w-full max-w-lg"
      >
        <div>
          <label htmlFor="title" className="block text-lg font-medium">
            Task Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-2 p-2 border rounded-md w-full text-black"
            required
          />
        </div>

        <ColorPicker selectedColor={color} setColor={setColor} />
        <button
          type="submit"
          className="mt-6 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 w-full"
        >
          {taskId ? "Update Task" : "Create Task"}
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
