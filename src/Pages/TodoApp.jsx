
import { useAuth } from "../Components/AuthContext";
import { useNavigate } from "react-router-dom";



export default function TodoApp() {
    const { user } = useAuth();
    const navigate = useNavigate();
  const handleAddTask =  () => navigate("/AddTask");
 const handleViewTask = () => navigate('/ViewTasks')


  
  return (
    <div>
       <h2>Welcome, {user ? user.userName : "Guest"}</h2>
     <button onClick={handleAddTask}>Add task</button>
     <button onClick={handleViewTask}>View tasks</button>

    </div>
  )
}
