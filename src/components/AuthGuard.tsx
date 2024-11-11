import { Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../lib/store';

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { token } = useAuthStore();
  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}