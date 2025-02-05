import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
// import { useAppSelector } from "./lib/redux/store";

const protectedRoutes = ["/app"];

export default async function middleware(request: NextRequest) {
  // const { isAuthenticated, user } = await useAppSelector(state => state.auth);

  const { pathname } = request.nextUrl;

  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  );

  // if (isProtected) {
  //   return NextResponse.redirect(new URL("/app/auth/sign-in", request.url), 302);
  // }

  return NextResponse.next();
}
