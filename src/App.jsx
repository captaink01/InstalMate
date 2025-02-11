import NavBar from "./Components/NavBar";
import AppRoutes from "./Pages/AppRoutes";
import { AuthProvider } from "./Components/AuthContext";

import "./App.css";


function App() {
  return (
    <div>
      <AuthProvider>
      <h1 className="text-6xl md:text-8xl font-extrabold text-center text-black tracking-wide leading-tight drop-shadow-2xl italic font-[cursive]">
        InstalMate
      </h1>
      <NavBar />
      <AppRoutes />
      </AuthProvider>
    
    </div>
  );
}

export default App;
