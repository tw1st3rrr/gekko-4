import React from 'react';

/**
 * SectionLabel — the uppercase, letter-spaced eyebrow that opens every section,
 * led by the fading 3-square pixel motif. Always accent-colored.
 */
export function SectionLabel({ children, center = false, style }) {
  return (
    <p style={{
      display: 'flex', alignItems: 'center', gap: 10,
      justifyContent: center ? 'center' : 'flex-start',
      fontSize: 'var(--fs-label)', fontWeight: 'var(--fw-bold)',
      textTransform: 'uppercase', letterSpacing: 'var(--ls-label)',
      color: 'var(--accent)', margin: 0, ...style,
    }}>
      <span style={{ display: 'flex', gap: 3 }} aria-hidden="true">
        <i style={{ width: 6, height: 6, background: 'var(--accent)', display: 'block' }} />
        <i style={{ width: 6, height: 6, background: 'var(--accent)', opacity: 0.6, display: 'block' }} />
        <i style={{ width: 6, height: 6, background: 'var(--accent)', opacity: 0.3, display: 'block' }} />
      </span>
      <span>{children}</span>
    </p>
  );
}
