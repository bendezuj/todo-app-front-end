interface TaskCountProps {
    totalTasks: number;
  }
  
  const TaskCount: React.FC<TaskCountProps> = ({ totalTasks }) => {
    return (
      <div className="flex items-center">
        <span className="text-blue-500 text-xl font-medium mr-2">Tasks</span>
        <div className="w-8 h-8 flex justify-center items-center bg-blue-500 text-white rounded-full">
          {totalTasks}
        </div>
      </div>
    );
  };
  
  export default TaskCount;
  