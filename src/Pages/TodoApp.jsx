
import { useAuth } from "../Components/AuthContext";



export default function TodoApp() {
    const { user } = useAuth();
  
  return (
    <div>
       <h2>Welcome, {user ? user.userName : "Guest"}</h2>
    </div>
  )
}
