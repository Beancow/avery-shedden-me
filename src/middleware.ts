import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const basePath = process.env.BASE_PATH ? `/${process.env.BASE_PATH}` : "";
  const isApiRoute = pathname.startsWith(`${basePath}/api/`);

  // If the request is for an API route, skip the middleware
  if (isApiRoute) {
    return NextResponse.next();
  }
  // If the request is for a static file, skip the middleware
  if (
    pathname.startsWith(`${basePath}/_next/`) ||
    pathname.startsWith(`${basePath}/static/`)
  ) {
    return NextResponse.next();
  }
  // If the request is for a favicon, skip the middleware
  if (
    pathname === `${basePath}/favicon.ico` ||
    pathname === `${basePath}/favicon.svg`
  ) {
    return NextResponse.next();
  }
  // If the request is for a robots.txt file, skip the middleware
  if (pathname === `${basePath}/robots.txt`) {
    return NextResponse.next();
  }
  // If the request is for a sitemap.xml file, skip the middleware
  if (pathname === `${basePath}/sitemap.xml`) {
    return NextResponse.next();
  }
  // If the request is for a manifest file, skip the middleware
  if (pathname === `${basePath}/site.webmanifest`) {
    return NextResponse.next();
  }

  const themeSearchParam = req.nextUrl.searchParams.get("theme");

  const newUrl = req.nextUrl.clone();
  newUrl.searchParams.delete("theme");

  const cookieTheme = req.cookies.get("theme")?.value;

  if (themeSearchParam && themeSearchParam !== cookieTheme) {
    const responseRedirect = NextResponse.redirect(newUrl);
    responseRedirect.cookies.set("theme", themeSearchParam, {
      path: "/",
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });
    return responseRedirect;
  }

  return NextResponse.next();
}

export const config = {
  matcher:
    "/((?!api/|_next/|static/|favicon\\.ico|favicon\\.svg|robots\\.txt|sitemap\\.xml|site\\.webmanifest).*)",
};
