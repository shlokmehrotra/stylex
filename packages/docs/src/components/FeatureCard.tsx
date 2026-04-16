/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import * as stylex from '@stylexjs/stylex';
import { vars } from '@/theming/vars.stylex';

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  accent: 'pink' | 'blue' | 'purple' | 'green';
};

export default function FeatureCard({
  icon,
  title,
  description,
  accent,
}: FeatureCardProps) {
  return (
    <div {...stylex.props(styles.card, accentStyles[accent])}>
      <div {...stylex.props(styles.iconWrapper, accentIconStyles[accent])}>
        {icon}
      </div>
      <h3 {...stylex.props(styles.title)}>{title}</h3>
      <p {...stylex.props(styles.description)}>{description}</p>
    </div>
  );
}

const TABLET = '@media (max-width: 768px)';

const styles = stylex.create({
  card: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    padding: 32,
    borderRadius: 16,
    backgroundColor: vars['--color-fd-card'],
    borderColor: vars['--color-fd-border'],
    borderStyle: 'solid',
    borderWidth: 1,
    transitionDuration: '0.3s',
    transitionProperty: 'transform, box-shadow, border-color',
    transitionTimingFunction: 'ease-out',
    scale: {
      default: '1',
      ':hover': '1.02',
    },
  },
  iconWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    borderRadius: 12,
    fontSize: 24,
  },
  title: {
    margin: 0,
    fontSize: '1.25rem',
    fontWeight: 600,
    color: vars['--color-fd-foreground'],
  },
  description: {
    margin: 0,
    fontSize: '0.95rem',
    lineHeight: 1.6,
    color: vars['--color-fd-muted-foreground'],
  },
});

const accentStyles = stylex.create({
  pink: {
    borderColor: {
      ':hover': vars['--color-fd-primary'],
    },
    boxShadow: {
      ':hover': `0 8px 32px color-mix(in srgb, ${vars['--color-fd-primary']} 15%, transparent)`,
    },
  },
  blue: {
    borderColor: {
      ':hover': vars['--color-fd-accent-foreground'],
    },
    boxShadow: {
      ':hover': `0 8px 32px color-mix(in srgb, ${vars['--color-fd-accent-foreground']} 15%, transparent)`,
    },
  },
  purple: {
    borderColor: {
      ':hover': vars['--color-fd-ring'],
    },
    boxShadow: {
      ':hover': `0 8px 32px color-mix(in srgb, ${vars['--color-fd-ring']} 15%, transparent)`,
    },
  },
  green: {
    borderColor: {
      ':hover': vars['--color-fd-success'],
    },
    boxShadow: {
      ':hover': `0 8px 32px color-mix(in srgb, ${vars['--color-fd-success']} 15%, transparent)`,
    },
  },
});

const accentIconStyles = stylex.create({
  pink: {
    backgroundColor: `color-mix(in srgb, ${vars['--color-fd-primary']} 15%, transparent)`,
    color: vars['--color-fd-primary'],
  },
  blue: {
    backgroundColor: `color-mix(in srgb, ${vars['--color-fd-accent-foreground']} 15%, transparent)`,
    color: vars['--color-fd-accent-foreground'],
  },
  purple: {
    backgroundColor: `color-mix(in srgb, ${vars['--color-fd-ring']} 15%, transparent)`,
    color: vars['--color-fd-ring'],
  },
  green: {
    backgroundColor: `color-mix(in srgb, ${vars['--color-fd-success']} 15%, transparent)`,
    color: vars['--color-fd-success'],
  },
});
