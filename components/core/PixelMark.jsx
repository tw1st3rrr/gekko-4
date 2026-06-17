import React from 'react';

/**
 * PixelMark — the ГЕККО brand glyph: a small cluster of squares ("pixels"),
 * echoing the construction-brick product. Use beside the wordmark in nav/footer.
 */
export function PixelMark({ size = 6, gap = 2, color = 'var(--accent)', style }) {
  const sq = (opacity) => ({ width: size, height: size, background: color, opacity, display: 'block' });
  const row = { display: 'flex', gap };
  return (
    <span style={{ display: 'inline-flex', flexDirection: 'column', gap, ...style }} aria-hidden="true">
      <span style={row}><i style={sq(1)} /><i style={sq(0.5)} /></span>
      <span style={row}><i style={sq(0.5)} /><i style={sq(1)} /></span>
    </span>
  );
}

/**
 * Wordmark — PixelMark + "ГЕККО" set in the display face.
 */
export function Wordmark({ size = 16, style }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', ...style }}>
      <PixelMark />
      <span style={{
        fontFamily: 'var(--gk-font-display)', fontWeight: 'var(--fw-extra)',
        fontSize: size, letterSpacing: 'var(--ls-tight)', color: 'var(--text-strong)',
      }}>ГЕККО</span>
    </span>
  );
}
