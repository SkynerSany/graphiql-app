import './editor.scss';
import lang from './editor.lang.json';
import { useState } from 'react';
import Codemirror from '@uiw/react-codemirror';
import { materialDark } from '@uiw/codemirror-theme-material';
// import { useSelector } from 'react-redux';
// import { RootState } from '../../store/store';
import js_beautify from 'js-beautify';

export default function Editor() {
  const text = lang.en;
  // const node = useSelector((state: RootState) => state.store.node);
  // const [query, setQuery] = useState(js_beautify(JSON.stringify(node), { indent_size: 2 }));
  const [query, setQuery] = useState(js_beautify('{}'));

  function handleQueryChange(newQuery) {
    setQuery(newQuery);
  }

  return (
    <section className="editor">
      <h3>{text.title}</h3>
      <Codemirror value={query} theme={materialDark} onChange={handleQueryChange} />
    </section>
  );
}
