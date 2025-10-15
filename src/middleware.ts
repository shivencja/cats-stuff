import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

function generateNonce() {
  return crypto.randomUUID().replace(/-/g, "").slice(0, 16);
}

const protectedPaths = ["/profile"];

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  const isPathProtected = protectedPaths.some((path) =>
    pathname.startsWith(path)
  );

  if (isPathProtected) {
    const token = await getToken({ req, secret: process.env.AUTH_SECRET });
    if (!token) {
      const loginUrl = new URL("/login", req.url);
      loginUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  const nonce = generateNonce();
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-nonce", nonce);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  const isProduction = process.env.NODE_ENV === "production";

  const csp = `
    default-src 'self';
    script-src 'self' ${
      isProduction
        ? `'nonce-${nonce}' 'strict-dynamic'`
        : `'unsafe-inline' 'unsafe-eval'`
    };
    style-src 'self' ${isProduction ? `'nonce-${nonce}'` : `'unsafe-inline'`};
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `
    .replace(/\s+/g, " ")
    .trim();

  response.headers.set("Content-Security-Policy", csp);

  return response;
}

export const config = {
  matcher: [
    /*
     * without
     * - API paths
     * - inside Next.js paths (_next/static, _next/image)
     * - static files (favicon.ico)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
