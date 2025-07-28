import { NextResponse } from 'next/server'


// This function can be marked `async` if using `await` inside
export function middleware(request) {
    // const currentCookie = request.cookies.get('nextjs-token')
    // if (!currentCookie) {
    //     // If the token is not present, redirect to the login page
    //     return NextResponse.redirect(new URL('/login', request.url))
    // }
    const dummyUserData = {
        role: 'admin',
        email: 'test@example.com',
    }
    let isServicePage = request.nextUrl.pathname.startsWith("/service")
    let isAdmin = dummyUserData.role == 'admin'
    if (isServicePage && !isAdmin) 
        return NextResponse.redirect(new URL('/', request.url))
       
    
        return NextResponse.next()
}

