import axios from "axios";

export const appHttp = axios.create({
   baseURL:process.env.NEXT_PUBLIC_BASE_URL,
   withCredentials:true
})