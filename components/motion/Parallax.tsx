'use client';

import type { ReactNode } from 'react';

/**
 * Editorial design drops scroll parallax — this is a pass-through wrapper
 * kept so existing imports continue to work.
 */
export default function Parallax({
  children,
  className,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}
