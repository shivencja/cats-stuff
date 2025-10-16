export default function generateNonce() {
  return crypto.randomUUID().replace(/-/g, "").slice(0, 16);
}
