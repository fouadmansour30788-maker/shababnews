import Link from 'next/link';

/** Dark inner-page hero (matches the rebuild .page-hero). */
export default function PageHero({
  tag,
  title,
  highlight,
  highlightLast,
  subtitle,
  crumb,
  teal,
}: {
  tag?: string;
  title: string;
  highlight?: string;
  highlightLast?: boolean;
  subtitle?: string;
  crumb?: string;
  teal?: boolean;
}) {
  const hl = teal
    ? ({ color: '#15b3b8' } as const)
    : ({
        background: 'linear-gradient(135deg,var(--accent),var(--gold))',
        WebkitBackgroundClip: 'text' as const,
        backgroundClip: 'text' as const,
        WebkitTextFillColor: 'transparent' as const,
      } as const);
  return (
    <div className="page-hero">
      <div className="container">
        {crumb && (
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <span>{crumb}</span>
          </div>
        )}
        {tag && <div className="section-tag">{tag}</div>}
        <h1 className="page-title" style={teal ? { color: '#15b3b8' } : undefined}>
          {highlight && highlightLast ? (
            <>
              {title} <span style={hl}>{highlight}</span>
            </>
          ) : highlight ? (
            <>
              <span style={hl}>{highlight}</span> {title}
            </>
          ) : (
            title
          )}
        </h1>
        {subtitle && (
          <p style={{ fontSize: 15, color: 'var(--text-2)', maxWidth: 'none', marginTop: 12, lineHeight: 1.7 }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
