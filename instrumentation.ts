import * as Sentry from "@sentry/nextjs";

export async function register() {
  // Only import configs depending on runtime
  if (process.env.NEXT_RUNTIME === "nodejs") {
    await import("./sentry.server.config"); // server config (NO replay here)
  }

  if (process.env.NEXT_RUNTIME === "edge") {
    await import("./sentry.edge.config"); // edge config (NO replay here)
  }

  // 🚨 DO NOT import sentry.client.config here
  // Next.js automatically runs sentry.client.config.ts on the browser.
}

// Capture request errors in middleware/handlers
export const onRequestError = Sentry.captureRequestError;
