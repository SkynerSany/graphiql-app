import './editor.scss';
import lang from './editor.lang.json';
import { useState } from 'react';
import { setResponse } from '../../store/reducers';
import { useDispatch } from 'react-redux';
import js_beautify from 'js-beautify';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-kuroir';

export default function Editor() {
  const text = lang.en;
  const dispatch = useDispatch();
  const [query, setQuery] = useState(
    js_beautify('query{character(id:7){name episode{name}}}', { indent_size: 2 })
  );

  function getresponse() {
    const url = 'https://rickandmortyapi.com/graphql';

    const makeRequest = (query: string) => {
      return fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ query }),
      }).then((res) => res.json());
    };

    makeRequest(query).then(({ data }) =>
      dispatch(setResponse(js_beautify(JSON.stringify(data), { indent_size: 2 })))
    );
  }

  function onChange(newValue: string) {
    setQuery(newValue);
  }

  return (
    <section className="editor">
      <div className="editor__header">
        <h3 className="h-mb20">{text.title}</h3>
        <button onClick={() => getresponse()}>Send</button>
      </div>
      <AceEditor
        placeholder={text.response_placeholder}
        mode="json"
        theme="kuroir"
        name="blah2"
        onChange={onChange}
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={query}
        setOptions={{
          showLineNumbers: true,
          tabSize: 2,
        }}
        style={{ width: 'auto' }}
      />
    </section>
  );
}
