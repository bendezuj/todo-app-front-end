import React from "react";
import Link from "next/link";

interface TaskProps {
  id: number;
  title: string;
  completed: boolean;
  color: string;
  handleToggleCompletion: (id: number, completed: boolean) => void;
  handleDelete: (id: number) => void;
}

const Task: React.FC<TaskProps> = ({
  id,
  title,
  completed,
  color,
  handleToggleCompletion,
  handleDelete,
}) => {
  return (
    <div className="flex justify-between items-center p-4 rounded-md shadow-md cursor-pointer hover:bg-gray-100">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleToggleCompletion(id, completed)}
        className="mr-3 w-6 h-6"
      />
      <Link href={`/create?id=${id}`} className="flex items-center flex-grow">
        <span
          className={`font-medium ${completed ? "line-through text-gray-500" : ""}`}
          style={{ color }}
        >
          {title}
        </span>
      </Link>
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleDelete(id);
        }}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
