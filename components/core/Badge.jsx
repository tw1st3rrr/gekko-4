import React from 'react';

/**
 * Badge — small pill. `solid` (accent fill, e.g. "Популярный выбор"),
 * `soft` (tinted), or `outline`. Use for tags, counts, status chips.
 */
export function Badge({ variant = 'solid', icon, children, style }) {
  const variants = {
    solid:   { background: 'var(--accent)', color: 'var(--accent-contrast)', border: 'none' },
    soft:    { background: 'color-mix(in oklab, var(--accent) 12%, transparent)', color: 'var(--accent)', border: 'none' },
    outline: { background: 'transparent', color: 'var(--text-body)', border: 'var(--border-w) solid var(--border-subtle)' },
  };
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      fontSize: 'var(--fs-xs)', fontWeight: 'var(--fw-semibold)',
      padding: '6px 14px', borderRadius: 'var(--r-full)',
      whiteSpace: 'nowrap', lineHeight: 1, ...variants[variant], ...style,
    }}>
      {icon}{children}
    </span>
  );
}
