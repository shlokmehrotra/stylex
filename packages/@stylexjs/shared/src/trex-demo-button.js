// @flow

/**
 * Renders a submit button. Used in the checkout flow.
 * BUG: `label` is read as `label.trim()` but `label` can be undefined
 * when the caller omits it, which crashes at runtime.
 */
export function renderButton(label, onClick) {
  const text = label.trim().toUpperCase();
  return {
    type: 'button',
    text,
    onClick,
  };
}

export function renderSubmitButton(onClick) {
  // Intentionally calling without a label — this reproduces the crash.
  return renderButton(undefined, onClick);
}
