import { useState } from "react";
import { login } from "../api/user";
import { useAppContext } from "../context/AppContext";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setRefetch, setShowSnackbar } = useAppContext();

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    login(email, password)
      .then((resp) => {
        const { token } = resp;
        localStorage.setItem("token", token);
        setRefetch(true);
        setShowSnackbar({
          visible: true,
          message: "Login successful",
          type: "success",
        })
      })
      .catch(() =>
        setShowSnackbar({
          visible: true,
          message: "Incorrect email or password",
          type: "error",
        })
      );
  };

  return (
    <form className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <label className="block mb-4">
        <span className="text-gray-700">Email:</span>
        <input
          type="text"
          className="mt-1 p-2 w-full border rounded-md"
          value={email}
          onChange={handleEmailChange}
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Password:</span>
        <input
          type="password"
          className="mt-1 p-2 w-full border rounded-md"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <button
        type="submit"
        className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
        onClick={handleSubmit}
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
