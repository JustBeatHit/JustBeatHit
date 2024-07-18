import { NextRequest, NextResponse } from "next/server";
import { AuthGetCurrentUserServer } from "@/utils/amplify-utils";

export async function middleware(request: NextRequest) {
    const response = NextResponse.next();
    const user = await AuthGetCurrentUserServer()
    
    const isOnGame = !request.nextUrl.pathname.startsWith("/auth")

    if (isOnGame) {
        if(!user){
            return NextResponse.redirect(new URL("/auth/login", request.nextUrl));
        }
        return response;
    }
    else if(user){
        return NextResponse.redirect(new URL("/karakaku", request.nextUrl))
    }
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - login
         */
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ],
};