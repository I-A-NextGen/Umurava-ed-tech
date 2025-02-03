import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import useUser from "./hooks/useUser";

const protectedRoutes = ["/app/dashboard"];

export default async function middleware(request: NextRequest) {
  const { user} = await useUser();

  const { pathname } = request.nextUrl;

  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isProtected && !user) {
    return NextResponse.redirect(new URL("/auth/sign-in", request.url));
  }

  return NextResponse.next();
}
