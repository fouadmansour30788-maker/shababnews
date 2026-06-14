'use client';

import { useState } from 'react';

/** Visual filter pill group (matches the rebuild's data-filter-group behaviour). */
export default function FilterBar({
  options,
  className,
  style,
}: {
  options: string[];
  className?: string;
  style?: React.CSSProperties;
}) {
  const [active, setActive] = useState(0);
  return (
    <div className={className ?? 'filter-bar'} style={style}>
      {options.map((o, i) => (
        <button
          key={o}
          className={`filter-btn${i === active ? ' active' : ''}`}
          onClick={() => setActive(i)}
          type="button"
        >
          {o}
        </button>
      ))}
    </div>
  );
}
