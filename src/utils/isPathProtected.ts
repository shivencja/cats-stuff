const protectedPaths = ["/profile", "/users"];

/**
 * Checks if a given pathname is protected (requires authentication)
 */
const isPathProtected = (pathname: string) =>
  protectedPaths.some((path) => pathname.startsWith(path));

export default isPathProtected;
