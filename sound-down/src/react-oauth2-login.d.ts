// src/react-oauth2-login.d.ts

declare module 'react-oauth2-login' {
    export const useAuth: () => string | null;
    export const LoginButton: React.FC<{ buttonText?: string }>;
    export const LogoutButton: React.FC<{ buttonText?: string }>;
    // Add declarations for other types and components used from react-oauth2-login
  }
  