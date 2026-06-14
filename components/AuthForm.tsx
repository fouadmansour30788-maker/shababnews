'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useAuth } from '@/lib/auth';

export default function AuthForm({ mode }: { mode: 'login' | 'register' }) {
  const router = useRouter();
  const { signIn, signUp, signInWithGoogle, resetPassword } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [info, setInfo] = useState('');
  const [busy, setBusy] = useState(false);

  const isLogin = mode === 'login';

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setInfo('');
    setBusy(true);
    try {
      if (isLogin) await signIn(email, password);
      else await signUp(email, password, name);
      router.push('/profile');
    } catch (err: unknown) {
      setError(prettyError(err));
    } finally {
      setBusy(false);
    }
  }

  async function google() {
    setError('');
    setBusy(true);
    try {
      await signInWithGoogle();
      router.push('/profile');
    } catch (err: unknown) {
      setError(prettyError(err));
    } finally {
      setBusy(false);
    }
  }

  const field =
    'w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-text outline-none transition focus:border-teal-bright';

  return (
    <div className="relative flex min-h-screen items-center justify-center px-5 pt-16">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[45vh] w-[60vh] -translate-x-1/2 rounded-full bg-teal/15 blur-[130px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="glass w-full max-w-md rounded-3xl p-8"
      >
        <h1 className="display text-3xl text-text">{isLogin ? 'Welcome back' : 'Create account'}</h1>
        <p className="mt-2 text-sm text-muted">
          {isLogin ? 'Sign in to track your journey.' : 'Join Shabab News and plan your future.'}
        </p>

        <form onSubmit={submit} className="mt-7 space-y-3">
          {!isLogin && (
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" required className={field} />
          )}
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required className={field} />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required minLength={6} className={field} />

          {error && <p className="text-sm text-magenta">{error}</p>}
          {info && <p className="text-sm text-teal-bright">{info}</p>}

          {isLogin && (
            <button
              type="button"
              onClick={async () => {
                if (!email) return setError('Enter your email first.');
                try {
                  await resetPassword(email);
                  setInfo('Password reset email sent.');
                } catch (err) {
                  setError(prettyError(err));
                }
              }}
              className="text-xs text-muted hover:text-teal-bright"
            >
              Forgot password?
            </button>
          )}

          <button
            type="submit"
            disabled={busy}
            className="w-full rounded-full bg-teal-bright py-3 text-sm font-semibold text-[#02110f] transition hover:bg-teal disabled:opacity-50"
          >
            {busy ? 'Please wait…' : isLogin ? 'Sign in' : 'Create account'}
          </button>
        </form>

        <div className="my-5 flex items-center gap-3 text-xs text-muted">
          <span className="h-px flex-1 bg-line" /> or <span className="h-px flex-1 bg-line" />
        </div>

        <button
          onClick={google}
          disabled={busy}
          className="w-full rounded-full border border-line py-3 text-sm font-semibold text-text transition hover:border-teal-bright disabled:opacity-50"
        >
          Continue with Google
        </button>

        <p className="mt-6 text-center text-sm text-muted">
          {isLogin ? "Don't have an account? " : 'Already have an account? '}
          <Link href={isLogin ? '/register' : '/login'} className="font-medium text-teal-bright hover:underline">
            {isLogin ? 'Sign up' : 'Sign in'}
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

function prettyError(err: unknown): string {
  const code = (err as { code?: string })?.code || '';
  const map: Record<string, string> = {
    'auth/invalid-credential': 'Incorrect email or password.',
    'auth/user-not-found': 'No account found with that email.',
    'auth/wrong-password': 'Incorrect password.',
    'auth/email-already-in-use': 'An account with that email already exists.',
    'auth/weak-password': 'Password should be at least 6 characters.',
    'auth/invalid-email': 'Please enter a valid email.',
    'auth/popup-closed-by-user': 'Sign-in cancelled.',
  };
  return map[code] || 'Something went wrong. Please try again.';
}
