import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'


// This function can be marked `async` if using `await` inside
export const  middleware = async (req) => {
    // const currentCookie = req.cookies.get('nextjs-token')
    // if (!currentCookie) {
    //     // If the token is not present, redirect to the login page
    //     return NextResponse.redirect(new URL('/login', req.url))
    // }
    const token = await getToken({req});
    console.log("Token", token)
    const isTokenOk = Boolean(token)
    const isAdminUser = token?.role === 'admin'

    const isAuthPage = req.nextUrl.pathname.startsWith('/service/add') || req.nextUrl.pathname.startsWith('/register')
    if (isAuthPage && !isAdminUser) {
        const callBackUrl = req.nextUrl.pathname
        return NextResponse.redirect(new URL(`/api/auth/signin?callbackUrl=${callBackUrl}`, req.url))
    }
    
   
   return NextResponse.next()
}

