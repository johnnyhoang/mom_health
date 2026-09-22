import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { LogOut, User as UserIcon, Loader2 } from 'lucide-react';

export const UserAuthButton: React.FC = () => {
  const { user, loading, signInWithGoogle, signOut } = useAuth();
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleLogin = async () => {
    try {
      setIsAuthenticating(true);
      setErrorMsg(null);
      await signInWithGoogle();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Đăng nhập Google thất bại. Vui lòng thử lại.';
      setErrorMsg(msg);
      setIsAuthenticating(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut();
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center gap-1 text-slate-400 text-xs px-2.5 py-1">
        <Loader2 className="w-3.5 h-3.5 animate-spin text-teal-400" />
      </div>
    );
  }

  if (user) {
    const avatarUrl = user.user_metadata?.avatar_url || user.user_metadata?.picture;
    const fullName = user.user_metadata?.full_name || user.user_metadata?.name || user.email?.split('@')[0] || 'Tài khoản';

    return (
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-full pl-1.5 pr-3 py-1 shadow-sm">
          {avatarUrl ? (
            <img 
              src={avatarUrl} 
              alt={fullName} 
              className="w-6 h-6 rounded-full object-cover border border-teal-500/50" 
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold text-xs">
              <UserIcon className="w-3.5 h-3.5" />
            </div>
          )}
          <span className="text-xs font-semibold text-slate-200 max-w-[120px] truncate hidden sm:inline">
            {fullName}
          </span>
          <button
            onClick={handleLogout}
            title="Đăng xuất"
            className="text-slate-400 hover:text-rose-400 transition-colors p-0.5 ml-1 cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={handleLogin}
        disabled={isAuthenticating}
        className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-100 border border-slate-700/80 font-semibold text-xs transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50 shadow-sm"
      >
        {isAuthenticating ? (
          <Loader2 className="w-4 h-4 animate-spin text-teal-400" />
        ) : (
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
        )}
        <span className="hidden xs:inline">Đăng nhập</span>
        <span>Google</span>
      </button>

      {errorMsg && (
        <div className="absolute right-0 top-full mt-2 w-64 bg-rose-950 border border-rose-800 text-rose-200 text-xs p-2.5 rounded-xl shadow-xl z-50">
          {errorMsg}
        </div>
      )}
    </div>
  );
};
