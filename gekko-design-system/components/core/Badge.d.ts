import * as React from 'react';

export interface BadgeProps {
  /** `solid` accent pill, `soft` tinted, or `outline`. */
  variant?: 'solid' | 'soft' | 'outline';
  /** Optional leading icon (e.g. a star). */
  icon?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Small rounded pill for tags, counts and status labels. */
export function Badge(props: BadgeProps): JSX.Element;
