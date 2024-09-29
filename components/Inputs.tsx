"use client"
import { appHttp } from '@/configs/axiosConfigs'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function Inputs() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [err, serErr] = useState(false)
  const router = useRouter()
  const handleSubmit = () => {
    appHttp.post("/api/auth", { username, password })
      .then(res => {
        if (res.status == 200) router.push("/infos")
      })
      .catch(err => serErr(true))

  }

  return (
    <div className='w-full h-full flex justify-center items-center flex-col gap-4'>
      <div className='flex justify-center items-center flex-col gap-4 px-4 lg:px-24 py-8 rounded-lg bg-[#0000009d]'>
        <input className=' bg-gray-200 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500 text-black text-xl px-4 py-2 w-[250px] lg:w-[400px]' type='text' placeholder='Enter your userName...' value={username} onChange={(e) => { setUsername(e.target.value) 
          serErr(false)
        }} />
        <input className=' bg-gray-200 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500 text-black text-xl px-4 py-2 w-[250px] lg:w-[400px]' type='text' placeholder='Enter your password...' value={password} onChange={(e) => {
          setPassword(e.target.value)
          serErr(false)
        }} />
      {
        err &&   <span className='text-red-600'>Invalid UserName Or Password</span>
      }
        <button className='bg-blue-500 px-4 hover:bg-slate-700 transition-all font-semibold py-2 rounded-lg' onClick={handleSubmit}>Login</button>
      </div>
    </div>
  )
}

export default Inputs