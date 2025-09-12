// sentry.client.config.ts
// This file configures the initialization of Sentry on the client (browser).
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn:
    process.env.NEXT_PUBLIC_SENTRY_DSN ||
    "https://533a32d70cd42309c54b819763f462fc@o4507638788784128.ingest.de.sentry.io/4509992692416592",

  // 🔹 Performance Monitoring
  tracesSampleRate: 1.0, // adjust lower (e.g., 0.2) for production

  // 🔹 Session Replay
  replaysSessionSampleRate: 0.1, // 10% of sessions
  replaysOnErrorSampleRate: 1.0, // 100% on errors

  // 🔹 Debugging
  // ✅ only enable debug locally in dev mode, never in production
  debug:
    process.env.NODE_ENV === "development" && typeof window !== "undefined",
  enableLogs: process.env.NODE_ENV === "development",
});

// 🔹 Optional helper: records navigation timing in Sentry
export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
