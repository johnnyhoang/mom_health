import React, { createContext, useContext, useEffect, useState } from 'react';
import type { User, Session } from '@supabase/supabase-js';
import { getSupabase, signInWithGoogle } from '../utils/supabaseClient';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const client = getSupabase();
    if (!client) {
      setLoading(false);
      return;
    }

    // Get initial session on app load
    client.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    }).catch((err) => {
      console.error('Error fetching initial auth session:', err);
      setLoading(false);
    });

    // Subscribe to auth state changes
    const { data: { subscription } } = client.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleSignInWithGoogle = async () => {
    await signInWithGoogle();
  };

  const handleSignOut = async () => {
    try {
      const client = getSupabase();
      if (client) {
        await client.auth.signOut().catch((e) => console.warn('Supabase signOut warning:', e));
      }
    } catch (err) {
      console.warn('SignOut error:', err);
    } finally {
      try {
        const keysToRemove = Object.keys(localStorage).filter(
          (key) => key.startsWith('sb-') || key.includes('supabase') || key.includes('auth-token')
        );
        keysToRemove.forEach((k) => localStorage.removeItem(k));
      } catch {}

      setUser(null);
      setSession(null);
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        loading,
        signInWithGoogle: handleSignInWithGoogle,
        signOut: handleSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
