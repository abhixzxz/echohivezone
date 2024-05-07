import "./App.css";
import Home from "./pages/home/home";
import LoginForm from "./pages/login/login";
import SignUpForm from "./pages/signup/signup";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import LogoutButton from "./components/Buttons/Logout";

function App() {
  const { authUser } = useAuthContext();

  return (
    <div className="">
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <LoginForm />}
        />
        <Route
          path="/sign-up"
          element={authUser ? <Navigate to="/" /> : <SignUpForm />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
