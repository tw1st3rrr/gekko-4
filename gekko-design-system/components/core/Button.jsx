import React from 'react';

/**
 * ГЕККО Button — the brand's primary call-to-action.
 * Three variants: solid green `primary`, `outline` (2px border, fills nothing),
 * and `light` (white on dark feature sections). Rounded-xl by default.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  href,
  icon,
  iconRight = true,
  full = false,
  children,
  style,
  ...rest
}) {
  const sizes = {
    sm: { padding: '8px 16px',  fontSize: 13, radius: 'var(--r-md)' },
    md: { padding: '10px 20px', fontSize: 14, radius: 'var(--r-md)' },
    lg: { padding: '14px 32px', fontSize: 15, radius: 'var(--r-lg)' },
  }[size];

  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    gap: 8, fontFamily: 'var(--gk-font-body)', fontWeight: 'var(--fw-bold)',
    fontSize: sizes.fontSize, padding: sizes.padding, borderRadius: sizes.radius,
    cursor: 'pointer', textDecoration: 'none', whiteSpace: 'nowrap',
    transition: 'background-color var(--dur-base), border-color var(--dur-base), transform var(--dur-fast), opacity var(--dur-base)',
    width: full ? '100%' : undefined, border: 'none', lineHeight: 1.2,
  };

  const variants = {
    primary: { background: 'var(--accent)', color: 'var(--accent-contrast)' },
    light:   { background: 'var(--gk-white)', color: 'var(--gk-ink)' },
    outline: {
      background: 'transparent', color: 'var(--text-strong)',
      border: 'var(--border-w-strong) solid var(--border-strong)',
    },
  };

  const onEnter = (e) => {
    if (variant === 'primary') e.currentTarget.style.backgroundColor = 'var(--accent-hover)';
    if (variant === 'light')   e.currentTarget.style.opacity = '0.9';
    if (variant === 'outline') { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }
  };
  const onLeave = (e) => {
    e.currentTarget.style.backgroundColor = variant === 'primary' ? 'var(--accent)' : variants[variant].background;
    e.currentTarget.style.opacity = '1';
    if (variant === 'outline') { e.currentTarget.style.borderColor = 'var(--border-strong)'; e.currentTarget.style.color = 'var(--text-strong)'; }
  };

  const content = <>{icon && !iconRight && icon}<span>{children}</span>{icon && iconRight && icon}</>;
  const props = { style: { ...base, ...variants[variant], ...style }, onMouseEnter: onEnter, onMouseLeave: onLeave, ...rest };

  return href ? <a href={href} {...props}>{content}</a> : <button {...props}>{content}</button>;
}
