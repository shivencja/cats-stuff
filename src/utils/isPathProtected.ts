const protectedPaths = ["/profile"];

const isPathProtected = (pathname: string) =>
  protectedPaths.some((path) => pathname.startsWith(path));

export default isPathProtected;
