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

const previewCards = [
  {
    id: 'hero-refresh',
    label: 'Hero refresh',
    status: 'Ready to preview',
    note: 'Desktop hero now uses a wider split layout with tighter copy.',
    owner: 'Mina',
  },
  {
    id: 'inspector-strip',
    label: 'Inspector strip',
    status: 'Needs QA',
    note: 'Adds a compact action rail for quicker design review.',
  },
];

export default function App() {
  const [count, setCount] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [activeOwner, setActiveOwner] = useState('No owner opened yet.');
  const activeCard = previewCards[activeCardIndex]!;

  return (
    <div {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.inner)}>
        <div {...stylex.props(styles.logoRow)}>
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
        <div {...stylex.props(styles.hero)}>
          <div {...stylex.props(styles.heroCopy)}>
            <p {...stylex.props(styles.eyebrow)}>QA Snapshot</p>
            <h1 {...stylex.props(styles.h1)}>Vite + React</h1>
            <p {...stylex.props(styles.summary)}>
              A small review cockpit for checking the next StyleX demo surface before launch.
            </p>
          </div>
          <div {...stylex.props(styles.panel)}>
            <p {...stylex.props(styles.panelLabel)}>Active preview</p>
            <h2 {...stylex.props(styles.panelTitle)}>{activeCard.label}</h2>
            <p {...stylex.props(styles.panelCopy)}>{activeCard.note}</p>
            <div {...stylex.props(styles.pillRow)}>
              <span {...stylex.props(styles.statusPill)}>{activeCard.status}</span>
              <span {...stylex.props(styles.ownerPill)}>{activeOwner}</span>
            </div>
          </div>
        </div>
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
          <button
            {...stylex.props(styles.button, styles.buttonInteractive, styles.secondaryButton)}
            onClick={() => setActiveCardIndex((index) => index + 1)}
          >
            Preview next card
          </button>
          <button
            {...stylex.props(styles.button, styles.buttonInteractive, styles.secondaryButton)}
            onClick={() => setActiveOwner(activeCard.owner.toUpperCase())}
          >
            Open active owner
          </button>
          <p {...stylex.props(styles.helperText)}>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
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
    textAlign: 'left',
    backgroundColor: '#fff8ef',
  },
  inner: {
    width: 'min(1120px, 100%)',
  },
  logoRow: {
    display: 'flex',
    justifyContent: 'center',
  },
  hero: {
    display: 'grid',
    gap: '1.5rem',
    gridTemplateColumns: {
      default: '1fr',
      '@media (min-width: 860px)': '1.15fr 0.85fr',
    },
    alignItems: 'stretch',
    marginBottom: '1.5rem',
  },
  heroCopy: {
    display: 'grid',
    gap: '0.8rem',
    alignContent: 'start',
  },
  eyebrow: {
    margin: 0,
    fontSize: '0.8rem',
    fontWeight: 700,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: '#8d4013',
  },
  summary: {
    margin: 0,
    maxWidth: '38rem',
    color: '#5e4631',
    fontSize: '1.02rem',
    lineHeight: 1.6,
  },
  panel: {
    display: 'grid',
    gap: '0.9rem',
    padding: '1.35rem',
    borderRadius: 22,
    backgroundColor: '#193126',
    color: '#f5efe3',
    boxShadow: '0 24px 60px rgba(22, 32, 25, 0.16)',
  },
  panelLabel: {
    margin: 0,
    fontSize: '0.8rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: '#b6d8c2',
  },
  panelTitle: {
    margin: 0,
    fontSize: '1.65rem',
    lineHeight: 1.1,
  },
  panelCopy: {
    margin: 0,
    color: '#d7e5dc',
    lineHeight: 1.5,
  },
  pillRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.75rem',
  },
  statusPill: {
    padding: '0.45rem 0.8rem',
    borderRadius: 999,
    backgroundColor: '#f2ab3d',
    color: '#193126',
    fontWeight: 700,
  },
  ownerPill: {
    padding: '0.45rem 0.8rem',
    borderRadius: 999,
    backgroundColor: '#274638',
    color: '#f5efe3',
    fontWeight: 600,
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
  card: {
    padding: '2em',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.85rem',
    alignItems: 'center',
    borderRadius: 22,
    backgroundColor: '#ffffff',
    boxShadow: '0 18px 45px rgba(163, 112, 45, 0.12)',
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
  secondaryButton: {
    backgroundColor: '#173a2d',
  },
  buttonInteractive: {
    borderColor: { ':hover': '#646cff' },
    outline: { ':focus-visible': '4px auto -webkit-focus-ring-color' },
  },
  helperText: {
    width: '100%',
    margin: 0,
    color: '#6f6255',
  },
});
