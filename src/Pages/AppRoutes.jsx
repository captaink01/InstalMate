import { Routes, Route } from "react-router-dom";
import Login from "../Pages/login";
import Signup from "../Pages/Signup";
import Home from "../Pages/Home";
import TodoApp from "../Components/TodoApp/TodoApp";
import AddTask from "../Components/TodoApp/AddTask";
import ViewTasks from "../Components/TodoApp/ViewTasks";
import AppSelector from "../Pages/AppSelector"
import InstallMate from "../Components/TodoApp/Installment/InstallMate";
import CalculatorForm from "../Components/TodoApp/Installment/CalculatorForm";
import PaymentTracker from "../Components/Installment/PaymentTracker";
import Dashboard from "../Components/Dashboard";    

export default function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/TodoApp" element={<TodoApp />} />
        <Route path="/AddTask" element={<AddTask />} />
        <Route path="/ViewTasks" element={<ViewTasks />} />
        <Route path="/AppSelector" element={<AppSelector />} />
        <Route path="/InstallMate" element={<InstallMate />} />
        <Route path="/CalculatorForm" element={<CalculatorForm />} />
        <Route path="/PaymentTracker" element={<PaymentTracker />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}
