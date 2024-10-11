import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import MuiPhoneNumber from "mui-phone-number"; // Import MuiPhoneNumber
import axios from "axios";
import {toast, Toaster} from "react-hot-toast";

const Signup = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePhoneChange = (value) => {
    setPhone(value);
  };


  const handleSubmit = async() => {
     // e.preventDefault();
     if(name === "" || phone === "" || email === "" || password === ""){
         toast.error("Please fill all the fields");
         return;
     }

     await axios.post("http://localhost:8000/signup", {
           name,
               phone,
               email,
               password,
     }
).then((res) => {
               console.log(res.data);
               toast.success("User Registered Successfully");
               localStorage.setItem("userId", res.data.UserId);
               window.location.href = "/login";
     })
     .catch((err) => {
               if(err.response.status === 422){
                   toast.error("User already exists");
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
        <h2 className="text-3xl font-bold text-center mb-8">Sign Up</h2>
        {/* Signup Form */}
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500  focus:border-[#ae01ff]"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <div className="mt-2"></div>
            <MuiPhoneNumber
              defaultCountry="in"
              value={phone}
              onChange={handlePhoneChange}
              className="mt-3 w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-[#ae01ff] focus:border-[#ae01ff] border-[#ae01ff]"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
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
                  <FaRegEye className="h-6 w-6" />
                ) : (
                  <FaRegEyeSlash className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
          <button
          onClick={handleSubmit}
            type="submit"
            className="mt-6 w-full bg-[#ae01ff] text-white font-semibold py-2 rounded-md hover:brightness-90 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
      <div className="mt-8 flex justify-center text-gray-600">
        <p>
          Already have an account?{" "}
          <a href="/login" className="text-[#ae01ff] hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
