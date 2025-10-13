import { headers } from "next/headers";

/** Get nonce for current call */
export async function getNonce() {
  return (await headers()).get("x-nonce") ?? undefined;
}
