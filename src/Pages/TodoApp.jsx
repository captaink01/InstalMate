
import { useAuth } from "../Components/AuthContext";
import { useNavigate } from "react-router-dom";



export default function TodoApp() {
    const { user } = useAuth();
    const navigate = useNavigate();
  const handleAddTask =  () => navigate("/AddTask");
 const handleViewTask = () => navigate('/ViewTasks')


  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
    {/* Heading */}
    <h2 className="text-4xl font-bold text-blue-600 mb-8">
      Welcome, {user ? user.userName : "Guest"}
    </h2>
  
    {/* Buttons Container */}
    <div className="flex justify-between w-full max-w-2xl px-4">
      {/* Add Task Button */}
      <button
        onClick={handleAddTask}
        className="bg-green-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Add Task
      </button>
  
      {/* View Tasks Button */}
      <button
        onClick={handleViewTask}
        className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        View Tasks
      </button>
    </div>
  </div>
  )
}
