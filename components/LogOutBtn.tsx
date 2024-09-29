"use client"
import { appHttp } from '@/configs/axiosConfigs'
import { useRouter } from 'next/navigation'
import React from 'react'

function LogOutBtn() {
   const router = useRouter()
   const logoutHandler=()=>{
      appHttp.get('/api/logOut')
      .then(res=>{
         if(res) router.push("/")
      })
   }
  return (
   <button className="text-white ms-auto" onClick={logoutHandler}>Log Out</button>
  )
}

export default LogOutBtn