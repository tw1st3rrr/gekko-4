import * as React from 'react';

export interface ChipProps {
  /** Selected state. */
  active?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Selectable rounded tag for multi-select filters. */
export function Chip(props: ChipProps): JSX.Element;
