/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import * as stylex from '@stylexjs/stylex';
import { Button } from '@stylexjs/shared-ui';
import { tokens } from '@stylexjs/shared-ui/tokens.stylex';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.inner)}>
        <div>
          <a
            href="https://vite.dev"
            target="_blank"
            {...stylex.props(styles.link, styles.linkHover)}
          >
            <img
              alt="Vite logo"
              src={viteLogo}
              {...stylex.props(styles.logo, styles.animated)}
            />
          </a>
          <a
            href="https://react.dev"
            target="_blank"
            {...stylex.props(styles.link, styles.linkHover)}
          >
            <img
              alt="React logo"
              src={reactLogo}
              {...stylex.props(styles.logo, styles.reactLogo, styles.animated)}
            />
          </a>
        </div>
        <h1 {...stylex.props(styles.h1)}>Vite + React</h1>
        <div {...stylex.props(styles.card)}>
          <Button onClick={() => console.log('External lib works!')}>
            Test External Lib
          </Button>
          <button
            {...stylex.props(styles.button, styles.buttonInteractive)}
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <section {...stylex.props(styles.launchRail)}>
          <div {...stylex.props(styles.launchRailHeader)}>
            <p {...stylex.props(styles.kicker)}>Launch Readiness</p>
            <p {...stylex.props(styles.statusPill)}>
              Demo branch awaiting mobile sign-off
            </p>
          </div>
          <div {...stylex.props(styles.metricGrid)}>
            <article {...stylex.props(styles.metricCard)}>
              <span {...stylex.props(styles.metricLabel)}>Desktop QA</span>
              <strong {...stylex.props(styles.metricValue)}>Ready</strong>
              <p {...stylex.props(styles.metricCopy)}>
                Primary actions render cleanly at desktop widths.
              </p>
            </article>
            <article {...stylex.props(styles.metricCard)}>
              <span {...stylex.props(styles.metricLabel)}>Mobile QA</span>
              <strong {...stylex.props(styles.metricValue)}>Needs review</strong>
              <p {...stylex.props(styles.metricCopy)}>
                The launch rail keeps its desktop width on narrow screens.
              </p>
            </article>
            <article {...stylex.props(styles.metricCard)}>
              <span {...stylex.props(styles.metricLabel)}>Proof of Work</span>
              <strong {...stylex.props(styles.metricValue)}>Requested</strong>
              <p {...stylex.props(styles.metricCopy)}>
                Capture the exact rendered page before shipping.
              </p>
            </article>
          </div>
          <div {...stylex.props(styles.launchRailFooter)}>
            <button {...stylex.props(styles.secondaryAction, styles.buttonInteractive)}>
              Open runbook
            </button>
            <button {...stylex.props(styles.primaryAction, styles.buttonInteractive)}>
              Approve launch gate
            </button>
          </div>
        </section>
        <p {...stylex.props(styles.readTheDocs)}>
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  );
}

const spin = stylex.keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' },
});

const styles = stylex.create({
  container: {
    minHeight: '100vh',
    display: 'grid',
    placeItems: 'center',
    padding: '2rem',
    textAlign: 'center',
  },
  inner: {
    maxWidth: 1280,
  },
  logo: {
    height: '6em',
    padding: '1.5em',
    willChange: 'filter',
    transitionProperty: 'filter',
    transitionDuration: '300ms',
    filter: { ':hover': 'drop-shadow(0 0 2em #646cffaa)' },
  },
  reactLogo: {
    filter: { ':hover': 'drop-shadow(0 0 2em #61dafbaa)' },
  },
  animated: {
    animationName: { '@media (prefers-reduced-motion: no-preference)': spin },
    animationDuration: {
      '@media (prefers-reduced-motion: no-preference)': '20s',
    },
    animationTimingFunction: {
      '@media (prefers-reduced-motion: no-preference)': 'linear',
    },
    animationIterationCount: {
      '@media (prefers-reduced-motion: no-preference)': 'infinite',
    },
  },
  card: { padding: '2em' },
  launchRail: {
    width: '720px',
    minWidth: '720px',
    marginTop: '2rem',
    padding: '1.5rem',
    borderRadius: '24px',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(100, 108, 255, 0.2)',
    backgroundColor: 'rgba(15, 23, 42, 0.92)',
    boxShadow: '0 24px 60px rgba(15, 23, 42, 0.22)',
    textAlign: 'left',
  },
  launchRailHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1.25rem',
  },
  kicker: {
    margin: 0,
    fontSize: '0.8rem',
    fontWeight: 700,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    color: '#94a3b8',
  },
  statusPill: {
    margin: 0,
    padding: '0.45rem 0.9rem',
    borderRadius: '999px',
    fontSize: '0.82rem',
    fontWeight: 600,
    color: '#dbeafe',
    backgroundColor: 'rgba(37, 99, 235, 0.24)',
  },
  metricGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gap: '1rem',
  },
  metricCard: {
    padding: '1rem',
    borderRadius: '18px',
    backgroundColor: 'rgba(30, 41, 59, 0.92)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(148, 163, 184, 0.15)',
  },
  metricLabel: {
    display: 'block',
    marginBottom: '0.5rem',
    fontSize: '0.85rem',
    color: '#94a3b8',
  },
  metricValue: {
    display: 'block',
    marginBottom: '0.65rem',
    fontSize: '1.15rem',
    color: '#f8fafc',
  },
  metricCopy: {
    margin: 0,
    fontSize: '0.92rem',
    lineHeight: 1.5,
    color: '#cbd5e1',
  },
  launchRailFooter: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '0.75rem',
    marginTop: '1.25rem',
  },
  readTheDocs: { color: '#888' },
  link: {
    fontWeight: 500,
    color: '#646cff',
    textDecoration: 'none',
  },
  linkHover: { color: { default: null, ':hover': '#535bf2' } },
  h1: { fontSize: '3.2em', lineHeight: '1.1', color: tokens.primaryColor },
  button: {
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'transparent',
    padding: '0.6em 1.2em',
    fontSize: '1em',
    fontWeight: 500,
    fontFamily: 'inherit',
    backgroundColor: 'hotpink',
    color: 'white',
    cursor: 'pointer',
    transitionProperty: 'border-color',
    transitionDuration: '250ms',
  },
  primaryAction: {
    borderRadius: 999,
    borderWidth: 0,
    padding: '0.8rem 1.2rem',
    fontSize: '0.95rem',
    fontWeight: 700,
    backgroundColor: '#22c55e',
    color: '#0f172a',
    cursor: 'pointer',
  },
  secondaryAction: {
    borderRadius: 999,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(148, 163, 184, 0.24)',
    padding: '0.8rem 1.2rem',
    fontSize: '0.95rem',
    fontWeight: 700,
    backgroundColor: 'transparent',
    color: '#e2e8f0',
    cursor: 'pointer',
  },
  buttonInteractive: {
    borderColor: { ':hover': '#646cff' },
    outline: { ':focus-visible': '4px auto -webkit-focus-ring-color' },
  },
});
