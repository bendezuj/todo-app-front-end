
import { useState, useEffect } from 'react';

interface Task {
  id: number;
  title: string;
  color: string;
  completed: boolean;
  timestamp: string;
}

const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch('http://localhost:3001/tasks');
      const data = await response.json();
      setTasks(Array.isArray(data) ? data : []);
    };

    fetchTasks();
  }, []);

  const handleToggleCompletion = async (id: number, completed: boolean) => {
    await fetch(`http://localhost:3001/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: !completed }),
    });

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !completed } : task
      )
    );
  };

  const handleDelete = async (id: number) => {
    await fetch(`http://localhost:3001/tasks/${id}`, { method: 'DELETE' });
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };
  const completedTasks = tasks.filter((task) => task.completed).length;

  return { tasks, handleToggleCompletion, handleDelete, completedTasks };
};

export default useTasks;
