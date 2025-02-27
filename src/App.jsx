import NavBar from "./Components/NavBar";
import AppRoutes from "./Pages/AppRoutes";
import { AuthProvider } from "./Components/AuthContext";

function App() {
  return (
    <div>
      <div
        className="min-h-screen bg-fixed bg-cover bg-center fixed top-0 left-0 w-full h-full -z-10 "
        style={{
          backgroundImage: `url('/images/page-turner.svg')`,
        }}
      ></div>

      <div className="relative z-10">
        <AuthProvider>
          <NavBar />
          <AppRoutes />
        </AuthProvider>
      </div>
    </div>
  );
}

export default App;
