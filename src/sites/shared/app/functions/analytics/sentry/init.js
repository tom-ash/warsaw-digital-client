import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

function initSentry() {
  Sentry.init({
    dsn: "https://551489a860d845e0a69697034b086e32@o876363.ingest.sentry.io/5825789",
    integrations: [new Integrations.BrowserTracing()],
      
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  })
}

export default initSentry
