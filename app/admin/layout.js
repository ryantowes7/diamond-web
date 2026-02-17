'use client';

import { AuthProvider } from '@/lib/hooks/useAuth';

export default function AdminRootLayout({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}