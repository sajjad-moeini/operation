import { requests } from '@/utils/employRequests'
import React from 'react'

function page() {
  return (
    <div className='w-[100vw] lg:h-[100vh] main grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 lg:p-24 '>
      {/* {
         requests.map((request,index) =>(
<div className='w-48 h-48 bg-white mx-auto rounded-lg flex justify-center items-center text-slate-600 text-center p-2 shadow-lg hover:-translate-y-5 hover:scale-105 transition-transform duration-300 shadow-blue-400 text-lg lg:text-xl cursor-pointer' key={index}>{request.title}</div>
         ))
      } */}
      {
        requests.map((request, index) => (
          <a href={`./${request.pdf}.pdf`} target='_blank' className='w-48 h-48 bg-white mx-auto rounded-lg flex justify-center items-center text-slate-600 text-center p-2 shadow-lg hover:-translate-y-5 hover:scale-105 transition-transform duration-300 shadow-blue-400 text-lg lg:text-xl cursor-pointer' key={index}>{request.title}</a>
        ))
      }
    </div>
  )
}

export default page