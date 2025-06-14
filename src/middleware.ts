import { NextResponse, NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  console.log("Middleware triggered for request:", req.url);
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

  const requestHeaders = new Headers(req.headers); // Headers for the request to be forwarded

  // 1. Handle theme from search parameters (this takes priority)
  const themeSearchParam = req.nextUrl.searchParams.get("theme");

  if (themeSearchParam === "light" || themeSearchParam === "dark") {
    const newUrl = req.nextUrl.clone();
    newUrl.searchParams.delete("theme");

    // Create a redirect response
    const redirectResponse = NextResponse.redirect(newUrl);

    // Set the theme cookie on the redirect response
    redirectResponse.cookies.set("theme", themeSearchParam, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365, // 1 year
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      httpOnly: false, // Allow client-side JS to read it too
    });
    console.log(
      `Theme param '${themeSearchParam}' found. Setting cookie and redirecting.`
    );
    return redirectResponse;
  }

  // 2. If not redirecting, set x-theme header from existing cookie for server-side access
  const themeCookie = req.cookies.get("theme");
  if (
    themeCookie?.value &&
    (themeCookie.value === "light" || themeCookie.value === "dark")
  ) {
    requestHeaders.set("x-theme", themeCookie.value);
    console.log(`Setting x-theme header from cookie: ${themeCookie.value}`);
  } else {
    // Optional: Handle missing or invalid cookie, e.g., by setting a default or removing the header
    // requestHeaders.set('x-theme', 'light'); // Example: default to light
    // console.log('No valid theme cookie found. x-theme not set or defaulted.');
  }

  // Continue processing, forwarding the request with potentially modified headers
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
export const config = {
  matcher:
    "/((?!api/|_next/|static/|favicon\\.ico|favicon\\.svg|robots\\.txt|sitemap\\.xml|site\\.webmanifest).*)",
};
