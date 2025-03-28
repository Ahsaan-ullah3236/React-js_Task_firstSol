import React from 'react';
import Group from '../assets/Group.png';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-sm p-6 bg-white shadow-lg rounded-xl border-2">
        <img src={Group} alt="Logo" width={250} className="mx-auto mb-4" />
        <form>
          <div className="mb-4 text-left">
            <label className="font-semibold text-gray-600 text-sm mb-1">First Name</label>
            <input
              type="text"
              className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-1"
              required
            />
          </div>
          
          <div className="mb-4 text-left">
            <label className="font-semibold text-gray-600 text-sm mb-1">Last Name</label>
            <input
              type="text"
              className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-1"
              required
            />
          </div>
          
          <div className="mb-4 text-left">
            <label className="font-semibold text-gray-600 text-sm mb-1">Email</label>
            <input
              type="email"
              className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-1"
              required
            />
          </div>
          
          <div className="mb-4 text-left">
            <label className="font-semibold text-gray-600 text-sm mb-1">Password</label>
            <input
              type="password"
              className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-1"
              required
            />
          </div>
          
          <div className="mb-4 text-left">
            <label className="font-semibold text-gray-600 text-sm mb-1">Confirm Password</label>
            <input
              type="password"
              className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-1"
              required
            />
          </div>

          <button className="w-full mt-2 bg-[#D5BE76] text-white py-2 rounded-lg transition border-2 border-transparent hover:border-blue-500 focus:border-blue-500">
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-500 mt-6">
          Already have an account?
          <Link to="/" className="text-[#D5BE76] hover:underline ml-1" aria-label="Sign In">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
