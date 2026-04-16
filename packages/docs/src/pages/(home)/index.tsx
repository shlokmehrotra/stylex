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
import FeatureCard from '@/components/FeatureCard';
import CodeShowcase from '@/components/CodeShowcase';
import { vars } from '@/theming/vars.stylex';

function LightningIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function PaletteIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />
      <path d="m2 12 8.58 3.91a2 2 0 0 0 1.66 0L20.34 12" />
      <path d="m2 17 8.58 3.91a2 2 0 0 0 1.66 0L20.34 17" />
    </svg>
  );
}

const FEATURES = [
  {
    icon: <LightningIcon />,
    title: 'Zero Runtime',
    description:
      'Styles are compiled away at build time into atomic CSS classes. No runtime style injection means faster page loads and better performance.',
    accent: 'pink' as const,
  },
  {
    icon: <ShieldIcon />,
    title: 'Type Safe',
    description:
      'Full TypeScript and Flow support with compile-time validation. Catch styling errors before they reach production.',
    accent: 'blue' as const,
  },
  {
    icon: <PaletteIcon />,
    title: 'Themeable',
    description:
      'First-class theming with CSS variables. Create consistent design systems with type-safe theme tokens that work across your entire app.',
    accent: 'purple' as const,
  },
  {
    icon: <LayersIcon />,
    title: 'Composable',
    description:
      'Merge and compose styles with deterministic resolution. The last style applied always wins — no specificity wars.',
    accent: 'green' as const,
  },
];

const STATS = [
  { value: '0kb', label: 'Runtime JS' },
  { value: '100%', label: 'Type Safe' },
  { value: 'Atomic', label: 'CSS Output' },
  { value: 'Meta', label: 'Battle Tested' },
];

export default function Home() {
  return (
    <>
      <title>StyleX — styling system for ambitious interfaces</title>
      <main {...stylex.props(styles.main)}>
        {/* Hero Section */}
        <section {...stylex.props(styles.hero)}>
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
        </section>

        {/* Stats Bar */}
        <section {...stylex.props(styles.statsSection)}>
          {STATS.map((stat) => (
            <div key={stat.label} {...stylex.props(styles.stat)}>
              <span {...stylex.props(styles.statValue)}>{stat.value}</span>
              <span {...stylex.props(styles.statLabel)}>{stat.label}</span>
            </div>
          ))}
        </section>

        {/* Feature Cards */}
        <section {...stylex.props(styles.featuresSection)}>
          <h2 {...stylex.props(styles.sectionTitle)}>
            Why StyleX?
          </h2>
          <p {...stylex.props(styles.sectionSubtitle)}>
            Built for large-scale applications where performance, maintainability,
            and developer experience matter.
          </p>
          <div {...stylex.props(styles.featuresGrid)}>
            {FEATURES.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </section>

        {/* Code Showcase */}
        <CodeShowcase />

        {/* Bottom CTA */}
        <section {...stylex.props(styles.bottomCta)}>
          <h2 {...stylex.props(styles.bottomCtaTitle)}>
            Ready to get started?
          </h2>
          <p {...stylex.props(styles.bottomCtaDescription)}>
            Join the community building fast, type-safe, and maintainable UIs with StyleX.
          </p>
          <div {...stylex.props(styles.bottomCtaButtons)}>
            <CtaButton color="pink" to="/docs/learn/">
              Read the Docs
            </CtaButton>
            <CtaButton color="blue" to="/playground">
              Try the Playground
            </CtaButton>
          </div>
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
    color: vars['--color-fd-foreground'],
    backgroundColor: vars['--color-fd-background'],
  },
  hero: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2vh',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    minHeight: '80vh',
    paddingBlock: 64,
    paddingInline: 32,
  },
  title: {
    position: 'relative',
    zIndex: 0,
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
    paddingInline: 24,
    margin: 0,
    fontSize: 'clamp(1.2rem, 1.2rem + 1vw, 2rem)',
    fontWeight: 200,
    color: vars['--color-fd-foreground'],
    textAlign: 'center',
  },
  ctaSpacer: {
    flexGrow: 1,
    maxHeight: 64,
  },
  ctaSection: {
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

  // Stats Section
  statsSection: {
    display: 'grid',
    gridTemplateColumns: {
      default: 'repeat(4, 1fr)',
      [TABLET_BREAK]: 'repeat(2, 1fr)',
    },
    gap: 32,
    width: '100%',
    maxWidth: 900,
    paddingBlock: 48,
    paddingInline: 32,
    borderTopColor: vars['--color-fd-border'],
    borderTopStyle: 'solid',
    borderTopWidth: 1,
    borderBottomColor: vars['--color-fd-border'],
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
  },
  stat: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4,
  },
  statValue: {
    fontSize: 'clamp(1.5rem, 1.2rem + 1vw, 2rem)',
    fontWeight: 700,
    color: vars['--color-fd-primary'],
  },
  statLabel: {
    fontSize: '0.875rem',
    color: vars['--color-fd-muted-foreground'],
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },

  // Features Section
  featuresSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: 1100,
    paddingBlock: 80,
    paddingInline: 24,
  },
  sectionTitle: {
    margin: 0,
    fontSize: 'clamp(1.75rem, 1.5rem + 1vw, 2.5rem)',
    fontWeight: 700,
    color: vars['--color-fd-foreground'],
    textAlign: 'center',
  },
  sectionSubtitle: {
    margin: 0,
    marginTop: 16,
    marginBottom: 48,
    fontSize: '1.1rem',
    lineHeight: 1.6,
    color: vars['--color-fd-muted-foreground'],
    textAlign: 'center',
    maxWidth: 600,
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: {
      default: 'repeat(2, 1fr)',
      [TABLET_BREAK]: '1fr',
    },
    gap: 24,
    width: '100%',
  },

  // Bottom CTA
  bottomCta: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 24,
    width: '100%',
    paddingBlock: 80,
    paddingInline: 32,
  },
  bottomCtaTitle: {
    margin: 0,
    fontSize: 'clamp(1.5rem, 1.2rem + 1vw, 2.25rem)',
    fontWeight: 700,
    color: vars['--color-fd-foreground'],
    textAlign: 'center',
  },
  bottomCtaDescription: {
    margin: 0,
    fontSize: '1.1rem',
    color: vars['--color-fd-muted-foreground'],
    textAlign: 'center',
    maxWidth: 500,
  },
  bottomCtaButtons: {
    display: 'grid',
    gridTemplateColumns: {
      [CTA_BREAK]: '1fr',
      default: 'repeat(2, 1fr)',
    },
    gap: '1rem',
    marginTop: 8,
  },
});

export const getConfig = async () => {
  return {
    render: 'static',
  };
};
