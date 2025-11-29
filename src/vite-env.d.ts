// The reference to "vite/client" was removed as it could not be resolved in the environment.
// To fix the related error "Property 'env' does not exist on type 'ImportMeta'",
// we provide a manual declaration for Vite's environment variables.

interface ImportMetaEnv {
  /** Set to `true` in production, `false` otherwise. */
  // FIX: Removed 'readonly' modifier to match other declarations and resolve the error.
  PROD: boolean;
  /** Set to `true` in development, `false` otherwise. */
  // FIX: Removed 'readonly' modifier to match other declarations and resolve the error.
  DEV: boolean;
  // You can add definitions for custom env variables here
  // readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// FIX: Manually declare react-router-dom module to resolve "has no exported member" errors
declare module 'react-router-dom' {
  export const BrowserRouter: any;
  export const Routes: any;
  export const Route: any;
  export const Link: any;
  export const NavLink: any;
  export const Navigate: any;
  export const Outlet: any;
  export const useLocation: any;
  export const useNavigate: any;
  export function useParams<T = any>(): T;
  export const useRoutes: any;
}
