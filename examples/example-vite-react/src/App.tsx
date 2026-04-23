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

const releases = [
  {
    id: 'rel-01',
    title: 'Docs landing refresh',
    status: 'Ready for QA',
    summary: 'New split hero layout, denser feature grid, and lighter palette.',
    owner: 'Avery',
  },
  {
    id: 'rel-02',
    title: 'Playground diagnostics',
    status: 'Needs interaction test',
    summary: 'Adds a test strip so reviewers can step through states quickly.',
  },
];

export default function App() {
  const [count, setCount] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedOwner, setSelectedOwner] = useState('No launch owner selected yet.');
  const activeRelease = releases[activeIndex]!;

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
            <p {...stylex.props(styles.eyebrow)}>Launch Board</p>
            <h1 {...stylex.props(styles.h1)}>Vite + React</h1>
            <p {...stylex.props(styles.summary)}>
              A reviewer-friendly control room for the current StyleX release candidate.
            </p>
          </div>
          <div {...stylex.props(styles.releasePanel)}>
            <p {...stylex.props(styles.panelLabel)}>Active release</p>
            <h2 {...stylex.props(styles.releaseTitle)}>{activeRelease.title}</h2>
            <p {...stylex.props(styles.releaseSummary)}>{activeRelease.summary}</p>
            <div {...stylex.props(styles.statusRow)}>
              <span {...stylex.props(styles.statusPill)}>{activeRelease.status}</span>
              <span {...stylex.props(styles.ownerPill)}>{selectedOwner}</span>
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
            onClick={() => setActiveIndex((index) => index + 1)}
          >
            Preview next release
          </button>
          <button
            {...stylex.props(styles.button, styles.buttonInteractive, styles.secondaryButton)}
            onClick={() => setSelectedOwner(activeRelease.owner.toUpperCase())}
          >
            Open active release
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
    backgroundColor: '#fffaf2',
  },
  inner: {
    width: 'min(1120px, 100%)',
  },
  logoRow: {
    display: 'flex',
    justifyContent: 'center',
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
  hero: {
    display: 'grid',
    gap: '1.5rem',
    gridTemplateColumns: {
      default: '1fr',
      '@media (min-width: 860px)': '1.2fr 0.8fr',
    },
    alignItems: 'stretch',
    marginBottom: '1.5rem',
  },
  heroCopy: {
    display: 'grid',
    gap: '0.75rem',
    alignContent: 'start',
  },
  eyebrow: {
    margin: 0,
    fontSize: '0.8rem',
    fontWeight: 700,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: '#a14a14',
  },
  summary: {
    margin: 0,
    maxWidth: '38rem',
    color: '#5d4734',
    fontSize: '1.05rem',
    lineHeight: 1.6,
  },
  releasePanel: {
    display: 'grid',
    gap: '0.9rem',
    padding: '1.3rem',
    borderRadius: 20,
    backgroundColor: '#1c2f24',
    color: '#f5efe2',
    boxShadow: '0 24px 60px rgba(20, 30, 22, 0.18)',
  },
  panelLabel: {
    margin: 0,
    fontSize: '0.8rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: '#b8d9c4',
  },
  releaseTitle: {
    margin: 0,
    fontSize: '1.7rem',
    lineHeight: 1.1,
  },
  releaseSummary: {
    margin: 0,
    color: '#d7e6dc',
    lineHeight: 1.5,
  },
  statusRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.75rem',
  },
  statusPill: {
    padding: '0.45rem 0.8rem',
    borderRadius: 999,
    backgroundColor: '#f7a531',
    color: '#1c2f24',
    fontWeight: 700,
  },
  ownerPill: {
    padding: '0.45rem 0.8rem',
    borderRadius: 999,
    backgroundColor: '#274436',
    color: '#f5efe2',
    fontWeight: 600,
  },
  card: {
    padding: '2em',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.9rem',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#fff',
    boxShadow: '0 18px 45px rgba(168, 116, 44, 0.12)',
  },
  readTheDocs: { color: '#888' },
  link: {
    fontWeight: 500,
    color: '#646cff',
    textDecoration: 'none',
  },
  linkHover: { color: { default: null, ':hover': '#535bf2' } },
  h1: {
    margin: 0,
    fontSize: '3.2em',
    lineHeight: '1.05',
    color: tokens.primaryColor,
  },
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
