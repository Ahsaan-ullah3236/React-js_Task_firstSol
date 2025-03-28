import { Link } from 'react-router-dom'
import React from 'react'

function NewPassword() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
    <div className="w-full max-w-sm p-6 bg-white shadow-lg border-2 rounded-lg">
      <div className="text-center mb-6"> 
        <h1 className="font-inter font-semibold text-2xl leading-none tracking-tight pb-3">
        Set a new Password
        </h1>
        <h5 className="font-inter font-normal text-sm leading-none tracking-normal text-gray-600">
        “Your new password must be at least 8 characters long and include a mix of letters,
        </h5>
      </div>

      <form id="myForm" className="mt-6">
      <input
        type="password"  
        id="NewPassword"
        placeholder="New Password"
        required
        className="w-full py-2 mt-4 border-b-2  border-gray-400 focus:outline-none focus:border-blue-400 text-black"
        />

        <input
          type="Confirm Password"
          id="code"
          placeholder="Confirm Password"
          className="w-full  py-2 mt-4 border-b-2 border-gray-400 focus:outline-none focus:border-blue-400 text-black"
        />

        <Link
        to="/NewPassword"
              className="w-full mt-12 bg-[#D5BE76] text-white py-2 rounded-lg transition border-2 border-transparent hover:border-blue-500 focus:border-blue-500 flex justify-center items-center"
               >
            Confirm
         </Link>
      </form>
    </div>
  </div>
  )
}

export default NewPassword
