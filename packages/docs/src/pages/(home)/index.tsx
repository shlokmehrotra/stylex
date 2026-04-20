/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as stylex from '@stylexjs/stylex';
import StylexAnimatedLogo from '@/components/StylexAnimatedLogo';
import CtaButton from '@/components/CtaButton';
import TypingWord from '@/components/TypingWord';
import Footer from '@/components/Footer';
import { vars } from '@/theming/vars.stylex';

export default function Home() {
  return (
    <>
      <title>StyleX — styling system for ambitious interfaces</title>
      <main {...stylex.props(styles.main)}>
        <section {...stylex.props(styles.hero)}>
          <div {...stylex.props(styles.heroBackdrop)} aria-hidden="true">
            <div {...stylex.props(styles.glow, styles.glowPink)} />
            <div {...stylex.props(styles.glow, styles.glowBlue)} />
            <div {...stylex.props(styles.gridTint)} />
          </div>
          <p {...stylex.props(styles.eyebrow)}>
            Compile-time styling with a brighter docs front door
          </p>
          <h1 {...stylex.props(styles.title)}>
            <StylexAnimatedLogo style={styles.logo} />
          </h1>
          <p
            {...stylex.props(styles.subtitle)}
            aria-label="The expressive, type-safe, composable, predictable, and themeable styling system for ambitious interfaces"
          >
            <span aria-hidden="true">
              The <TypingWord />{' '}
              <br {...stylex.props(styles.mobileBreak)} aria-hidden="true" />
              styling system for{' '}
              <br {...stylex.props(styles.tabletBreak)} aria-hidden="true" />
              ambitious interfaces
            </span>
          </p>
          <div {...stylex.props(styles.ctaSpacer)} />
          <section {...stylex.props(styles.ctaSection)}>
            <CtaButton color="pink" to="/docs/learn/">
              Get Started
            </CtaButton>
            <CtaButton color="blue" to="/docs/learn/thinking-in-stylex/">
              Thinking in StyleX
            </CtaButton>
          </section>
          <div {...stylex.props(styles.proofStrip)}>
            <span {...stylex.props(styles.proofPill)}>Zero runtime</span>
            <span {...stylex.props(styles.proofPill)}>Predictable overrides</span>
            <span {...stylex.props(styles.proofPill)}>Theme-ready tokens</span>
          </div>
          <div {...stylex.props(styles.ctaSpacer)} />
        </section>
      </main>
      <Footer />
    </>
  );
}

const TABLET_BREAK = '@media (max-width: 768px)';
const CTA_BREAK = '@media (max-width: 460px)';

const styles = stylex.create({
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 'calc(100vh - 56px)',
    padding: 32,
    color: `${vars['--color-fd-foreground']}`,
    backgroundColor: `${vars['--color-fd-background']}`,
  },
  hero: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: '2vh',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    minHeight: '56vh',
    overflow: 'hidden',
    paddingBlock: 48,
  },
  heroBackdrop: {
    position: 'absolute',
    inset: 0,
    overflow: 'hidden',
  },
  glow: {
    position: 'absolute',
    borderRadius: '50%',
    filter: 'blur(18px)',
    opacity: 0.8,
  },
  glowPink: {
    top: 24,
    left: '18%',
    width: 220,
    height: 220,
    backgroundImage: `radial-gradient(circle, color-mix(in srgb, ${vars['--color-fd-primary']} 38%, white) 0%, transparent 72%)`,
  },
  glowBlue: {
    right: '14%',
    bottom: 40,
    width: 260,
    height: 260,
    backgroundImage: `radial-gradient(circle, color-mix(in srgb, ${vars['--color-fd-accent-foreground']} 34%, white) 0%, transparent 74%)`,
  },
  gridTint: {
    position: 'absolute',
    inset: 0,
    backgroundImage:
      'linear-gradient(to right, color-mix(in srgb, currentColor 7%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, currentColor 7%, transparent) 1px, transparent 1px)',
    backgroundSize: '32px 32px',
    opacity: 0.14,
  },
  eyebrow: {
    position: 'relative',
    zIndex: 1,
    margin: 0,
    paddingBlock: '0.45rem',
    paddingInline: '0.85rem',
    borderRadius: 999,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: `color-mix(in srgb, ${vars['--color-fd-border']} 88%, transparent)`,
    backgroundColor: `color-mix(in srgb, ${vars['--color-fd-card']} 86%, transparent)`,
    boxShadow: '0 12px 32px rgba(15, 23, 42, 0.08)',
    color: vars['--color-fd-muted-foreground'],
    fontSize: '0.82rem',
    fontWeight: 500,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
  },
  title: {
    position: 'relative',
    zIndex: 1,
    boxSizing: 'border-box',
    paddingBlock: '5px',
    paddingInline: 32,
    margin: 0,
    overflow: 'hidden',
  },
  logo: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    width: '100%',
  },
  subtitle: {
    position: 'relative',
    zIndex: 1,
    paddingInline: 24,
    margin: 0,
    fontSize: 'clamp(1.2rem, 1.2rem + 1vw, 2rem)',
    fontWeight: 200,
    color: `${vars['--color-fd-foreground']}`,
    textAlign: 'center',
  },
  ctaSpacer: {
    flexGrow: 1,
    maxHeight: 64,
  },
  ctaSection: {
    position: 'relative',
    zIndex: 1,
    display: 'grid',
    flexDirection: {
      [CTA_BREAK]: 'column',
      default: 'row',
    },
    gridTemplateColumns: {
      [CTA_BREAK]: '1fr',
      default: 'repeat(2, 1fr)',
    },
    gap: '1rem',
  },
  proofStrip: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '0.75rem',
    marginTop: 24,
    paddingInline: 24,
  },
  proofPill: {
    paddingBlock: '0.55rem',
    paddingInline: '0.9rem',
    borderRadius: 999,
    backgroundColor: `color-mix(in srgb, ${vars['--color-fd-card']} 92%, transparent)`,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: `color-mix(in srgb, ${vars['--color-fd-border']} 92%, transparent)`,
    color: vars['--color-fd-foreground'],
    fontSize: '0.9rem',
    fontWeight: 500,
    boxShadow: '0 10px 24px rgba(15, 23, 42, 0.08)',
  },
  mobileBreak: {
    display: {
      [CTA_BREAK]: 'block',
      default: 'none',
    },
  },
  tabletBreak: {
    display: {
      [TABLET_BREAK]: 'block',
      default: 'none',
    },
  },
});

export const getConfig = async () => {
  return {
    render: 'static',
  };
};
