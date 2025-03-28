import { Link } from 'react-router-dom';
import React from 'react';
import Group from "../assets/Group.png"; 



function LoginForm() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-sm p-4 bg-white shadow-lg rounded-xl border-2">
      <img src={Group} alt="Logo" width={250} className="mx-auto mb-4" />

        <form id="myForm" className="mt-24">
          <h5 className="text-left mb-0 font-semibold text-gray-600">Hi, welcome back! You've been missed</h5>

          <input
            type="email"
            id="email"
            placeholder="Username/Email"
            required
            className="w-full  py-2 mt-4 border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 text-black "
          />

          <input
            type="password"
            id="password"
            placeholder="Password"
            required
            className="w-full py-2 mt-4 border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 text-black "
          />

          <div className="text-right mt-2">
          <Link to="/ForgetPassword" className="text-blue-500 text-sm hover:underline">
        Forgot Password?
      </Link>
          </div>

          <button
            type="submit"
            className="w-full mt-24  bg-[#D5BE76] text-white py-2 rounded-lg transition border-2 border-transparent hover:border-blue-500 focus:border-blue-500"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-500 mt-24">
          Don't have an account?
          <Link to="/SignUp" className="text-blue-500 hover:underline ml-1" >
          Sign Up
        </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;