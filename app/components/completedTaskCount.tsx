interface CompletedTaskCountProps {
    completedTasks: number;
    totalTasks: number;
  }
  
  const CompletedTaskCount: React.FC<CompletedTaskCountProps> = ({ completedTasks, totalTasks }) => {
    return (
      <div className="flex items-center">
        <span className="text-purple-500 text-xl font-medium mr-2">Completed</span>
        <div className="py-1 px-4 bg-purple-500 text-white rounded-full">
          {completedTasks} out of {totalTasks}
        </div>
      </div>
    );
  };
  
  export default CompletedTaskCount;
  