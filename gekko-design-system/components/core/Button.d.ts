import * as React from 'react';

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Visual style. `primary` solid green, `light` white (for dark sections), `outline` bordered. */
  variant?: 'primary' | 'light' | 'outline';
  /** Control size. */
  size?: 'sm' | 'md' | 'lg';
  /** Render as an anchor with this href instead of a <button>. */
  href?: string;
  /** Optional icon node (e.g. an arrow). */
  icon?: React.ReactNode;
  /** Place the icon after the label (default true). */
  iconRight?: boolean;
  /** Stretch to full width. */
  full?: boolean;
  children?: React.ReactNode;
}

/**
 * Primary call-to-action button for ГЕККО surfaces.
 * @startingPoint section="Core" subtitle="Brand CTA — solid / outline / light" viewport="700x160"
 */
export function Button(props: ButtonProps): JSX.Element;
