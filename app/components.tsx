'use client';

import { logServer } from './actions';

export function CallServerActionButton() {
  return <button onClick={logServer}>Server Action</button>;
}

export function ThrowErrorButton() {
  return (
    <button
      onClick={() => {
        throw new Error('Hey!');
      }}
    >
      Throw Error
    </button>
  );
}
