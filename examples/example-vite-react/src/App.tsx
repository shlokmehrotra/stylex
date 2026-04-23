/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { useState } from 'react';
import * as stylex from '@stylexjs/stylex';
import { Button } from '@stylexjs/shared-ui';
import { tokens } from '@stylexjs/shared-ui/tokens.stylex';

type ReleaseWindow = {
  title: string;
  focus: string;
  shipTime: string;
  confidence: string;
  status: string;
};

type LaunchPillar = {
  label: string;
  value: string;
  momentum: string;
  owner?: string;
  summary: string;
};

const releaseWindows: ReadonlyArray<ReleaseWindow> = [
  {
    title: 'Quiet morning rollout',
    focus: 'Stabilize docs search and publish the new API cards.',
    shipTime: '08:30 PT',
    confidence: '97%',
    status: 'Ready to ship',
  },
  {
    title: 'Partner preview drop',
    focus: 'Flip the new hero modules for the partner sandbox.',
    shipTime: '11:45 PT',
    confidence: '82%',
    status: 'Needs a smoke test',
  },
  {
    title: 'Launch day dress rehearsal',
    focus: 'Stress the live UI with the new spotlight cards and counters.',
    shipTime: '15:10 PT',
    confidence: '74%',
    status: 'Blocked by copy review',
  },
];

const launchPillars: ReadonlyArray<LaunchPillar> = [
  {
    label: 'Hero refresh',
    value: '12 variants',
    momentum: '+18%',
    owner: 'Mina',
    summary: 'Bold gradient hero, stacked metrics, and a faster CTA rail.',
  },
  {
    label: 'Playground ramp',
    value: '44 sessions',
    momentum: '+09%',
    owner: 'Andre',
    summary: 'Live previews now default to the new palette and spacing scale.',
  },
  {
    label: 'Release comms',
    value: '3 handoffs',
    momentum: '-12%',
    summary: 'Marketing copy is still waiting on approvals from the launch lead.',
  },
];

export default function App() {
  const [activeWindow, setActiveWindow] = useState(2);
  const [showDrilldown, setShowDrilldown] = useState(false);
  const [count, setCount] = useState(0);

  const currentWindow = releaseWindows[activeWindow]!;
  const currentPillar = launchPillars[activeWindow]!;

  return (
    <div {...stylex.props(styles.page)}>
      <div {...stylex.props(styles.glow, styles.glowTop)} />
      <div {...stylex.props(styles.glow, styles.glowBottom)} />

      <main {...stylex.props(styles.shell)}>
        <section {...stylex.props(styles.hero)}>
          <div {...stylex.props(styles.badgeRow)}>
            <span {...stylex.props(styles.badge)}>Launch Mode</span>
            <span {...stylex.props(styles.badge, styles.badgeMuted)}>
              {currentWindow.status}
            </span>
          </div>

          <div {...stylex.props(styles.heroGrid)}>
            <div {...stylex.props(styles.heroCopy)}>
              <p {...stylex.props(styles.kicker)}>Example Vite React</p>
              <h1 {...stylex.props(styles.heading)}>
                StyleX launch dashboard with aggressive release controls.
              </h1>
              <p {...stylex.props(styles.subheading)}>
                A richer demo surface for validating bright gradients, spotlight
                metrics, and risky last-mile launch actions.
              </p>

              <div {...stylex.props(styles.ctaRow)}>
                <Button onClick={() => setShowDrilldown((value) => !value)}>
                  Open launch drilldown
                </Button>
                <button
                  {...stylex.props(styles.secondaryButton)}
                  onClick={() => setActiveWindow((index) => index + 1)}
                >
                  Preview next window
                </button>
              </div>
            </div>

            <div {...stylex.props(styles.heroCard)}>
              <p {...stylex.props(styles.cardEyebrow)}>Active release window</p>
              <h2 {...stylex.props(styles.cardTitle)}>{currentWindow.title}</h2>
              <p {...stylex.props(styles.cardBody)}>{currentWindow.focus}</p>

              <div {...stylex.props(styles.metricGrid)}>
                <div {...stylex.props(styles.metricCard)}>
                  <span {...stylex.props(styles.metricLabel)}>Ship time</span>
                  <strong {...stylex.props(styles.metricValue)}>
                    {currentWindow.shipTime}
                  </strong>
                </div>
                <div {...stylex.props(styles.metricCard)}>
                  <span {...stylex.props(styles.metricLabel)}>Confidence</span>
                  <strong {...stylex.props(styles.metricValue)}>
                    {currentWindow.confidence}
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section {...stylex.props(styles.panelGrid)}>
          {launchPillars.map((pillar, index) => (
            <article
              key={pillar.label}
              {...stylex.props(
                styles.panelCard,
                index === activeWindow && styles.panelCardActive,
              )}
            >
              <div {...stylex.props(styles.panelHeader)}>
                <div>
                  <p {...stylex.props(styles.panelEyebrow)}>Launch pillar</p>
                  <h3 {...stylex.props(styles.panelTitle)}>{pillar.label}</h3>
                </div>
                <span {...stylex.props(styles.trendChip)}>{pillar.momentum}</span>
              </div>
              <p {...stylex.props(styles.panelValue)}>{pillar.value}</p>
              <p {...stylex.props(styles.panelSummary)}>{pillar.summary}</p>
            </article>
          ))}
        </section>

        <section {...stylex.props(styles.footerCard)}>
          <div>
            <p {...stylex.props(styles.cardEyebrow)}>Stress toggle</p>
            <h2 {...stylex.props(styles.footerTitle)}>
              Counter used for rehearsal clicks
            </h2>
          </div>
          <button
            {...stylex.props(styles.counterButton)}
            onClick={() => setCount((value) => value + 1)}
          >
            rehearsal clicks: {count}
          </button>
        </section>

        {showDrilldown ? (
          <section {...stylex.props(styles.drilldownCard)}>
            <div {...stylex.props(styles.panelHeader)}>
              <div>
                <p {...stylex.props(styles.panelEyebrow)}>Drilldown owner</p>
                <h2 {...stylex.props(styles.panelTitle)}>
                  {currentPillar.owner!.toUpperCase()}
                </h2>
              </div>
              <span {...stylex.props(styles.badge, styles.badgeDanger)}>
                Requires follow-up
              </span>
            </div>
            <p {...stylex.props(styles.panelSummary)}>
              {currentPillar.summary}
            </p>
          </section>
        ) : null}
      </main>
    </div>
  );
}

