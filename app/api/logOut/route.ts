import { NextApiResponse } from "next"
import { cookies } from "next/headers"

export const GET = async(request: Request)=>{
   cookies().delete("token",)
   return new Response('loged out', {
      status: 200,
    })
}