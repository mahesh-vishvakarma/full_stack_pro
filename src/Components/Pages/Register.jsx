import React, { useState } from "react";
import { Link } from "react-router-dom";
import register from "../../assets/register.webp";
const Register = () => {
    const [name,setNamge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const handleSubmit = (e)=>{
  e.preventDefault();
  console.log("register :-", {name,email,password});
  
}
  return (
    <div className="flex">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-lg border md:p-12">
          <div className="flex justify-center mb-6">
            <h2 className="text-xl font-medium">Rabbit</h2>
          </div>
          <h2 className="text-2xl font-bold text-center mb-6">
            Hey there 🙋🙋
          </h2>
          <p className="text-center mb-6">
            Enter your username and passwerd to login
          </p>
           <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setNamge(e.target.value)}
              placeholder="enter your email address"
              name=""
              id=""
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="enter your email address"
              name=""
              id=""
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="enter your email address"
              name=""
              id=""
              className="w-full p-2 border rounded"
            />
          </div>
          <button type="submit" className="w-full bg-black text-white p-3 border rounded-lg transition font-semibold hover:bg-gray-800">
            Sign Up
          </button>
          <p className="mt-6 text-center text-sm">
            Donn't have an account?
            <Link to="/Login" className="text-blue-500">
              login
            </Link>
          </p>
        </form>
      </div>
      <div className="hidden md:block w-1/2 bg-gray-800">
        <div className="h-full flex flex-col justify-center items-center">
          <img src={register} alt="register_image"className="h-[750px] w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Register;