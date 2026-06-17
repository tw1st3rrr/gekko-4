import * as React from 'react';

export interface SectionLabelProps {
  /** Label text (rendered uppercase). */
  children: React.ReactNode;
  /** Center the label (used on centered sections). */
  center?: boolean;
  style?: React.CSSProperties;
}

/** Uppercase eyebrow with the pixel-dot motif that opens each section. */
export function SectionLabel(props: SectionLabelProps): JSX.Element;
