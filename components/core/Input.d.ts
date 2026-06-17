import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Render as `input` (default) or `textarea`. */
  as?: 'input' | 'textarea';
  rows?: number;
}

/** Rounded form field with a focus ring; supports textarea via `as`. */
export function Input(props: InputProps): JSX.Element;
