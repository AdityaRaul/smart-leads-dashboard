import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    try {

      const response = await api.post(
        "/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      window.location.href = "/dashboard";

    } catch (error) {

      alert("Invalid Credentials");
    }
  };

  return (

    <div className="min-h-screen flex justify-center items-center bg-gray-100">

      <div className="bg-white p-10 rounded-xl shadow w-[400px]">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Login
        </h1>

        <div className="flex flex-col gap-5">

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="border p-4 rounded-xl"
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="border p-4 rounded-xl"
          />

          <button
            onClick={handleLogin}
            className="bg-blue-600 text-white p-4 rounded-xl"
          >
            Login
          </button>

          <p className="text-center">

            Don't have account?

            <Link
              to="/register"
              className="text-blue-600 ml-2"
            >
              Register
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;