import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import logo from "../assets/logo.png";
import backgroundImage from "../assets/bg.png";
import Button from "../components/Button";

export default function Verify() {
    const navigate = useNavigate();
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [error, setError] = useState("");
    const inputRefs = useRef([]);

    const handleOtpChange = (index, value) => {
        if (/^\d?$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // Move to next input if value is entered and not the last input
            if (value && index < 3) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (index, e) => {
        // Move to previous input on backspace if current input is empty
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const code = otp.join("");
        if (code.length === 4 && /^\d{4}$/.test(code)) {
            // Dummy verification logic (replace with actual API call)
            toast.success("Code verified successfully!");
            navigate("/reset-password"); // Navigate to reset password route
        } else {
            setError("Please enter a valid 4-digit code");
            toast.error("Invalid code");
        }
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
                <div className="max-w-[480px] w-full animate-slideInLeft p-8 rounded-lg">
                    <div className="flex justify-center animate-bounceIn">
                        <img src={logo} alt="Logo" className="w-[56px] h-[116px]" />
                    </div>
                    <h1 className="lg:text-[40px] text-xl font-bold mb-8 text-black-150 text-center animate-fadeIn font-averia">
                        Enter Code
                    </h1>
                    <h1 className="text-[20px] text-center text-gray-150 font-medium animate-fadeIn font-manrope">
                        Check your mail and enter PIN
                    </h1>

                    <form className="space-y-6 mt-12 w-full animate-fadeIn font-manrope" onSubmit={handleSubmit}>
                        <label htmlFor="pin" className="block mb-2 text-sm font-medium text-black-250 font-manrope">
                            Check your mail and enter PIN
                        </label>
                        <div className="flex justify-center space-x-4">

                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    maxLength="1"
                                    value={digit}
                                    onChange={(e) => handleOtpChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    ref={(el) => (inputRefs.current[index] = el)}
                                    className="w-full h-24 text-center rounded-3xl border border-gray-250 p-2 text-lg font-medium focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
                                    placeholder="-"
                                />
                            ))}
                        </div>
                        {error && (
                            <p className="text-red-500 text-sm text-center">{error}</p>
                        )}
                        <Button type="submit">Continue to login</Button>
                    </form>

                </div>
            </div>
        </div>
    );
}