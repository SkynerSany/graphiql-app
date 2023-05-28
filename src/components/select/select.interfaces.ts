import { Dispatch } from 'react';

export type Props = {
  valueSelect: string;
  setLanguageSelectValue: Dispatch<string>;
  options: string[];
};
