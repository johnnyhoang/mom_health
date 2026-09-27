import { createClient, SupabaseClient } from '@supabase/supabase-js';

export const CANONICAL_DOMAIN = 'https://health.minkoi.org';

const DEFAULT_SUPABASE_URL = 'https://msozshwatonyxnkaqjfs.supabase.co';
const DEFAULT_SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zb3pzaHdhdG9ueXhua2FxamZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI2MjU5MzYsImV4cCI6MjA4ODIwMTkzNn0.lbfHxn4YxXNLHB0uVBDInrHh8wsCbusDr1_SroACHgk';

export function getRedirectUrl(): string {
  const origin = typeof window !== 'undefined' 
    ? window.location.origin.replace(/\/+$/, '') 
    : CANONICAL_DOMAIN;
  return `${origin}/`;
}

const ENV_SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || DEFAULT_SUPABASE_URL;
const ENV_SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || DEFAULT_SUPABASE_ANON_KEY;

export function getSupabaseConfig(): { url: string; key: string; isConfigured: boolean } {
  const customUrl = localStorage.getItem('mh_supabase_url') || ENV_SUPABASE_URL;
  const customKey = localStorage.getItem('mh_supabase_anon_key') || ENV_SUPABASE_ANON_KEY;
  const isConfigured = Boolean(customUrl && customKey);
  return { url: customUrl, key: customKey, isConfigured };
}

export function saveSupabaseConfig(url: string, key: string) {
  if (url.trim()) {
    localStorage.setItem('mh_supabase_url', url.trim());
  } else {
    localStorage.removeItem('mh_supabase_url');
  }
  if (key.trim()) {
    localStorage.setItem('mh_supabase_anon_key', key.trim());
  } else {
    localStorage.removeItem('mh_supabase_anon_key');
  }
}

let cachedClient: SupabaseClient | null = null;
let lastClientKey = '';

export function getSupabase(): SupabaseClient | null {
  const { url, key, isConfigured } = getSupabaseConfig();
  if (!isConfigured) return null;

  const currentKey = `${url}__${key}`;
  if (!cachedClient || lastClientKey !== currentKey) {
    try {
      cachedClient = createClient(url, key, {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true
        }
      });
      lastClientKey = currentKey;
    } catch (e) {
      console.error('Failed to initialize Supabase client', e);
      return null;
    }
  }
  return cachedClient;
}

export async function signInWithGoogle(view?: string, sectionId?: string) {
  const client = getSupabase();
  if (!client) throw new Error('Supabase Client is not configured');
  
  if (view && typeof localStorage !== 'undefined') {
    localStorage.setItem('app_current_view', view);
    if (sectionId) {
      localStorage.setItem('app_active_section_' + view, sectionId);
    }
  }
  
  const redirectTo = getRedirectUrl();
  return await client.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo,
    },
  });
}

export async function signOutUser() {
  const client = getSupabase();
  if (!client) return;
  const { error } = await client.auth.signOut();
  if (error) throw error;
}
