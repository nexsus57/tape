// The reference to "vite/client" was removed as it could not be resolved in the environment.
// To fix the related error "Property 'env' does not exist on type 'ImportMeta'",
// we provide a manual declaration for Vite's environment variables.

interface ImportMetaEnv {
  /** Set to `true` in production, `false` otherwise. */
  readonly PROD: boolean;
  /** Set to `true` in development, `false` otherwise. */
  readonly DEV: boolean;
  // You can add definitions for custom env variables here
  // readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
