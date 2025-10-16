"use client";

import createCache from "@emotion/cache";

/**
 * Creates an Emotion cache instance with optional nonce for CSP
 */
export default function createEmotionCache(nonce?: string) {
  return createCache({ key: "mui", prepend: true, nonce });
}
