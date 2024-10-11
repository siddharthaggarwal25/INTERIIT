import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import axios from "axios";
import {toast, Toaster} from "react-hot-toast";
import { set } from "mongoose";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

     const handleSubmit = async (e) => {     
     e.preventDefault();
     if(email === "" || password === ""){
         toast("Please fill all the fields",
     {
           icon: "🛑",
      });
     
         return;
     }
     

     await axios.post("http://localhost:8000/login", {

               email,
               password,
     }
     ).then((res) => {
                    // console.log(res.data);
                    toast.success("User Logged In Successfully");
                    localStorage.setItem("userId", res.data.UserId);
                    setTimeout(() => {
                         window.location.href = "/";
                         }
                    , 2000);
          })
          .catch((err) => {
               // console.log(err.response);
                    if(err.response.status === 422){
                        toast.error("User does not exists");
                    }
                    else if(err.response.status === 403){
                        toast.error("Incorrect password");
                    }
                    else{
                        toast.error("Something went wrong");
                    }
          });
     }
     

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
          <Toaster />
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-8">Login</h2>
        {/* Login Form */}
        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="email"
              placeholder="Enter your email"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#ae01ff] focus:border-[#ae01ff]"
              required
            />
          </div>
          <div className="">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="h-full relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#ae01ff] focus:border-[#ae01ff]"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-3 h-full items-center mt-1"
            >
              {showPassword ? (
                <FaRegEye className="h-6 w-6"  />
                  
              ) : (
                    <FaRegEyeSlash className="h-6 w-6 " />
              )}
            </button>
          </div>
          <button
          onClick={handleSubmit}
            type="submit"
            className="mt-6 w-full bg-[#ae01ff] text-white font-semibold py-2 rounded-md hover:brightness-90 transition"
          >
            Login
          </button>
          </div>
        </form>
      </div>
      <div className="mt-8 flex justify-center text-gray-600">
        <p>
          Don’t have an account?{" "}
          <a href="/signup" className="text-[#ae01ff] hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
