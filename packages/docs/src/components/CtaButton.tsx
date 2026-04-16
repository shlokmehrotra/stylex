/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import * as stylex from '@stylexjs/stylex';
import { Link } from 'waku';
import { vars } from '../theming/vars.stylex';

export default function CtaButton({
  children,
  color,
  to,
}: {
  children: React.ReactNode;
  color: 'pink' | 'blue';
  to: string;
}) {
  return (
    <Link
      {...stylex.props(
        styles.base,
        color === 'pink' && styles.pink,
        color === 'blue' && styles.blue,
      )}
      to={to}
    >
      {children}
    </Link>
  );
}
const styles = stylex.create({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.45rem',
    minWidth: 180,
    paddingBlock: '1rem',
    paddingInline: '2.25rem',
    fontWeight: 600,
    letterSpacing: '0.01em',
    whiteSpace: 'nowrap',
    textDecoration: {
      default: 'none',
      ':hover': 'none',
    },
    backgroundColor: 'transparent',
    borderColor: 'currentColor',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 999,
    boxShadow: {
      default: '0 10px 30px rgba(15, 23, 42, 0.16)',
      ':hover': '0 16px 36px rgba(15, 23, 42, 0.2)',
    },
    transform: {
      default: 'translateY(0)',
      ':hover': 'translateY(-2px)',
      ':active': 'translateY(1px)',
    },
    transitionDuration: {
      default: '0.2s',
      ':active': '0.05s',
    },
    transitionProperty: 'transform, color, background-color, box-shadow, border-color',
  },
  pink: {
    color: {
      default: vars['--color-fd-background'],
      ':focus-visible': vars['--color-fd-primary'],
      ':hover': vars['--color-fd-primary'],
    },
    backgroundImage: {
      default: `linear-gradient(135deg, ${vars['--color-fd-primary']} 0%, color-mix(in srgb, ${vars['--color-fd-primary']} 72%, white) 100%)`,
      ':focus-visible': `linear-gradient(135deg, color-mix(in srgb, ${vars['--color-fd-primary']} 14%, transparent) 0%, color-mix(in srgb, ${vars['--color-fd-primary']} 8%, white) 100%)`,
      ':hover': `linear-gradient(135deg, color-mix(in srgb, ${vars['--color-fd-primary']} 14%, transparent) 0%, color-mix(in srgb, ${vars['--color-fd-primary']} 8%, white) 100%)`,
    },
    boxShadow: {
      default: `0 14px 34px color-mix(in srgb, ${vars['--color-fd-primary']} 28%, transparent)`,
      ':hover': `0 18px 42px color-mix(in srgb, ${vars['--color-fd-primary']} 34%, transparent)`,
    },
    borderColor: vars['--color-fd-primary'],
  },
  blue: {
    color: {
      default: vars['--color-fd-background'],
      ':focus-visible': vars['--color-fd-accent-foreground'],
      ':hover': vars['--color-fd-accent-foreground'],
    },
    backgroundImage: {
      default: `linear-gradient(135deg, ${vars['--color-fd-accent-foreground']} 0%, color-mix(in srgb, ${vars['--color-fd-accent-foreground']} 72%, white) 100%)`,
      ':focus-visible': `linear-gradient(135deg, color-mix(in srgb, ${vars['--color-fd-accent-foreground']} 16%, transparent) 0%, color-mix(in srgb, ${vars['--color-fd-accent-foreground']} 10%, white) 100%)`,
      ':hover': `linear-gradient(135deg, color-mix(in srgb, ${vars['--color-fd-accent-foreground']} 16%, transparent) 0%, color-mix(in srgb, ${vars['--color-fd-accent-foreground']} 10%, white) 100%)`,
    },
    boxShadow: {
      default: `0 14px 34px color-mix(in srgb, ${vars['--color-fd-accent-foreground']} 24%, transparent)`,
      ':hover': `0 18px 42px color-mix(in srgb, ${vars['--color-fd-accent-foreground']} 30%, transparent)`,
    },
    borderColor: vars['--color-fd-accent-foreground'],
  },
});
