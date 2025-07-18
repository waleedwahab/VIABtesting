import { NextRequest, NextResponse } from "next/server";
// import axios from "@/utils/axios";
// const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
// ✅ List of protected routes
// const protectedRoutes = ['/viab/home']

export async function middleware(req: NextRequest) {
  // const { pathname } = req.nextUrl;

  // const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));

  // ✅ Get access token from cookies
  const accessToken = req.cookies.get("accessToken")?.value;
  // const refreshToken = req.cookies.get("refreshToken")?.value;
  console.log("access token", accessToken);
  // ✅ If trying to access a protected route without token → redirect to login
  // if (isProtectedRoute && !accessToken && !refreshToken ) {
  // axios.get(`${baseURL}/users/refresh-token`,{withCredentials:true,});
  //  return NextResponse.next()
  // return NextResponse.redirect(new URL('/auth/login', req.url))
  // }

  // ✅ Allow access if token exists or route is not protected
  return NextResponse.next();
}
export const config = {
  matcher: ["/viab/:path*"],
};
