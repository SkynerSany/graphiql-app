import './editor.scss';
import lang from './editor.lang.json';
import { useState } from 'react';
import { setResponse } from '../../store/reducers';
import { useDispatch, useSelector } from 'react-redux';
import js_beautify from 'js-beautify';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-kuroir';
import { RootState } from '../../store/store';

export default function Editor() {
  const text = lang.ru;
  const dispatch = useDispatch();
  const variables = useSelector((state: RootState) => state.variables.variables);

  const [query, setQuery] = useState(
    js_beautify(
      `query name($name: String,$status: String) {
      characters(filter: {name: $name, status: $status }){
      results{
      name
      status
      }}
      }`,
      { indent_size: 2 }
    )
  );

  function getResponse() {
    const url = 'https://rickandmortyapi.com/graphql';

    const makeRequest = (query: string) => {
      console.log('query/var=', query, '=', JSON.parse(variables));
      return fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ query, variables }),
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
      <h3>{text.title}</h3>
      <button onClick={() => getResponse()}>{text.send}</button>
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
