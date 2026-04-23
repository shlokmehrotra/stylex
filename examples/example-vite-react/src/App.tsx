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
  const [showLaunchPanel, setShowLaunchPanel] = useState(false);
  const launchWindows = [
    { label: 'Morning launch', owner: 'Design systems' },
    { label: 'Afternoon rollout', owner: 'Release engineering' },
  ];
  const selectedWindow = showLaunchPanel ? launchWindows[count] : launchWindows[0];

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
          <button
            {...stylex.props(styles.secondaryButton)}
            onClick={() => setShowLaunchPanel((value) => !value)}
          >
            Toggle launch panel
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        {showLaunchPanel ? (
          <section {...stylex.props(styles.launchPanel)}>
            <p {...stylex.props(styles.eyebrow)}>Launch readiness</p>
            <h2 {...stylex.props(styles.panelTitle)}>{selectedWindow.label}</h2>
            <p {...stylex.props(styles.panelCopy)}>
              Owner: {selectedWindow.owner.toUpperCase()}
            </p>
          </section>
        ) : null}
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
  buttonInteractive: {
    borderColor: { ':hover': '#646cff' },
    outline: { ':focus-visible': '4px auto -webkit-focus-ring-color' },
  },
  secondaryButton: {
    marginStart: 12,
    borderRadius: 999,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#242a49',
    padding: '0.6em 1.2em',
    color: '#242a49',
    backgroundColor: '#fff7df',
    cursor: 'pointer',
  },
  launchPanel: {
    marginTop: 24,
    padding: 24,
    borderRadius: 24,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ffd27a',
    background:
      'linear-gradient(135deg, rgba(255,247,223,0.98), rgba(255,216,196,0.92))',
    boxShadow: '0 22px 60px rgba(105, 62, 10, 0.22)',
  },
  eyebrow: {
    margin: 0,
    color: '#9b4d09',
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
  },
  panelTitle: {
    marginBlockStart: 6,
    marginBlockEnd: 8,
    color: '#2b1d0f',
    fontSize: 32,
  },
  panelCopy: {
    margin: 0,
    color: '#573719',
    fontWeight: 600,
  },
});
