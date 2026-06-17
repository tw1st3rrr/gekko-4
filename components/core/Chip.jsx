import React from 'react';

/**
 * Chip — a selectable rounded-lg tag (the "Что вас интересует?" multi-select).
 * Toggles between a quiet default and a bordered active state.
 */
export function Chip({ active = false, children, onClick, style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: 'var(--gk-font-body)', fontSize: 'var(--fs-xs)',
        fontWeight: 'var(--fw-medium)', padding: '8px 12px',
        borderRadius: 'var(--r-sm)', cursor: 'pointer',
        background: active ? 'var(--bg-surface-alt)' : 'transparent',
        color: active ? 'var(--text-strong)' : 'var(--text-body)',
        border: `var(--border-w) solid ${
          active ? 'var(--text-strong)' : (hover ? 'var(--border-strong)' : 'var(--border-subtle)')
        }`,
        transition: 'all var(--dur-fast)',
        ...style,
      }}
    >
      {children}
    </button>
  );
}
