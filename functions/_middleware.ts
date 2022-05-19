import sentryPlugin from "@cloudflare/pages-plugin-sentry";

export const onRequest: PagesFunction = sentryPlugin({
  dsn: "https://b51183f2032048e79b7a359d072bbe78@o80441.ingest.sentry.io/6421858",
});
