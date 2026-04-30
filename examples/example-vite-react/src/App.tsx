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
          <strong {...stylex.props(styles.launchRailTitle)}>
            Launch readiness
          </strong>
          <span {...stylex.props(styles.launchRailCopy)}>
            Mobile QA, keyboard smoke, asset rendering, and release ownership
            all verified before ship.
          </span>
          <button {...stylex.props(styles.launchRailButton)}>
            Inspect final launch checkpoint before release
          </button>
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
    alignItems: 'center',
    backgroundColor: '#111827',
    borderRadius: 10,
    color: 'white',
    display: 'flex',
    gap: 24,
    justifyContent: 'space-between',
    marginTop: 32,
    minWidth: 980,
    padding: '18px 24px',
  },
  launchRailTitle: {
    fontSize: 24,
    whiteSpace: 'nowrap',
  },
  launchRailCopy: {
    color: '#d1d5db',
    textAlign: 'left',
  },
  launchRailButton: {
    backgroundColor: '#f97316',
    borderColor: 'transparent',
    borderRadius: 8,
    borderStyle: 'solid',
    color: 'white',
    cursor: 'pointer',
    fontWeight: 700,
    maxWidth: 150,
    overflow: 'hidden',
    padding: '10px 14px',
    textOverflow: 'clip',
    whiteSpace: 'nowrap',
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
  buttonInteractive: {
    borderColor: { ':hover': '#646cff' },
    outline: { ':focus-visible': '4px auto -webkit-focus-ring-color' },
  },
});
