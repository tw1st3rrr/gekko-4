import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Enable hover lift + shadow (use for clickable cards). */
  interactive?: boolean;
  /** Accent 2px border + elevated shadow — the "popular" pricing treatment. */
  popular?: boolean;
  /** Apply default 24px padding (default true). */
  padded?: boolean;
  children?: React.ReactNode;
}

/**
 * Default surface container — soft radius, hairline border, subtle shadow.
 * @startingPoint section="Core" subtitle="Rounded surface — interactive & popular variants" viewport="700x220"
 */
export function Card(props: CardProps): JSX.Element;
