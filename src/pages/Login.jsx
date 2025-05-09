import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import logo from "../assets/logo.png";
import backgroundImage from "../assets/bg.png";
import Button from "../components/Button";
import InputField from "../components/InputField";

export default function Login({ setIsAuthenticated }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dummyEmail = "admin@onewellness.com";
    const dummyPassword = "Admin@123";

    if (email === dummyEmail && password === dummyPassword) {
      setIsAuthenticated(true);
      toast.success("Login successful! Welcome to One Wellness.");
      navigate("/dashboard");
    } else {
      setError("Invalid email or password");
      toast.error("Invalid email or password");
    }
  };

  const handleForgotPassword = () => {
    navigate("/forget-password");
  };

  return (
    <div className="relative flex overflow-y-auto text-black h-screen">
      <img
        src={backgroundImage}
        alt="Background"
        className="absolute inset-0 w-full h-full"
      />
      <div className="relative w-full flex items-center justify-center h-full">
        <Toaster />
        <div className="max-w-[564px] w-full animate-slideInLeft lg:p-8 p-4 rounded-lg">
          <div className="flex justify-center animate-bounceIn">
            <img src={logo} alt="Logo" className="w-[56px] h-[116px]" />
          </div>
          <h1 className="lg:text-[40px] text-xl font-bold mb-8 text-black-150 text-center animate-fadeIn font-averia">
            Sign in/Log in
          </h1>
          <h1 className="text-[20px] text-center text-gray-150 font-medium animate-fadeIn font-manrope">
            Welcome Back👋
          </h1>

          <form className="space-y-5 mt-12 w-full animate-fadeIn font-manrope" onSubmit={handleSubmit}>
            <InputField
              label="Email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              autoComplete="off"
            />
            <InputField
              label="Password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="**********"
              autoComplete="new-password"
            />
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}
            <div>
              <button
                type="button"
                className="text-green-150 cursor-pointer font-medium text-base hover:underline"
                onClick={handleForgotPassword}
              >
                Forgot password?
              </button>
            </div>
            <Button type="submit">Login</Button>
          </form>
          <p className="mt-4 mb-4 text-center text-sm text-gray-450 px-4 font-medium font-manrope">
            By clicking on the "Create an Account" button, I consent to the processing of my personal data in accordance with the <span className="text-black-250">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
}