/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import * as stylex from '@stylexjs/stylex';
import { vars } from '@/theming/vars.stylex';

const CODE_EXAMPLE = `import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  button: {
    backgroundColor: {
      default: 'var(--primary)',
      ':hover': 'var(--primary-hover)',
    },
    color: 'white',
    borderRadius: 8,
    paddingBlock: '0.75rem',
    paddingInline: '1.5rem',
    fontWeight: 600,
    transition: 'all 0.2s',
  },
});

export default function Button({ label }) {
  return (
    <button {...stylex.props(styles.button)}>
      {label}
    </button>
  );
}`;

export default function CodeShowcase() {
  return (
    <section {...stylex.props(styles.section)}>
      <div {...stylex.props(styles.content)}>
        <h2 {...stylex.props(styles.heading)}>
          Write styles the way you write code
        </h2>
        <p {...stylex.props(styles.description)}>
          Co-locate your styles with your components. Get full type safety,
          autocomplete, and compile-time optimization — all with a familiar
          JavaScript API.
        </p>
        <div {...stylex.props(styles.highlights)}>
          <div {...stylex.props(styles.highlight)}>
            <span {...stylex.props(styles.highlightDot, styles.dotPink)} />
            <span {...stylex.props(styles.highlightText)}>
              Zero runtime overhead
            </span>
          </div>
          <div {...stylex.props(styles.highlight)}>
            <span {...stylex.props(styles.highlightDot, styles.dotBlue)} />
            <span {...stylex.props(styles.highlightText)}>
              Atomic CSS output
            </span>
          </div>
          <div {...stylex.props(styles.highlight)}>
            <span {...stylex.props(styles.highlightDot, styles.dotPurple)} />
            <span {...stylex.props(styles.highlightText)}>
              Type-safe themes
            </span>
          </div>
        </div>
      </div>
      <div {...stylex.props(styles.codeWrapper)}>
        <div {...stylex.props(styles.codeHeader)}>
          <div {...stylex.props(styles.codeDots)}>
            <span {...stylex.props(styles.codeDot, styles.codeDotRed)} />
            <span {...stylex.props(styles.codeDot, styles.codeDotYellow)} />
            <span {...stylex.props(styles.codeDot, styles.codeDotGreen)} />
          </div>
          <span {...stylex.props(styles.codeFilename)}>Button.tsx</span>
        </div>
        <pre {...stylex.props(styles.codeBlock)}>
          <code {...stylex.props(styles.code)}>{CODE_EXAMPLE}</code>
        </pre>
      </div>
    </section>
  );
}

const TABLET = '@media (max-width: 768px)';

const styles = stylex.create({
  section: {
    display: 'grid',
    gridTemplateColumns: {
      default: '1fr 1fr',
      [TABLET]: '1fr',
    },
    gap: 48,
    alignItems: 'center',
    width: '100%',
    maxWidth: 1100,
    paddingBlock: 48,
    paddingInline: 24,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
  },
  heading: {
    margin: 0,
    fontSize: 'clamp(1.5rem, 1.2rem + 1.5vw, 2.25rem)',
    fontWeight: 700,
    color: vars['--color-fd-foreground'],
    lineHeight: 1.2,
  },
  description: {
    margin: 0,
    fontSize: '1.1rem',
    lineHeight: 1.7,
    color: vars['--color-fd-muted-foreground'],
  },
  highlights: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    marginTop: 8,
  },
  highlight: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  highlightDot: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    flexShrink: 0,
  },
  dotPink: {
    backgroundColor: vars['--color-fd-primary'],
  },
  dotBlue: {
    backgroundColor: vars['--color-fd-accent-foreground'],
  },
  dotPurple: {
    backgroundColor: vars['--color-fd-ring'],
  },
  highlightText: {
    fontSize: '0.95rem',
    fontWeight: 500,
    color: vars['--color-fd-foreground'],
  },
  codeWrapper: {
    borderRadius: 16,
    overflow: 'hidden',
    borderColor: vars['--color-fd-border'],
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: vars['--color-fd-card'],
  },
  codeHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    paddingBlock: 12,
    paddingInline: 16,
    borderBottomColor: vars['--color-fd-border'],
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
  },
  codeDots: {
    display: 'flex',
    gap: 6,
  },
  codeDot: {
    width: 12,
    height: 12,
    borderRadius: '50%',
  },
  codeDotRed: {
    backgroundColor: '#ff5f57',
  },
  codeDotYellow: {
    backgroundColor: '#febc2e',
  },
  codeDotGreen: {
    backgroundColor: '#28c840',
  },
  codeFilename: {
    fontSize: '0.8rem',
    color: vars['--color-fd-muted-foreground'],
    fontFamily: vars['--font-mono'],
  },
  codeBlock: {
    margin: 0,
    padding: 20,
    overflowX: 'auto',
  },
  code: {
    fontSize: '0.85rem',
    lineHeight: 1.7,
    color: vars['--color-fd-foreground'],
    fontFamily: vars['--font-mono'],
  },
});
