import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { NextResponse } from 'next/server'
import {
    DEFAULT_LOGIN_REDIRECT,
    apiAuthPrefix,
    authRoutes,
    PublicRoutes
} from "@/routes"

const { auth } = NextAuth(authConfig)
export default auth((req) => {
    
    const { nextUrl } = req
    const isLoggedIn = !!req.auth;


    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
    const isPublicRoute = PublicRoutes.includes(nextUrl.pathname)
    const isAuthRoute = authRoutes.includes(nextUrl.pathname)

    if(isApiAuthRoute) {
        return NextResponse.next() || null
    }

    if (isAuthRoute){
        if(isLoggedIn){
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
        }
        return NextResponse.next()
    }
    if(!isLoggedIn && !isPublicRoute){
        return Response.redirect(new URL("/auth/login", nextUrl))
    }
    return NextResponse.next()
})


export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/','/(api|trpc)(.*)'],
}