import React from 'react';

/**
 * Card — the brand's default container: soft 16px radius, hairline border,
 * subtle shadow, lifts on hover. Set `interactive` for the hover-lift behavior
 * and `popular` for the accent 2px border + bigger shadow (pricing).
 */
export function Card({ interactive = false, popular = false, padded = true, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: 'var(--bg-surface)',
        border: popular
          ? 'var(--border-w-strong) solid var(--accent)'
          : 'var(--border-w) solid var(--border-subtle)',
        borderRadius: 'var(--r-lg)',
        padding: padded ? 'var(--sp-6)' : 0,
        boxShadow: popular ? 'var(--shadow-xl)' : (interactive && hover ? 'var(--shadow-xl)' : 'var(--shadow-sm)'),
        transform: interactive && hover ? 'translateY(var(--lift))' : 'none',
        transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
        overflow: 'hidden',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
