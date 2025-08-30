import React, { useState } from 'react'

const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  return (
    <div className='flex'>
      <div className='w-full md:w-1/2 flex-col justify-center items-center p-8 md:p-12'>
        <form className='w-full max-w-md bg-white p-8 rounded-lg border md:p-12'>
          <div className='flex justify-center mb-6'>
            <h2 className='text-xl font-medium'>
              Rabbit
            </h2>
          </div>
          <h2 className='text-2xl font-bold text-center mb-6'>Hey there 🙋🙋</h2>
          <p className='text-center mb-6'>
            Enter your username and passwerd to login
          </p>
          <div className='mb-4'><
            /div>
        </form>
      </div>
    </div>
  )
}

export default Login
