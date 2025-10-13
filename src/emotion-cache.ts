"use client";

import createCache from "@emotion/cache";

export default function createEmotionCache(nonce?: string) {
  return createCache({ key: "mui", prepend: true, nonce });
}
