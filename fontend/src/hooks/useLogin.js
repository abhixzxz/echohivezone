import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext(); // Access setAuthUser from context

  const login = async (username, password) => {
    const success = handleInputErrors(username, password);
    if (!success) return;
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:8001/api/auth/login", {
        username,
        password,
      });

      const data = res.data;
      if (data.error) {
        throw new Error(data.error);
      }

      // Store user data in local storage
      localStorage.setItem("chat-user", JSON.stringify(data));

      // Update authUser in context with the logged-in user data
      setAuthUser(data);

      // No need to return data from here
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;

function handleInputErrors(username, password) {
  if (!username || !password) {
    toast.error("Please fill in all fields");
    return false;
  }
  return true;
}
