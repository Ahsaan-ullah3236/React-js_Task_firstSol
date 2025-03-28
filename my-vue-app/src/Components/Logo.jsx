import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Group from "../assets/Group.png"; 
const Logo = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/LoginForm"); 
    }, 2000);

    return () => clearTimeout(timer); 
  }, [navigate]);
  return (
    <div className="flex items-center justify-center min-h-screen  p-4">
         <div className="w-full max-w-sm p-4 bg-white shadow-lg rounded-xl border-2">
         <img src={Group} alt="Logo" width={250} className="mx-auto mb-4" />
    </div>
    </div>
  );
};

export default Logo;
