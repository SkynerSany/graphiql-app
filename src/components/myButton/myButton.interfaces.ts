import { MouseEventHandler } from 'react';

export type Props = {
  content: string;
  className?: string;
  event?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset' | undefined;
};