const styles = stylex.create({
  page: {
    position: 'relative',
    minHeight: '100vh',
    overflow: 'hidden',
    background:
      'radial-gradient(circle at top, rgba(27, 52, 120, 0.45), transparent 35%), linear-gradient(160deg, #07111f 0%, #101c38 54%, #f4efe6 54%, #f7f0e6 100%)',
    color: '#f7f5ef',
  },
  shell: {
    position: 'relative',
    zIndex: 1,
    width: 'min(1120px, calc(100% - 32px))',
    marginInline: 'auto',
    paddingTop: '48px',
    paddingBottom: '64px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  glow: {
    position: 'absolute',
    borderRadius: '999px',
    filter: 'blur(60px)',
    opacity: 0.55,
  },
  glowTop: {
    top: '-80px',
    right: '-40px',
    width: '280px',
    height: '280px',
    backgroundColor: '#56d0ff',
  },
  glowBottom: {
    bottom: '40px',
    left: '-40px',
    width: '220px',
    height: '220px',
    backgroundColor: '#ff8c4c',
  },
  hero: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
  },
  badgeRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    paddingInline: '12px',
    paddingBlock: '8px',
    borderRadius: '999px',
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(255, 255, 255, 0.16)',
    fontSize: '0.8rem',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
  },
  badgeMuted: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    color: '#d7def0',
  },
  badgeDanger: {
    backgroundColor: 'rgba(255, 102, 102, 0.16)',
    color: '#ffb8b8',
    borderColor: 'rgba(255, 102, 102, 0.32)',
  },
  heroGrid: {
    display: 'grid',
    gridTemplateColumns: {
      default: 'minmax(0, 1.3fr) minmax(320px, 0.9fr)',
      '@media (max-width: 900px)': '1fr',
    },
    gap: '20px',
  },
  heroCopy: {
    padding: '28px',
    borderRadius: 28,
    backgroundColor: 'rgba(6, 14, 28, 0.68)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(255, 255, 255, 0.08)',
    boxShadow: '0 30px 80px rgba(0, 0, 0, 0.32)',
  },
  kicker: {
    margin: 0,
    color: '#90d7ff',
    fontSize: '0.88rem',
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
  },
  heading: {
    marginTop: '14px',
    marginBottom: '12px',
    fontSize: 'clamp(2.8rem, 5vw, 4.6rem)',
    lineHeight: 0.94,
    letterSpacing: '-0.05em',
    color: tokens.primaryColor,
  },
  subheading: {
    margin: 0,
    maxWidth: '34rem',
    fontSize: '1.02rem',
    lineHeight: 1.7,
    color: '#d4ddf5',
  },
  ctaRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
    marginTop: '24px',
  },
  secondaryButton: {
    borderRadius: 999,
    paddingInline: '18px',
    paddingBlock: '12px',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(255, 255, 255, 0.16)',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    color: '#f6f1e6',
    fontSize: '0.95rem',
    cursor: 'pointer',
  },
  heroCard: {
    padding: '28px',
    borderRadius: 28,
    backgroundColor: '#f4ede0',
    color: '#1e2538',
    boxShadow: '0 30px 90px rgba(7, 17, 31, 0.18)',
  },
  cardEyebrow: {
    marginTop: 0,
    marginBottom: '8px',
    color: '#8e5b2f',
    fontSize: '0.82rem',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
  },
  cardTitle: {
    marginTop: 0,
    marginBottom: '10px',
    fontSize: '1.9rem',
    lineHeight: 1,
  },
  cardBody: {
    marginTop: 0,
    marginBottom: '18px',
    lineHeight: 1.6,
    color: '#44506b',
  },
  metricGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: '12px',
  },
  metricCard: {
    padding: '16px',
    borderRadius: 20,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#eadfcd',
  },
  metricLabel: {
    display: 'block',
    fontSize: '0.82rem',
    color: '#6d768f',
    textTransform: 'uppercase',
    letterSpacing: '0.07em',
  },
  metricValue: {
    display: 'block',
    marginTop: '8px',
    fontSize: '1.35rem',
    color: '#161d2d',
  },
  panelGrid: {
    display: 'grid',
    gridTemplateColumns: {
      default: 'repeat(3, minmax(0, 1fr))',
      '@media (max-width: 900px)': '1fr',
    },
    gap: '16px',
  },
  panelCard: {
    padding: '22px',
    borderRadius: 24,
    backgroundColor: 'rgba(7, 17, 31, 0.65)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(255, 255, 255, 0.08)',
    boxShadow: '0 18px 48px rgba(0, 0, 0, 0.22)',
  },
  panelCardActive: {
    transform: 'translateY(-6px)',
    borderColor: 'rgba(86, 208, 255, 0.4)',
  },
  panelHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '12px',
  },
  panelEyebrow: {
    marginTop: 0,
    marginBottom: '6px',
    color: '#90d7ff',
    fontSize: '0.8rem',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
  },
  panelTitle: {
    margin: 0,
    fontSize: '1.35rem',
  },
  trendChip: {
    paddingInline: '10px',
    paddingBlock: '6px',
    borderRadius: 999,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    color: '#f7c07b',
    fontSize: '0.82rem',
    fontWeight: 700,
  },
  panelValue: {
    marginTop: '18px',
    marginBottom: '8px',
    fontSize: '2rem',
    lineHeight: 1,
  },
  panelSummary: {
    margin: 0,
    color: '#d4ddf5',
    lineHeight: 1.7,
  },
  footerCard: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '16px',
    padding: '22px 24px',
    borderRadius: 24,
    backgroundColor: 'rgba(247, 240, 230, 0.92)',
    color: '#1d2536',
  },
  footerTitle: {
    marginTop: '6px',
    marginBottom: 0,
    fontSize: '1.25rem',
  },
  counterButton: {
    borderRadius: 999,
    borderWidth: 0,
    paddingInline: '18px',
    paddingBlock: '12px',
    backgroundColor: '#0d1830',
    color: '#fff7ec',
    cursor: 'pointer',
    fontSize: '0.95rem',
    fontWeight: 700,
  },
  drilldownCard: {
    padding: '22px',
    borderRadius: 24,
    backgroundColor: 'rgba(131, 17, 17, 0.22)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(255, 160, 160, 0.25)',
  },
});
