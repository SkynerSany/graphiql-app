import './documentation.scss';
import { useState } from 'react';
import { getData } from './documentation.data.js';
import { v1 } from 'uuid';

export default function Documentation(): JSX.Element {
  const doc = getData();
  const [fields, setFields] = useState(doc.fields);

  function nextField(field: string): void {
    if (typeof fields[field] !== 'function') return;

    setFields(fields[field]().fields);
  }

  function fieldIsFunction(field) {
    return typeof field === 'function' ? field().constructor.name : field;
  }

  return (
    <section className="documentation">
      <ul className="documentation__list">
        {Object.entries(fields).map((field) => {
          return (
            <li onClick={() => nextField(field[0])} key={v1()}>{`${field[0]}: ${fieldIsFunction(
              field[1]
            )}`}</li>
          );
        })}
      </ul>
    </section>
  );
}
