/**
 * Generates a random nonce string of 16 characters
 */
export default function generateNonce() {
  return crypto.randomUUID().replace(/-/g, "").slice(0, 16);
}
