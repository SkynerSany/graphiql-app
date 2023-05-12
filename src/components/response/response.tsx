import './response.scss';
import lang from './response.lang.json';
import React from 'react';

export default function Response() {
  const text = lang.en;

  return (
    <section className="response">
      <h3>{text.title}</h3>
    </section>
  );
}
