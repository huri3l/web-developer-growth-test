import { NextRequest, NextResponse } from "next/server";
 
let locales = ['en', 'pt']
 
const DEFAULT_LOCALE = "en"
 
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
 
  if (pathnameHasLocale) return
 
  const locale = DEFAULT_LOCALE
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}
 
export const config = {
  matcher: [
    '/((?!_next).*)',
  ],
}