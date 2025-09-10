// sentry.client.config.ts
// This file configures the initialization of Sentry on the client (browser).
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn:
    process.env.NEXT_PUBLIC_SENTRY_DSN ||
    "https://533a32d70cd42309c54b819763f462fc@o4507638788784128.ingest.de.sentry.io/4509992692416592",

  // Performance monitoring
  tracesSampleRate: 1.0, // Adjust lower in production

  // Replay sampling rates
  replaysSessionSampleRate: 0.1, // 10% of all sessions
  replaysOnErrorSampleRate: 1.0, // 100% when an error happens

  // Debugging
  debug: process.env.NODE_ENV === "development",
  enableLogs: true,
});

// Useful helper: records navigation timing in Sentry
export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
