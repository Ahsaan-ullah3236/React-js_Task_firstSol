import './App.css';

function App() {
  return (
    <div className="flex items-center justify-center h-[70vh] bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-xl border-2">
        <div className="flex items-center justify-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-8 h-8 text-yellow-500"
          >
            <path d="M12 2a7 7 0 0 0-7 7c0 2.69 1.33 4.61 2.46 6.06.65.81 1.29 1.61 1.54 2.44v.5a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-.5c.25-.83.89-1.63 1.54-2.44C17.67 13.61 19 11.69 19 9a7 7 0 0 0-7-7Zm-2 18a1 1 0 0 0-1 1h6a1 1 0 0 0-1-1h-4Zm-1-2c-.05-.14-.18-.45-.44-.81a9.9 9.9 0 0 1-.82-1.09c-.86-1.14-1.74-2.33-1.74-4 0-3.34 2.66-6 6-6s6 2.66 6 6c0 1.67-.88 2.86-1.74 4a9.9 9.9 0 0 1-.82 1.09c-.26.36-.39.67-.44.81h-6Z" />
          </svg>
          <h1 className="text-3xl font-bold text-yellow-600">FHEMTA</h1>
        </div>

        <p className="text-gray-600 text-center mb-3">Lorem ipsum dolor sit amet</p>

        <form id="myForm" className="space-y-2">
          <h4 className="text-left">Hi, welcome back! You've been missed</h4>
          
          <input
            type="text"
            id="name"
            placeholder="Username/Email"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          
          <input
            type="password"
            id="password"
            placeholder="Password"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

        
          <div className="text-right">
            <a href="#" className="text-blue-500 text-sm hover:underline">Forgot Password?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition duration-300"
          >
            Submit
          </button>
        </form>

        {/* Don't have an account? Sign Up */}
        <p className="text-center text-gray-500 mt-4">
          Don't have an account? <a href="#" className="text-yellow-500 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default App;
