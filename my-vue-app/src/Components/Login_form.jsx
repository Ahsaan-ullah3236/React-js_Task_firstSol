import React from 'react';
import Group from "../assets/Group.png"; 


function LoginForm() {
  return (
    <div className="flex items-center justify-center min-h-screen  p-4">
      <div className="w-full max-w-sm p-4 bg-white shadow-lg rounded-xl border-2">
      <img src={Group} alt="Logo" width={250} className="mx-auto mb-4" />

        <form id="myForm" className="mt-24">
          <h5 className="text-left mb-0 font-semibold text-gray-600">Hi, welcome back! You've been missed</h5>

          <input
            type="email"
            id="email"
            placeholder="Username/Email"
            required
            className="w-full px-4 py-2 mt-4 border rounded-lg focus:outline-none focus:ring-2 focus: text-[#D5BE76] "
          />

          <input
            type="password"
            id="password"
            placeholder="Password"
            required
            className="w-full px-4 py-2 mt-4 border rounded-lg focus:outline-none focus:ring-2 focus: text-[#D5BE76] "
          />

          <div className="text-right mt-2">
            <a href="#" className="text-blue-500 text-sm hover:underline" aria-label="Forgot Password">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full mt-24  bg-[#D5BE76]  text-white py-2 rounded-lg hover:text-[#D5BE76]  transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-500 mt-24">
          Don't have an account?
          <a href="#" className="text-blue-500 hover:underline ml-1" aria-label="Sign Up">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;