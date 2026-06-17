import * as React from 'react';

export interface PixelMarkProps {
  /** Square size in px (default 6). */
  size?: number;
  /** Gap between squares in px (default 2). */
  gap?: number;
  /** Square color (default brand accent). */
  color?: string;
  style?: React.CSSProperties;
}

export interface WordmarkProps {
  /** Wordmark font size in px (default 16). */
  size?: number;
  style?: React.CSSProperties;
}

/** The 2×2 pixel-cluster brand glyph. */
export function PixelMark(props: PixelMarkProps): JSX.Element;
/** PixelMark + "ГЕККО" wordmark. */
export function Wordmark(props: WordmarkProps): JSX.Element;
