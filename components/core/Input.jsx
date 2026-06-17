import React from 'react';

/**
 * Input / Textarea — rounded-xl field, hairline border, transparent fill,
 * focus ring. `as="textarea"` for multiline.
 */
export function Input({ as = 'input', style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const Tag = as;
  return (
    <Tag
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      style={{
        width: '100%', boxSizing: 'border-box', fontFamily: 'var(--gk-font-body)',
        fontSize: 'var(--fs-sm)', padding: '10px 12px',
        borderRadius: 'var(--r-md)', background: 'transparent',
        color: 'var(--text-strong)',
        border: `var(--border-w) solid ${focus ? 'transparent' : 'var(--border-subtle)'}`,
        outline: 'none',
        boxShadow: focus ? '0 0 0 2px var(--gk-ink)' : 'none',
        resize: as === 'textarea' ? 'none' : undefined,
        transition: 'box-shadow var(--dur-fast), border-color var(--dur-fast)',
        ...style,
      }}
      {...rest}
    />
  );
}
