import axios from "axios"
import { NextApiResponse } from "next"
import { cookies } from "next/headers"

export const POST = async (request: Request) => {
   const body = await request.json()
   const { username, password } = body

   const data = {
      email: username,
      password
   }
   try {
    await  axios.post("http://46.21.250.175:2020/Account/Authenticate", data)
         .then(res => {
            console.log(res)
            if (res.status == 200) {
               const { token, refreshToken } = res.data
               cookies().set({
                  name: 'token',
                  value: token,
                  httpOnly: true,
                  path: '/',
                  maxAge: 60 * 60
               })
               cookies().set({
                  name: 'refreshToken',
                  value: refreshToken,
                  httpOnly: true,
                  path: '/',
                  maxAge: 60 * 60
               })

             
            }
         })
         return new Response('success', {
            status: 200,
         })
   } catch (error) {
   
      return new Response('invalid data', {
         status: 404,
       
      })
   }



}