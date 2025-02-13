import NavBar from "./Components/NavBar";
import AppRoutes from "./Pages/AppRoutes";
import { AuthProvider } from "./Components/AuthContext";

import "./App.css";


function App() {
  return (
    <div>
      <AuthProvider>
      <NavBar />
      <AppRoutes />
      </AuthProvider>
    
    </div>
  );
}

export default App;
