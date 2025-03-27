import React from 'react'
import Group from "../assets/Group.png"; 

function  SignUp() {
  return (
    <>
   <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className=" bg-white p-4 rounded-lg shadow-md  border-2">
        <img src={Group} alt="Logo" width={250} className="mx-auto mb-4" />
        <form>
        <div className="w-96 mb-2 text-left border-2">
  <label className="font-semibold text-gray-600 text-sm mr-3 w-24">First Name</label>
  <input
    type="text"
    className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-1"
  />
</div>


         
          <div className="mb-4 text-left">
            <label className="block text-gray-600 text-sm mb-1">Last Name</label>
            <input
              type="text"
              className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-1 px-1"
            />
          </div>

          <div className="mb-4 text-left">
            <label className="block text-gray-600 text-sm mb-1">Email </label>
            <input
              type="text"
              className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-1 px-1"
            />
          </div>
          <div className="mb-4 text-left">
            <label className="block text-gray-600 text-sm mb-1">Password </label>
            <input
              type="text"
              className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-1 px-1"
            />
          </div>
          <div className="mb-4 text-left">
            <label className="block text-gray-600 text-sm mb-1">Confirm Password </label>
            <input
              type="text"
              className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-1 px-1"
            />
          </div>

          <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
            Sign Up
          </button>
        </form>
      </div>
    </div>
    </>
  )
}


export default SignUp
