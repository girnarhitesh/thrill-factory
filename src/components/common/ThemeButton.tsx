import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

type ThemeButtonSize = 'md' | 'sm';
type ThemeButtonTone = 'on-dark' | 'on-light';
type ThemeButtonVariant = 'ghost' | 'solid';

interface ThemeButtonBaseProps {
  size?: ThemeButtonSize;
  tone?: ThemeButtonTone;
  variant?: ThemeButtonVariant;
  arrow?: boolean;
  block?: boolean;
  children: React.ReactNode;
  className?: string;
}

type ThemeButtonAsButton = ThemeButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & {
    href?: undefined;
  };

type ThemeButtonAsLink = ThemeButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> & {
    href: string;
  };

export type ThemeButtonProps = ThemeButtonAsButton | ThemeButtonAsLink;

const cx = (...parts: Array<string | false | undefined>) =>
  parts.filter(Boolean).join(' ');

const isInternalHref = (href: string) => href.startsWith('/') && !href.startsWith('//');

export const ThemeButton: React.FC<ThemeButtonProps> = ({
  size = 'md',
  tone = 'on-light',
  variant = 'ghost',
  arrow = false,
  block = false,
  children,
  className,
  ...props
}) => {
  const classes = cx(
    'btn',
    `btn--${size}`,
    `btn--${tone}`,
    `btn--${variant}`,
    arrow && 'btn--arrow',
    block && 'btn--block',
    className
  );

  const content = (
    <>
      <span className="btn__label">{children}</span>
      {arrow && (
        <span className="btn__arrow" aria-hidden="true">
          <ArrowUpRight size={16} strokeWidth={1.75} />
        </span>
      )}
    </>
  );

  if ('href' in props && props.href) {
    const { href, ...linkProps } = props;

    if (isInternalHref(href)) {
      return (
        <Link href={href} className={classes} {...linkProps}>
          {content}
        </Link>
      );
    }

    return (
      <a href={href} className={classes} {...linkProps}>
        {content}
      </a>
    );
  }

  const { type, ...buttonProps } = props as ThemeButtonAsButton;

  return (
    <button type={type ?? 'button'} className={classes} {...buttonProps}>
      {content}
    </button>
  );
};
