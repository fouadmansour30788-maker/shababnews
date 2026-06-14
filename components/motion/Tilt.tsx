'use client';

import type { ReactNode } from 'react';

/**
 * Editorial design uses no 3D tilt — this is a lightweight pass-through
 * wrapper kept so existing imports continue to work. Hover styling lives
 * on the child elements themselves.
 */
export default function Tilt({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  return <div className={className}>{children}</div>;
}
