import { NextResponse } from "next/server";

function generateNonce() {
  return crypto.randomUUID().replace(/-/g, "").slice(0, 16);
}

export function middleware() {
  const nonce = generateNonce();
  const response = NextResponse.next();

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
  response.headers.set("x-nonce", nonce);

  return response;
}
