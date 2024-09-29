import { cookies } from 'next/headers'
import { NextResponse, NextRequest } from 'next/server'
 

export async function middleware(request: NextRequest) {
   const cookieStore = cookies()
   const token = cookieStore.get("token")
   if(token) return NextResponse.next()
      else  return NextResponse.redirect(new URL('/', request.url))
  
}
 
export const config = {
  matcher: '/infos/:path*',
}