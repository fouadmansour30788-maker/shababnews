'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, CalendarDays, FileText } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { useAuth } from '@/lib/auth';

const quickLinks = [
  { href: '/universities', label: 'Universities', Icon: GraduationCap },
  { href: '/jobs', label: 'Saved jobs', Icon: Briefcase },
  { href: '/calendar', label: 'Calendar', Icon: CalendarDays },
  { href: '/cv-builder', label: 'My CV', Icon: FileText },
];

export default function ProfilePage() {
  const { user, loading, logout, deleteAccount } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) router.replace('/login');
  }, [loading, user, router]);

  if (loading || !user) {
    return <div className="flex min-h-screen items-center justify-center text-muted">Loading…</div>;
  }

  const initial = (user.displayName || user.email || 'U').charAt(0).toUpperCase();

  return (
    <>
      <PageHeader kicker="Account" title="Your profile" />

      <section className="mx-auto max-w-3xl px-5 pb-20 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-5 rounded-3xl border border-line bg-surface p-7"
        >
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-teal-bright to-violet text-3xl font-bold text-[#02110f]">
            {initial}
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-text">{user.displayName || 'Student'}</h2>
            <p className="text-sm text-muted">{user.email}</p>
          </div>
        </motion.div>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {quickLinks.map((l, i) => (
            <motion.div key={l.href} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i }}>
              <Link href={l.href} className="flex flex-col items-center gap-3 rounded-2xl border border-line bg-surface p-5 transition hover:border-teal/40">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal/10 text-teal">
                  <l.Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <span className="text-sm text-text">{l.label}</span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 space-y-3">
          <button
            onClick={async () => {
              await logout();
              router.push('/');
            }}
            className="w-full rounded-full border border-line py-3 text-sm font-semibold text-text transition hover:border-teal-bright"
          >
            Sign out
          </button>
          <button
            onClick={async () => {
              if (confirm('Delete your account permanently? This cannot be undone.')) {
                try {
                  await deleteAccount();
                  router.push('/');
                } catch {
                  alert('Please sign in again before deleting your account.');
                }
              }
            }}
            className="w-full rounded-full border border-line py-3 text-sm font-medium text-magenta transition hover:border-magenta"
          >
            Delete account
          </button>
        </div>
      </section>
    </>
  );
}
